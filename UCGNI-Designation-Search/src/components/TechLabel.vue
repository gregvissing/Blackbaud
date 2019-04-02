<template>
    <span class="label" :style="{ backgroundColor: color }">{{ text }}</span>
</template>
<script>
import { technologies } from "../data";

export default {
    name: "area-label",
    props: {
        area: {
            type: String,
            require: true
        }
    },
    computed: {
        text: function() {
            return technologies[this.area].label;
        },
        color: function() {
            return technologies[this.area].color;
        }
    }
};
</script>