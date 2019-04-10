<template>
    <div class="tabs">
        <div class="tabs__list">
            <div
                class="tabs__tab"
                :class="{'tabs__tab_active': i === active}"
                @click="changeTab(i)"
                v-for="(label, i) in Tabs.labels"
                :key="i"
            >{{label}}</div>
        </div>
        <div class="tabs__container" ref="container">
            <div class="tabs__wrapper" ref="wrapper">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vue-tabs",
    data() {
        return {
            Tabs: {
                labels: [],
                items: [],
                active: 0
            }
        };
    },
    computed: {
        active() {
            return this.Tabs.active;
        }
    },
    methods: {
        setHeight() {
            const el = this.Tabs.items[this.active];
            const height = el.scrollHeight;
            this.$refs.container.style.height = height + "px";
        },
        scrollWrapper() {
            const { wrapper } = this.$refs;
            const offset = 100 * this.active;
            wrapper.style.transform = "translate3d(-" + offset + "%, 0, 0)";
        },
        changeTab(i) {
            this.Tabs.active = i;
            this.setHeight();
            this.scrollWrapper();
        }
    },
    provide() {
        return {
            Tabs: this.Tabs
        };
    },
    mounted() {
        this.setHeight();
        this.scrollWrapper();
        this.debounce = _.debounce(this.setHeight, 50);
        window.addEventListener("resize", this.debounce);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.debounce);
    }
};
</script>
