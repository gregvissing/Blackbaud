<script>
export default {
    name: "vue-tab",
    props: ["label", "active"],
    inject: ["Tabs"],
    created() {
        const length = this.Tabs.labels.push(this.label);
        if (this.active) {
            this.Tabs.active = length - 1;
        }
    },
    mounted() {
        this.Tabs.items.push(this.$el);
    }
};
</script>

<template>
    <div class="tabs__content">
        <slot/>
    </div>
</template>
