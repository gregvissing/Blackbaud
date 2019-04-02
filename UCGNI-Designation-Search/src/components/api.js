var vm = this;

var funds = [];
var ucgniCascadingFundsQueryId = "40664e66-2729-4b1a-8cea-964b987c0833";

var queryService = new BLACKBAUD.api.QueryService();
queryService.getResults(
  BBI.Defaults.ucgniCascadingFundsQueryId,
  function (data) {
    var allFunds = data.Rows;

    var fundMaster = [];
    var centerLevelAll = [];
    var topLevelAll = [];

    $.each(allFunds, function () {
      // define values
      var values = this.Values;
      var target = values[11]; // Areas of support
      var splitter = target.split("\\");

      var centers = values[12]; // Centers
      var centersSplitter = centers.split("\\");

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

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    var topLevelUnique = topLevelAll.filter(onlyUnique);
    vm.areaList = topLevelUnique;
    console.log(vm.areaList);

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
    vm.centerList = centerMaster;
    vm.centerData = centerMaster;

    console.log(vm.centerData);

    var uniqueFunds = multiDimensionalUnique(fundMaster);

    $.each(uniqueFunds, function (x, subFund) {
      var fundRowData = {
        area: subFund[0],
        center: subFund[1],
        fund: subFund[2],
        hierachy: "https://foundation.uc.edu/donate?id=" + subFund[3]
      };
      funds.push(fundRowData);
    });
    console.log(funds);
    vm.fundData = funds;
  }
);
