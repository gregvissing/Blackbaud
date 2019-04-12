<template>
    <div class="center btn-group btn-group-toggle">
        <label
            class="btn btn-secondary"
            :class="{ 'select': selected === center[0], '': selected !== center[0] }"
            v-for="(center, index) in centers"
            :key="index"
            :item="center"
            @click="changeSelectVal(key)"
        >
            <input type="radio" :value="center[0]" name="center-filter" v-model="selected">
            {{center[0]}}
        </label>
    </div>
</template>

<script>
export default {
    name: "radio-group",
    props: ["centers", "selected"],
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
