<template>
  <div id="app">
    <nav id="cd-vertical-nav" >
		<ul>
			<li>
				<a href="#cover" data-number="1">
					<span class="cd-dot"></span>
					<span class="cd-label">COVER</span>
				</a>
			</li>
			<li>
				<a href="#intro" data-number="2">
					<span class="cd-dot"></span>
					<span class="cd-label">INTRO</span>
				</a>
			</li>
			<li>
				<a href="#impact" data-number="3">
					<span class="cd-dot"></span>
					<span class="cd-label">IMPACT STORIES</span>
				</a>
			</li>
			<li>
				<a href="#financials" data-number="4">
					<span class="cd-dot"></span>
					<span class="cd-label">FINANCIAL REPORT</span>
				</a>
			</li>
			<li>
				<a href="#yearGlance" data-number="5">
					<span class="cd-dot"></span>
					<span class="cd-label">YEAR AT A GLANCE</span>
				</a>
			</li>
			<li>
				<a href="#pointsPride" data-number="6">
					<span class="cd-dot"></span>
					<span class="cd-label">POINTS OF PRIDE</span>
				</a>
			</li>
		</ul>
	</nav>
	<!-- <Nav 
		coverNav="COVER"
		introNav="INTRO"
		impactStoriesNav="IMPACT STORIES"
		financialsNav="FINANCIAL REPORT"
		yearGlanceNav="YEAR AT A GLANCE"
		pointsPrideNav="POINTS OF PRIDE" /> -->
	
	<Cover	
		bgImage="https://foundation.uc.edu/image/annual-report/2018/cover/UC-Campus-Scenes0286.jpg" 
		redefining="REDEFINING" 
		next="NEXT"
		title="ANNUAL REPORT"
		subtitle="Fiscal Year 2018"
		logo="https://foundation.uc.edu/image/annual-report/2018/logo-ucFoundation.png" />
	
	<Intro	
		bgImage="https://foundation.uc.edu/image/annual-report/2018/intro/UC-Campus-Scenes0164.jpg" 
		text="<p>At the University of Cincinnati and UC Health, <span class='nextTxt'>NEXT</span> means breaking a path for a new generation of leaders and affording opportunities to broaden our worldview.</p><p><span class='nextTxt'>NEXT</span> means expanding our creative potential to innovate our approach to education and patient care.</p><p><span class='nextTxt'>NEXT</span> means solving complex societal problems and saving people\'s lives.</p><p><strong>We\'re not just anticipating the future—with your help, we\'re already changing its course. Together, we can redefine <span class='nextTxt'>NEXT</span> for our region, nation and world.</strong></p>"/>
	
	<Impact />
	<Financials />
	<YearGlance />
	<PointsPride />
	<Footer 
		logo="https://foundation.uc.edu/image/annual-report/2018/logo-ucFoundation.png"
		contactTitle="Contact Us" 
		institution="The University of Cincinnati Foundation" 
		poBox="PO Box 19970" 
		citySt="Cincinnati, OH" 
		zip="45219" 
		phone="513--556-6781" 
		altPhone="888-556-8889" 
		fax="513-556-4300 (fax)" 
		email="ucfoundation@uc.edu"
		campusTitle="Campus"
		campusBuilding="University Hall, Suite 100"
		campusAddress="51 Goodman Drive"
		campusCityStZip="Cincinnati, OH 45219"
		campusGoogleMapLink="https://www.google.com/maps/place/University+Hall,+51+Goodman+St+%23100,+Cincinnati,+OH+45221/@39.1365897,-84.5106596,17z/data=!3m1!4b1!4m5!3m4!1s0x8841b3911b29ad97:0xc37b8e60713384a2!8m2!3d39.1365897!4d-84.5084709"
		signUpTitle="Sign Up For Email"
		signUpText="You\'ll get timely updates on news, events and more from the UC Foundation."
		signUpButtonLink="https://foundation.uc.edu/email-sign-up-form"
		privacyPolicyLink="https://foundation.uc.edu/privacy-policy" />

  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Cover from './components/Cover.vue'
import Intro from './components/Intro.vue'
import Impact from './components/Impact.vue'
import Financials from './components/Financials.vue'
import YearGlance from './components/YearGlance.vue'
import PointsPride from './components/PointsPride.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
	Cover,
	Intro,
	Impact,
	Financials,
	YearGlance,
	PointsPride,
	Footer
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_base.scss";
@import "./assets/scss/_include-media.scss";
@import "./assets/scss/_nav.scss";
@import "./assets/scss/_cover.scss";
@import "./assets/scss/_intro.scss";
@import "./assets/scss/_carousel.scss";
@import "./assets/scss/_financials.scss";
@import "./assets/scss/_tabs.scss";
@import "./assets/scss/_glance.scss";
@import "./assets/scss/_points-pride.scss";
@import "./assets/scss/_modal.scss";
@import "./assets/scss/_table.scss";
@import "./assets/scss/_footer.scss";
@import "./assets/scss/_styles.scss";

body {
	background: $white;
}
</style>
