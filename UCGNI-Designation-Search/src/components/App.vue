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

            <SearchBox v-model="searchTerm"/>
            <div class="form-group areas">
                <p>Areas</p>
                <RadioGroup :areas="areas" :selected.sync="area" v-model="area"/>
            </div>

            <transition name="fade">
                <div v-show="area != ''">
                    <div
                        class="form-group btn-group btn-group-toggle centers form-group text-center"
                        data-toggle="buttons"
                    >
                        <p>Centers</p>
                        <CenterRadioGroup
                            :centers="centerList"
                            :selected.sync="center"
                            v-model="center"
                        />
                        <!-- <label
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
                        </label>-->
                    </div>
                </div>
            </transition>

            <button @click.prevent="resetFields" class="btn btn-primary">ClEAR FILTERS</button>
        </div>

        <Pagination v-model="page" :items="funds.length" :perPage="10"/>
        <FundList :funds="pageOfFunds"/>
        <Pagination v-model="page" :items="funds.length" :perPage="10"/>

        <a class="scrollToTop" href="#" @click.prevent="scrollToTop">
            <span>&nbsp;</span>
        </a>

        <footer class="footer">
            <p class="text-center">
                Questions or need help?
                <span
                    class="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                ></span>
                <a href="tel:513-558-6903" aria-hidden="true">513-558-6903</a> or
                <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                <a href="mailto:ucgnistaff@uc.edu" aria-hidden="true">ucgnistaff@uc.edu</a>
            </p>
        </footer>
    </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import FundList from "./FundList";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";
import RadioGroup from "./RadioGroup";
import CenterRadioGroup from "./CenterRadioGroup";
import getArraySection from "../utilities/get-array-section";

export default {
    name: "app",
    components: {
        FundList,
        Pagination,
        SearchBox,
        RadioGroup,
        CenterRadioGroup
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
        funds: [], // static content
        page: 1,
        scrolled: false
    }),
    computed: {
        pageOfFunds: function() {
            return getArraySection(this.funds, this.page, 10);
        }
    },
    watch: {
        searchTerm: function() {
            this.filterFunds();
        },
        area: function() {
            this.center = "";
            this.filterFunds();
        },
        center: function() {
            this.filterFunds();
        }
    },
    methods: {
        resetFields: function() {
            this.searchTerm = "";
            this.area = "";
            this.center = "";
            this.filterFunds();
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
        filterFunds: function() {
            const searchTerm = this.searchTerm.toLowerCase();

            const area = this.area;
            const center = this.center;

            // let result = fundData;       // local data
            let result = this.fundData; // api data
            let centerResult = this.centerData;

            if (searchTerm) {
                result = result.filter(fund => {
                    return (
                        fund.fund.toLowerCase().search(searchTerm) >= 0
                        // || fund.description.toLowerCase().search(searchTerm) >= 0
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
                            // fund.fund.toLowerCase().search(searchTerm) >= 0
                            fund.fund.toLowerCase().search(searchTerm) >= 0 ||
                            fund.area.toLowerCase().search(searchTerm) >= 0
                        );
                    });
                }
            }

            if (searchTerm || area) {
                this.funds = _.orderBy(result, "fund");
                this.page = 1;
            } else {
                this.funds = "";
            }
        }
    },
    created: function() {
        var vm = this;
        var ucgniCascadingFundsQueryId = "40664e66-2729-4b1a-8cea-964b987c0833";
        var queryService = new BLACKBAUD.api.QueryService();
        queryService.getResults(
            BBI.Defaults.ucgniCascadingFundsQueryId,
            function(data) {
                var allFunds = data.Rows;
                var topLevelAll = [];
                // console.log(JSON.stringify(allFunds));

                $.each(allFunds, function() {
                    // define values
                    var values = this.Values;
                    var target = values[11]; // Areas of support
                    var splitter = target.split("\\");

                    // var centers = values[12]; // Centers
                    // var centersSplitter = centers.split("\\");

                    // remove first item in array
                    if (splitter.length > 1) {
                        splitter.shift();
                        // centersSplitter.shift();
                    }

                    // push values to array
                    splitter.push(values[12]); // Centers

                    splitter.push(values[13]); // Fund name
                    splitter.push(values[10]); // BBIS Fund Hierarchy Attribute\System record ID (GUID)

                    // centersSplitter.push(values[11]);
                    // fundMaster.push(splitter);
                    // centerLevelAll.push(centersSplitter);

                    topLevelAll.push(splitter[0]);
                });

                function onlyUnique(value, index, self) {
                    return self.indexOf(value) === index;
                }

                var topLevelUnique = topLevelAll.filter(onlyUnique);
                vm.areas = topLevelUnique;
            }
        );

        window.addEventListener("scroll", this.handleScroll);
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

                // function onlyUnique(value, index, self) {
                //     return self.indexOf(value) === index;
                // }

                // var topLevelUnique = topLevelAll.filter(onlyUnique);
                // vm.areas = topLevelUnique;

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
