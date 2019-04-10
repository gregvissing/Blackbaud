<template>
    <div class="container">
        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                    <img class="logo" :src="UCFLogo">
                </div>
                <nav>
                    <ul class="nav-list">
                        <li>
                            <h4>University of Cincinnati Gardner Neuroscience Institute</h4>
                            <h4>Online Giving</h4>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>

        <div class="jumbotron">
            <p class="text-center">Which Fund Would You Like to Support?</p>

            <vue-tabs>
                <vue-tab label="SEARCH BY KEYWORD" :active="true">
                    <div class="letter-text-container" id="search">
                        <SearchBox v-model="searchTerm"/>
                    </div>
                </vue-tab>
                <vue-tab label="FILTER BY AREA/CENTER">
                    <div class="letter-text-container" id="filter">
                        <div class="form-group areas">
                            <RadioGroup :areas="areas" v-model="area"/>
                        </div>

                        <!-- <transition name="fade"> -->
                        <div>
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
                                </label>
                            </div>
                        </div>

                        <!-- </transition> -->
                    </div>
                </vue-tab>
            </vue-tabs>
            <button @click.prevent="resetFields" class="btn btn-primary">ClEAR FILTERS</button>
        </div>

        <Pagination v-model="page" :items="funds.length" :perPage="10"/>
        <TutorialList :funds="pageOfTutorials"/>
        <Pagination v-model="page" :items="funds.length" :perPage="10"/>

        <a class="scrollToTop" href="#" @click.prevent="scrollToTop">
            <span>&nbsp;</span>
        </a>
    </div>
</template>

<script>
import _ from "lodash";
import TutorialList from "./TutorialList";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import RadioGroup from "./RadioGroup";
import CenterRadioGroup from "./CenterRadioGroup";
import getArraySection from "../utilities/get-array-section";
import VueTab from "./VueTab";
import VueTabs from "./VueTabs";
import { tutorials as tutorialData } from "../data";

export default {
    name: "app",
    components: {
        TutorialList,
        Pagination,
        SearchBox,
        RadioGroup,
        CenterRadioGroup,
        VueTab,
        VueTabs
    },
    data: () => ({
        UCFLogo:
            "https://foundation.uc.edu/file/projects/ucgni-search/images/logo-ucFoundation.png",
        UCLogo:
            "https://foundation.uc.edu/file/projects/ucgni-search/images/UCF-logo.png",
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
        page: 1,
        scrolled: false
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
        center: function() {
            this.filterTutorials();
        }
    },
    methods: {
        resetFields: function() {
            this.searchTerm = "";
            this.area = "";
            this.center = "";
            console.log("clicked" + this.searchTerm);
            this.filterTutorials();
        },
        scrollToTop() {
            $("html, body").animate(
                {
                    scrollTop: 0
                },
                300
            );
            return false;
        },
        handleScroll() {
            this.scrolled = window.scrollY > 0;
            if (window.scrollY > 100) {
                $(".navigation").addClass("reduced");
                $(".scrollToTop").fadeIn();
            } else {
                $(".navigation").removeClass("reduced");
                $(".scrollToTop").fadeOut();
            }
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
                            fund.fund.toLowerCase().search(searchTerm) >= 0 ||
                            fund.area.toLowerCase().search(searchTerm) >= 0
                        );
                    });
                }
            }

            if (searchTerm || area) {
                this.funds = _.orderBy(result, "fund"); //;
                this.page = 1;
            } else {
                this.funds = "";
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
        window.addEventListener("scroll", this.handleScroll);
        //this.getDesignations();
        // this.filterCenterAndFunds();
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
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
                    var hierachyConcat = "";
                    if (subFund[3]) {
                        hierachyConcat =
                            "https://foundation.uc.edu/donate?id=" + subFund[3];
                    }
                    var fundRowData = {
                        area: subFund[0],
                        center: subFund[1],
                        fund: subFund[2],
                        description:
                            "Fund description: This is the description for the fund " +
                            subFund[2] +
                            " in the Area: " +
                            subFund[0] +
                            " located in the " +
                            subFund[1] +
                            " center!",
                        hierachy: hierachyConcat
                    };
                    funds.push(fundRowData);
                });

                // var consoleData = [];
                // consoleData = funds;
                // console.log("stringify");
                // console.log(JSON.stringify(funds));

                // console.log("table");
                // console.table(funds);

                vm.fundData = funds;
            }
        );
    }
};
</script>

<style lang="scss" scoped>
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
    margin: 10px 0;
}
</style>
