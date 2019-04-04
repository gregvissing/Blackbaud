<template>
    <Transition name="swap" mode="out-in">
        <div class="tutorial-list" :key="funds">
            <Tutorial
                class="tutorial card"
                v-for="(fund, index) in funds"
                :item="fund"
                :key="index"
            />
        </div>
    </Transition>
</template>

<script>
import Tutorial from "./Tutorial";

export default {
    name: "fund-list",
    components: { Tutorial },
    props: ["funds"]
};
</script>

<style scoped>
.tutorial-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
}

.tutorial {
    padding: 20px 20px 55px 20px;
    position: relative;
}

@media only screen and (min-width: 600px) {
    .tutorial {
        width: 46%;
    }
}

@media only screen and (max-width: 599px) {
    .tutorial {
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
