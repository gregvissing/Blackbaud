<template>
    <nav id="cd-vertical-nav" >
        <ul>
            <li v-for="(navItem, index) in navItems" :key="index">
                <a :href="navItem.href" :data-number="index + 1">
                    <span class="cd-dot"></span>
                    <span class="cd-label">{{ navItem.text }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            navItems: [
                {
                    href: '#cover',
                    text: 'COVER'
                },
                {
                    href: '#intro',
                    text: 'INTRO'
                },
                {
                    href: '#letters',
                    text: 'LETTERS'
                },
                {
                    href: '#impact',
                    text: 'IMPACT STORIES'
                },
                {
                    href: '#fundraising',
                    text: 'FUNDRAISING REPORT'
                },
                {
                    href: '#yearGlance',
                    text: 'YEAR AT A GLANCE'
                },
                {
                    href: '#pointsPride',
                    text: 'POINTS OF PRIDE'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
