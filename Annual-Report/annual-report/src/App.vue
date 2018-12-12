<template>
  	<div id="app" ref="appWidth">

		<component v-if="width <= 768" :is="currentMenu" :right="side === 'right'">
            <a href="#cover" data-number="1">
                <i class="fa fa-fw fa-book"></i>
                <span>COVER</span>
            </a>
            <a href="#intro" data-number="2">
                <i class="fa fa-fw fa-file-text-o"></i>
                <span>INTRO</span>
            </a>
            <a href="#letters" data-number="3">
                <i class="fa fa-fw fa-envelope-o"></i>
                <span>LETTERS</span>
            </a>
            <a href="#impact" data-number="4">
                <i class="fa fa-fw fa-newspaper-o"></i>
                <span>IMPACT STORIES</span>
            </a>
            <a href="#fundraising" data-number="5">
                <i class="fa fa-fw fa-bar-chart-o"></i>
                <span>FUNDRAISING REPORT</span>
            </a>
            <a href="#yearGlance" data-number="6">
                <i class="fa fa-fw fa-comment-o"></i>
                <span>YEAR AT A GLANCE</span>
            </a>
			<a href="#pointsPride" data-number="7">
                <i class="fa fa-fw fa-list"></i>
                <span>POIONTS OF PRIDE</span>
            </a>
        </component>

		<Nav v-if="width > 768" />

		<Cover	
			bgImage="https://foundation.uc.edu/image/annual-report/2018/cover/UC-Campus-Scenes0286.jpg" 
			redefining="REDEFINING" 
			next="NEXT"
			title="ANNUAL REPORT"
			subtitle="Fiscal Year 2018"
			logo="https://foundation.uc.edu/image/annual-report/2018/logo-ucFoundation.png" />
		
		<Intro	
			bgImage="https://foundation.uc.edu/image/annual-report/2018/intro/UC-Campus-Scenes0164.jpg" 
			txtBgImage="https://foundation.uc.edu/image/annual-report/2018/intro/introTextBg.png"
			text="<p>At the University of Cincinnati and UC Health, <span class='nextTxt'>NEXT</span> means breaking a path for a new generation of leaders and affording opportunities to broaden our worldview.</p><p><span class='nextTxt'>NEXT</span> means expanding our creative potential to innovate our approach to education and patient care.</p><p><span class='nextTxt'>NEXT</span> means solving complex societal problems and saving people's lives.</p><p><strong>We're not just anticipating the future—with your help, we're already changing its course. Together, we can redefine <span class='nextTxt'>NEXT</span> for our region, nation and world.</strong></p>"/>
		
		<Letters />
		<Impact />
		<Fundraising />
		<YearGlance />
		<PointsPride />
		<Footer 
		logo="https://foundation.uc.edu/image/annual-report/2018/logo-ucFoundation.png"
		contactTitle="Contact Us" 
		institution="The University of Cincinnati Foundation" 
		poBox="PO Box 19970" 
		citySt="Cincinnati, OH" 
		zip="45219" 
		phone="513-556-6781" 
		altPhone="888-556-8889" 
		fax="513-556-4300 (fax)" 
		email="ucfoundation@uc.edu"
		campusTitle="Campus"
		campusBuilding="University Hall, Suite 100"
		campusAddress="51 Goodman Drive"
		campusCityStZip="Cincinnati, OH 45219"
		campusGoogleMapLink="https://www.google.com/maps/place/University+Hall,+51+Goodman+St+%23100,+Cincinnati,+OH+45221/@39.1365897,-84.5106596,17z/data=!3m1!4b1!4m5!3m4!1s0x8841b3911b29ad97:0xc37b8e60713384a2!8m2!3d39.1365897!4d-84.5084709"
		signUpTitle="Sign Up For Email"
		signUpText="You'll get timely updates on news, events and more from the UC Foundation."
		signUpButtonLink="https://foundation.uc.edu/email-sign-up-form"
		privacyPolicyLink="https://foundation.uc.edu/privacy-policy" />  
  	</div>
</template>

<script>
import Nav from './components/Nav.vue'
import slide from './components/slide.vue'
import Menu from './components/Menu.vue'
import Cover from './components/Cover.vue'
import Intro from './components/Intro.vue'
import Letters from './components/Letters.vue'
import Impact from './components/Impact.vue'
import Fundraising from './components/Fundraising.vue'
import YearGlance from './components/YearGlance.vue'
import PointsPride from './components/PointsPride.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'app',
	data() {
        return {
			width: '0px',
			fullWidth: document.documentElement.clientWidth,
			show: false,
			mobileNavItems: [
                {
                    href: '#cover',
					text: 'COVER',
					icon: 'fa fa-fw fa-book'
                },
                {
                    href: '#intro',
                    text: 'INTRO',
					icon: 'fa fa-fw fa-file-text-o'
                },
                {
                    href: '#letters',
                    text: 'LETTERS',
					icon: 'fa fa-fw fa-envelope-o'
                },
                {
                    href: '#impact',
                    text: 'IMPACT STORIES',
					icon: 'fa fa-fw fa-newspaper-o'
                },
                {
                    href: '#fundraising',
                    text: 'FUNDRAISING REPORT',
					icon: 'fa fa-fw fa-bar-chart-o'
                },
                {
                    href: '#yearGlance',
                    text: 'YEAR AT A GLANCE',
					icon: 'fa fa-fw fa-comment-o'
                },
                {
                    href: '#pointsPride',
                    text: 'POINTS OF PRIDE',
					icon: 'fa fa-fw fa-list'
                }
			],
			side: 'right',
			currentMenu: 'slide'
		}
	},
	components: {
		Nav,
		slide,
		Menu,
		Cover,
		Intro,
		Letters,
		Impact,
		Fundraising,
		YearGlance,
		PointsPride,
		Footer
	},
	mounted() {
		this.computedWidth()
	},
	computed: {
		label: function() {
			return this.show ? "X" : "MENU";
		}
	},
	methods: {
		computedWidth: function () {
			this.width = this.$refs.appWidth.clientWidth;
			return this.width;
		}
	}
}
</script>

<style lang="scss">
	@import "./assets/scss/_base.scss";
	@import "./assets/scss/_include-media.scss";
	@import "./assets/scss/_styles.scss";

	@import "./assets/scss/_nav.scss";

	@import "./assets/scss/_cover.scss";

	@import "./assets/scss/_intro.scss";

	@import "./assets/scss/_letters.scss";

	@import "./assets/scss/_fundraising.scss";
	@import "./assets/scss/_tabs.scss";
	@import "./assets/scss/_modal.scss";
	@import "./assets/scss/_table.scss";

	@import "./assets/scss/_glance.scss";

	@import "./assets/scss/_carousel.scss";

	@import "./assets/scss/_points-pride.scss";

	@import "./assets/scss/_footer.scss";   
	@import "./assets/scss/_ie.scss";
	  
</style>
