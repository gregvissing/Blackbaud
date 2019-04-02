<template>
    <div class="container">
        <img
            src="https://foundation.uc.edu/image/landing-page-headers/UCGNI-overlay.png"
            class="heroBgImage"
        >
        <div class="header clearfix">
            <h2>UCGNI Designation Search</h2>
        </div>

        <div class="jumbotron">
            <p>Use the Search Box and Area/Center selectors to find the fund you're looking for.</p>
            <SearchBox v-model="searchTerm"/>

            <div class="form-group areas">
                 <h4 class="text-center">Select an Area</h4>
                <RadioGroup :areas="areas" v-model="area"/>
            </div>
           
            <!-- <h4>Select an Area</h4> -->
            <!-- <div class="form-group text-center">
                <label class="radio-inline" v-for="(areaVal, index) in areaList" :key="index">
                    <input type="radio" :value="areaVal" name="area-filter" v-model="area">
                    <span class="label label-default">{{ areaVal }}</span>
                </label>
            </div>-->

            <transition name="fade">
                <div v-show="area != ''">
                    <h4 class="select-center text-center">Select a Center</h4>
                    <div
                        class="form-group btn-group btn-group-toggle centers form-group text-center"
                        data-toggle="buttons"
                    >
                        <label
                            class="btn btn-secondary"
                            v-for="(centerVal, index) in centerList"
                            :key="index"
                        >
                            <input
                                type="radio"
                                :value="centerVal[0]"
                                name="center-filter"
                                v-model="center"
                            >
                            {{centerVal[0]}}
                            <!-- <span class="label label-default">{{centerVal[0]}}</span> -->
                        </label>
                    </div>
                </div>
            </transition>
        </div>

        <Pagination v-model="page" :items="funds.length" :perPage="10"/>
        <TutorialList :funds="pageOfTutorials"/>
        <Pagination v-model="page" :items="funds.length" :perPage="10"/>
    </div>
</template>

<script>
// import { areaList as areaData, centerData as centerValues } from "./api";
import TutorialList from "./TutorialList";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import RadioGroup from "./RadioGroup";
import CenterRadioGroup from "./CenterRadioGroup";
import getArraySection from "../utilities/get-array-section";
import { tutorials as tutorialData } from "../data";

export default {
    name: "app",
    components: {
        TutorialList,
        Pagination,
        SearchBox,
        RadioGroup,
        CenterRadioGroup
    },
    data: () => ({
        searchTerm: "",
        area: "",
        areas: [],
        areaList: [],

        center: "",
        centers: [],
        centerList: [],
        centerData: [],

        funds: [], // api content
        fundData: [],
        tutorials: [], // static content
        page: 1
    }),
    computed: {
        pageOfTutorials: function() {
            return getArraySection(this.funds, this.page, 10);
        }
    },
    watch: {
        searchTerm: function() {
            this.filterTutorials();
        },
        area: function() {
            this.filterTutorials();
        },
        // fundData: function() {
        //     this.filterCenterAndFunds();
        // },
        center: function() {
            this.filterTutorials();
        }
    },
    mounted() {
        var vm = this;

        var funds = [];
        var ucgniCascadingFundsQueryId = "40664e66-2729-4b1a-8cea-964b987c0833";

        var queryService = new BLACKBAUD.api.QueryService();
        queryService.getResults(
            BBI.Defaults.ucgniCascadingFundsQueryId,
            function(data) {

                var allFunds = data.Rows;

                var fundMaster = [];
                var centerLevelAll = [];
                var topLevelAll = [];

                // var consoleData = [];
                // consoleData = funds;
                console.log('stringify');
                console.log(JSON.stringify(data));

                console.log('table');
                console.table(data);

                $.each(allFunds, function() {
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
                vm.areas = topLevelUnique;

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

                var uniqueFunds = multiDimensionalUnique(fundMaster);

                $.each(uniqueFunds, function(x, subFund) {
                    var fundRowData = {
                        area: subFund[0],
                        center: subFund[1],
                        fund: subFund[2],
                        hierachy:
                            "https://foundation.uc.edu/donate?id=" + subFund[3]
                    };
                    funds.push(fundRowData);
                });
                
                vm.fundData = funds;
            }
        );
    },
    methods: {
        filterCenterAndFunds: function() {
            //return console.log(this.fundData);
        },
        filterTutorials: function() {
            const searchTerm = this.searchTerm.toLowerCase();

            const area = this.area;
            const center = this.center;

            // let result = tutorialData;       // local data
            let result = this.fundData; // api data
            let centerResult = this.centerData;

            if (searchTerm) {
                result = result.filter(fund => {
                    return (
                        fund.fund.toLowerCase().search(searchTerm) >= 0
                        // || tutorial.description.toLowerCase().search(searchTerm) >= 0
                    );
                });
            }

            // removing below for now
            if (area) {
                if (searchTerm) {
                    result = result.filter(fund => {
                        return (
                            fund.fund.toLowerCase().search(searchTerm) >= 0
                            // || fund.toLowerCase().search(searchTerm) >= 0
                        );
                    });
                }

                centerResult = centerResult.filter(center =>
                    center.includes(area)
                );

                this.centerList = centerResult;

                result = result.filter(fund => fund.area.includes(area));

                if (center) {
                    // console.log("center selected: " + center);

                    result = result.filter(fund =>
                        fund.center.includes(center)
                    );
                }

                if (searchTerm) {
                    result = result.filter(fund => {
                        return (
                            // tutorial.fund.toLowerCase().search(searchTerm) >= 0
                            fund.fund.toLowerCase().search(searchTerm) >=
                                0 ||
                            fund.area.toLowerCase().search(searchTerm) >= 0
                        );
                    });
                }
                
            }

            if (searchTerm || area) {
                this.funds = result;
                this.page = 1;
            }
        },
        getDesignations: function() {
            var vm = this;

            var funds = [];
            var ucgniCascadingFundsQueryId =
                "40664e66-2729-4b1a-8cea-964b987c0833";

            var queryService = new BLACKBAUD.api.QueryService();
            queryService.getResults(
                BBI.Defaults.ucgniCascadingFundsQueryId,
                function(data) {
                    var allFunds = data.Rows;

                    var fundMaster = [];
                    var centerLevelAll = [];
                    var topLevelAll = [];

                    $.each(allFunds, function() {
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
                    // console.log(vm.areaList);

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

                    // console.log(centerList);

                    var uniqueFunds = multiDimensionalUnique(fundMaster);

                    $.each(uniqueFunds, function(x, subFund) {
                        var fundRowData = {
                            area: subFund[0],
                            center: subFund[1],
                            fund: subFund[2],
                            hierachy:
                                "https://foundation.uc.edu/donate?id=" +
                                subFund[3]
                        };
                        funds.push(fundRowData);
                    });
                    // console.log(funds);
                    vm.fundData = funds;
                }
            );
        }
    },
    created: function() {
        //this.getDesignations();
        // this.filterCenterAndFunds();
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

/* .container {
    max-width: 750px;
    min-height: 100vh !important;
} */
.footer {
    padding: 15px;
    color: #777;
    border-top: 1px solid #e5e5e5;
}
.header {
    margin: 10px 0 20px;
}
</style>