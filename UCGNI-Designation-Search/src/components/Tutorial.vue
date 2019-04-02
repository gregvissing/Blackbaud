<template>
    <div>
        <h4>
            <a :href="item.hierachy">{{ item.fund }}</a>
        </h4>
        <p class="meta">Donation link: {{ item.hierachy }}</p>
        <p>Area: {{ item.area }}</p>
        <p>Center: {{ item.center }}</p>
        <p>
            Description of fund here!
            <!-- <TechLabel
                class="area-label"
                v-for="(area, index) in item.area"
                :area="area"
                :key="index"
            />-->
        </p>
    </div>
</template>

<script>
import TechLabel from "./TechLabel";

// let parser = document.createElement("a");

export default {
    name: "fund",
    props: ["item"]
    //components: { TechLabel },
    // methods: {
    //     domainOf: hierachy => (
    //         (parser.href = hierachy), parser.hostname.replace(/^www\./, "")
    //     )
    // }
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
