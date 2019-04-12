<template>
    <div v-bind:class="classHierarchy">
        <h4 v-if="item.fund">{{ item.fund }}</h4>
        <h4 v-else>Fund name blank</h4>
        <!-- <p class="meta">Donation link: {{ item.hierachy }}</p> -->
        <!-- <p>Area: {{ item.area }}</p>
        <p>Center: {{ item.center }}</p>-->
        <!-- <p>Description of Fund: {{ item.description }} here!</p> -->
        <p>{{ item.description }}</p>

        <a class="btn btn-primary" v-if="item.hierachy != ''" :href="item.hierachy">Donate Now</a>
        <a class="btn btn-secondary" v-else>Needs Hierarchy</a>
    </div>
</template>

<script>
export default {
    name: "fund",
    props: ["item"],
    computed: {
        classHierarchy: function() {
            if (this.item.hierachy) {
                return "active";
            }
        }
    }
};
</script>

<style scoped>
.meta {
    color: #777;
    font-size: 0.85em;
}

.meta-bit {
    color: #333;
    font-weight: bold;
}

.area-label + .area-label {
    margin-left: 10px;
}
</style>
