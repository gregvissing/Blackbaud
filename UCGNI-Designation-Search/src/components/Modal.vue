<template>
    <div></div>
</template>

<script>
export default {
    name: "file-brower",
    template: "#file-brower-tempate",
    data: function() {
        return {
            id: "vu-" + Math.floor(Math.random() * (999999 - 11111) + 11111),
            title: "title",
            url: "url"
        };
    },
    methods: {
        show: function(title, url) {
            this.title = title;
            this.url = url;
            console.log(this.title, this.url);
            $("#" + this.id).modal("show");
        }
    }
};
</script>

<style scoped>
</style>