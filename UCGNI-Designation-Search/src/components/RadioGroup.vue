<template>
    <div class="area btn-group btn-group-toggle">
        <label
            class="btn btn-secondary"
            :class="{ 'select': selected === area, '': selected !== area }"
            v-for="(area, index) in areas"
            :key="index"
            :item="area"
            @click="changeSelectVal(key)"
        >
            <input type="radio" :value="area" name="area-filter" v-model="selected">
            {{area}}
        </label>
    </div>
</template>

<script>
export default {
    name: "radio-group",
    props: ["areas", "selected"],
    data: function() {
        return { selected: this.value };
    },
    watch: {
        selected: function(val) {
            this.$emit("input", val);
        }
    },
    methods: {
        changeSelectVal: function(val) {
            this.selected = val;
        }
    }
};
</script>

<style scoped>
.radio-inline {
    padding-right: 10px;
}
</style>
