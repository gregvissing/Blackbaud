<template>
    <nav id="cd-vertical-nav" >
        <ul>
            <li>
                <a href="#cover" data-number="1">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ coverNav }}</span>
                </a>
            </li>
            <li>
                <a href="#intro" data-number="2">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ introNav }}</span>
                </a>
            </li>
            <li>
                <a href="#impact" data-number="3">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ impactStoriesNav }}</span>
                </a>
            </li>
            <li>
                <a href="#financials" data-number="4">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ financialsNav }}</span>
                </a>
            </li>
            <li>
                <a href="#yearGlance" data-number="5">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ yearGlanceNav }}</span>
                </a>
            </li>
            <li>
                <a href="#pointsPride" data-number="6">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ pointsPrideNav }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    coverNav: String,
    introNav: String,
    impactStoriesNav: String,
    financialsNav: String,
    yearGlanceNav: String,
    pointsPrideNav: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>