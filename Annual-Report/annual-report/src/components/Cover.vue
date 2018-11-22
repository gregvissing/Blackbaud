<template>
  	<section id="cover" class="cd-section cover animateblock" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
        <span class="borderTriangle" ref="covertriangle"></span>
        <h2 id="redefining">{{ redefining }}</h2>
        <h1 id="next">{{ next }}</h1>
        <div class="cover-text">
            <h2>{{ title }}</h2>
            <h3>{{ subtitle }}</h3>
            <img :src="logo" />
        </div>
    </section>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    bgImage: String,
    redefining: String,
    next: String,
    title: String,
    subtitle: String,
    logo: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
