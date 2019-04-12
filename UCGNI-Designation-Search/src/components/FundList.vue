<template>
    <Transition name="swap" mode="out-in">
        <div class="fund-list" :key="funds">
            <Fund class="fund card" v-for="(fund, index) in funds" :item="fund" :key="index"/>
        </div>
    </Transition>
</template>

<script>
import Fund from "./Fund";

export default {
    name: "fund-list",
    components: { Fund },
    props: ["funds"]
};
</script>

<style scoped>
.fund-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
}

.fund {
    padding: 20px 20px 55px 20px;
    position: relative;
}

@media only screen and (min-width: 600px) {
    .fund {
        width: 46%;
    }
}

@media only screen and (max-width: 599px) {
    .fund {
        width: 96%;
    }
}

/* VUE TRANSITION */
.swap-enter-active,
.swap-leave-active {
    transition: all 0.25s ease-in-out;
}
.swap-enter,
.swap-leave-active {
    opacity: 0;
}
.swap-enter {
    transform: translateX(75px);
}
.swap-leave-to {
    transform: translateX(-75px);
}
</style>
