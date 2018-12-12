<template>
  <section id="intro" class="cd-section intro animateblock" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="intro-container" ref="intro" v-bind:style="{ backgroundImage: 'url(' + txtBgImage + ')' }">
        <div class="intro-text" v-html="text"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    bgImage: String,
    txtBgImage: String,
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
