<template>
    <div class="area btn-group btn-group-toggle">
        <!-- <template v-for="option in options"> -->
        <!-- <template v-for="area in areas"> -->
        <label class="btn btn-secondary" v-for="(area, index) in areas" :key="index" :item="area">
            <input type="radio" :value="area" name="area-filter" v-model="selected">
            {{area}}
            <!-- <span class="label label-default">{{area}}</span> -->
            <!-- <span class="label label-default" v-if="option === ''">All</span> -->
            <!-- <TechLabel :area="option"/> -->
        </label>
        <!-- </template> -->
    </div>
</template>

<script>
import TechLabel from "./TechLabel";
// import { technologies } from "../data";
// console.log(Object.keys(technologies));

export default {
    name: "radio-group",
    components: { TechLabel },
    props: ["areas"],
    data: function() {
        return { selected: this.value };
    },
    watch: {
        selected: function(val) {
            this.$emit("input", val);
        }
    }
};
</script>

<style scoped>
.radio-inline {
    padding-right: 10px;
}
</style>
