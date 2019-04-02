var BBI = BBI || {
  // update these values when updating changelog
  Config: {
    version: 1.0,
    updated: '12/22/2015 4:30 PM',
    isEditView: !!window.location.href.match('pagedesign'),
    slideshowRan: false
  },


  Defaults: {
    // we have to remove alumni from rootpath, otherwise it won't hit the API Endpoint
    rootpath: (function () {
      var str = BLACKBAUD.api.pageInformation.rootPath;
      var shortString = str.substring(0, str.lastIndexOf("alumni"));
      return shortString;
    })(),
    pageId: BLACKBAUD.api.pageInformation.pageId,
    highlightedUcgniFundsQueryId: (function () {
      if (BLACKBAUD.api.pageInformation.rootPath === 'https://www.alumni.uc.edu/') {
        return "bcafe634-adaa-4b72-b79d-ed16fc18bc8f";
      } else {
        return "dcb9afbd-8cc0-4dc5-990f-24716779c18d";
        // return "c22e7fbb-abcb-4aed-acb2-b18f8639f77e";
      }
    })(),
    ucgniCascadingFundsQueryId: (function () {
      if (BLACKBAUD.api.pageInformation.rootPath === 'https://www.alumni.uc.edu/') {
        return "d54d11f0-3f9c-4d63-91a8-fecf1f06944c";
      } else {
        // Update this for UC Foundation website
        return "40664e66-2729-4b1a-8cea-964b987c0833";
        // return "dcb9afbd-8cc0-4dc5-990f-24716779c18d";
      }
    })(),
    areasToSupport: [],
    centersToSupport: [],
    fundsToSupport: []
  },


  Methods: {
    //methods in here such as pageInit, etc.
    pageInit: function () {
      //All functions which should run instantly
      //Style fixes in admin view
      if (BBI.Config.isEditView) {
        BBI.Methods.adminStyleFixes();
      } else {
        BBI.Methods.initADF();
      }
    },
    initADF: function () {
      //if ($('#advancedDonationFormCustom').length !== 0) {
      // BBI.Methods.populateCustomCascadingFields();
      //}
    },
    adminStyleFixes: function () {
      $('[class*="show-for-"], [class*="hide-for-"], .fullWidthBackgroundImage, .fullWidthBackgroundImageInner').attr('class', '');
      $('header div').not('[id^="pane"], [id^="pane"] div').css('position', 'static');
      $('.fullWidthBackgroundImageInner').show();
    },
    populateCustomDesignationIds: function () {
      var queryService = new BLACKBAUD.api.QueryService();

      queryService.getResults(BBI.Defaults.highlightedUcgniFundsQueryId, function (data) {

        var fields = data.Fields,
          rows = data.Rows,
          fieldArray = [];
        // console.log(fields);
        // console.log(rows);
        $.each(fields, function (key, value) {
          fieldArray[value.Name] = key;
        });

        $.each(rows, function () {
          var values = this['Values'],
            designationID = values[fieldArray['System record ID']],
            designationName = values[fieldArray['Public name']], // use friendly name
            itemHTML = '<li class="designationButton"><a rel="' + designationID + '">' + designationName + '</a></li>';
          //$('.ucgniDesignationButtonWrapper').append(itemHTML);
          //console.log(values);
        });
      });
    },

    populateCustomCascadingFields: function () {
      // get designations for drop-down (cascading)
      // note: must be attached to a query that returns Public Name and System Record ID            
      var queryService = new BLACKBAUD.api.QueryService();
      queryService.getResults(BBI.Defaults.ucgniCascadingFundsQueryId, function (data) {
        // fund data
        var allFunds = data.Rows; // Field values
        // var allFields = data.Fields;    // Field names
        var fundMaster = [];
        var centerLevelAll = [];
        var topLevelAll = [];

        var fundLog = [];

        // get drop-down hierarchy and clean arrays
        $.each(allFunds, function () {
          // define values
          var values = this.Values;
          var target = values[11]; // Areas of support   
          var splitter = target.split('\\');

          var centers = values[12]; // Centers
          var centersSplitter = centers.split('\\');

          // remove first item in array
          if (splitter.length > 1) {
            splitter.shift();
            centersSplitter.shift();
          }

          // push values to array
          splitter.push(values[12]); // Centers
          splitter.push(values[13]); // Fund name
          splitter.push(values[10]); // BBIS Fund Hierarchy Attribute\System record ID (GUID)

          centersSplitter.push(values[11]);

          fundMaster.push(splitter);

          centerLevelAll.push(centersSplitter);

          topLevelAll.push(splitter[0]);
        });

        // filter unique values
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }

        var $topLevelUnique = topLevelAll.filter(onlyUnique);
        BBI.Defaults.areasToSupport = $topLevelUnique;

        window.nameOfYourVariable = $topLevelUnique
        console.log('areas');
        console.log(BBI.Defaults.areasToSupport);

        //window.areasToSupport = topLevelUnique;

        //export let areasToSupport = BBI.Defaults.areasToSupport;
        //console.log(BBI.Defaults.areasToSupport);
        //$('#advancedDonationFormCustom').append(BBI.Defaults.areasToSupport);
        //window.areasToSupport = BBI.Defaults.areasToSupport;

        // $.each(topLevelUnique, function(key, value) {
        //     // var newValue = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();        
        //     $(fundsDesignation).append($("<span class='btn btn-primary col-3\@sm col-3\@md' data-area='" + value + "' >" + value + "</span>"));
        // });

        function multiDimensionalUnique(arr) {
          var uniques = [];
          var itemsFound = {};
          for (var i = 0, l = arr.length; i < l; i++) {
            var stringified = JSON.stringify(arr[i]);
            if (itemsFound[stringified]) {
              continue;
            }
            if (arr[i][0].length != 0) {
              uniques.push(arr[i]);
            }
            itemsFound[stringified] = true;
          }
          return uniques;
        }
        var centerMaster = multiDimensionalUnique(centerLevelAll);

        var centers = [];
        $.each(centerMaster, function (x, values) {
          //var newValue = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-').toLowerCase();        
          // $(centersResult).append($("<span style='display:none;' class='btn btn-primary' data-area='" + values[1] + "' data-center='" + values[0] + "' >" + values[0] + "</span>"));
          var centerRowData = {
            "area": values[1],
            "center": values[0]
          }
          centers.push(centerRowData);
        });

        console.log('centers');
        BBI.Defaults.centersToSupport = centers;
        console.log(centers);

        //console.log(fund);
        var uniqueFunds = multiDimensionalUnique(fundMaster);

        $.each(uniqueFunds, function (x, subFund) {
          var newValue = subFund[2].replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
          // $(fundsResult).append($("<div class='fund' data-area='" + subFund[0] + "' data-center='" + subFund[1] + "' style='display:none;'><p>" + subFund[2] + "</p><div class='btn-container'><a class='fancybox btn btn-primary' href='javascript:;' data-fancybox data-src='#" + newValue + "' data-modal='true'>Info</a><a href='https://foundation.uc.edu/donate?id=" + subFund[3] + "' class='btn btn-primary donate'>Donate</a></div></div><div id='" + newValue + "' class='content-container' style='display:none'><button class='btn btn-primary close' data-fancybox-close=''>&times;</button><h2>" + subFund[0] + "</h2><a href='https://foundation.uc.edu/donate?id=" + subFund[3] + "' class='btn btn-primary donate'>Donate</a></div>"));

          var fundRowData = {
            "area": subFund[0],
            "center": subFund[1],
            "fund": subFund[2],
            "hierachy": "https://foundation.uc.edu/donate?id=" + subFund[3]
          }
          fundLog.push(fundRowData);
        });

        BBI.Defaults.fundsToSupport = fundLog;
        console.log('funds');
        console.log(BBI.Defaults.fundsToSupport);
      });
    },
  }
};

// Run global scripts...
BBI.Methods.pageInit();
