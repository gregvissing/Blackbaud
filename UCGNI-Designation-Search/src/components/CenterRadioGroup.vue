<template>
    <div class="form-group text-center">
        <template v-for="center in centers">
            <label class="radio-inline">
                <input type="radio" :value="center" :name="name" v-model="selected">
                <span class="label label-default">{{center}}</span>
                <!-- <TechLabel v-else :area="option"/> -->
            </label>
        </template>
    </div>
</template>

<script>
import TechLabel from "./TechLabel";
import { tutorials } from "../data";

export default {
    name: "center-radio-group",
    // components: { TechLabel },
    // props: {
    //     value: {
    //         default: ""
    //     },
    //     centers: {
    //         type: Array,
    //         default: () => ["", ...Object.keys(tutorials)]
    //     },
    //     name: {
    //         type: String,
    //         default: "center-filter"
    //     }
    // },
    //props: ["centers"],
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
