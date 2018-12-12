<template>
	<section id="yearGlance" class="cd-section year animateblock">
		<div class="leftBg" v-bind:style="{ backgroundImage: 'url(' + yearGlanceBgLeft + ')' }"></div>
		<span class="borderTriangle"></span>
		<div class="triangleText">
			<h2>YEAR AT<br />A GLANCE</h2>
			<p class="extraBold"><strong>With the support of philanthropy, we are redefining next at UC and UC Health.</strong></p>
			<p class="semiBold">This timeline captures some of the memorable moments of fiscal year 2018.</p>
		</div> 
		<div class="page">
			<div class="app" id="glance">
				<a v-for="(yearGlance, index) in yearGlances" class="card" :href="yearGlance.link" target="_blank" :key="index">
					<div class="card__content">
						<div class="card__title">
							<img :src="yearGlance.avatar" />
							<div class="social-header">
								<p class="social-title">{{ yearGlance.name }}</p>
								<p class="social-date">{{ yearGlance.date }} <strong>.</strong> </p><img class="globe" :src="yearGlanceGlobe" />
							</div>
						</div>
						<p class="card__text">{{ yearGlance.text }}</p>
						<div v-if="yearGlance.position == 'top'" class="card__image top" v-bind:style="{ backgroundImage: 'url(' + yearGlance.image + ')' }"></div>
						<div v-else-if="yearGlance.position == 'right'" class="card__image right" v-bind:style="{ backgroundImage: 'url(' + yearGlance.image + ')' }"></div>
						<div v-else class="card__image" v-bind:style="{ backgroundImage: 'url(' + yearGlance.image + ')' }"></div>
					</div>
				</a>                    
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'YearGlance',
	data() {
		return {
			yearGlanceBgLeft: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/MainSt061.jpg',
			yearGlanceGlobe: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/globe.png',
			yearGlances: [
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-alumni.jpg',
					name: 'University of Cincinnati Alumni Association',
					date: 'July 13, 2017',
					text: 'Fifth Third Bank and Fifth Third Foundation give $10 million to support the Cincinnati Cander Center and the effort to achieve National Cancer Center Institute Designation.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/5-3-Release.png',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/fifth-third',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'August 16, 2017',
					text: 'Peter Landgren is named president of the UC Foundation and vice president for advancement at UC.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Peter-Landgren.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/peter-landgren-named-president-of-university-of-cincinnati-foundation',
					position: 'top'
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'August 22, 2017',
					text: 'The Marge & Charles J. Schott Foundation announces a $3.13 million gift to the Trauma Center and Surgical Intensive Care Unit at the UC Medical Center and UC College of Medicine.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/August-22.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/schott',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'October 4, 2017',
					text: 'The UC College of Medicine announces a $1.5 million gift to support the R. Bruce and Barbara Bracken Endowed Chair in Surgical Urology.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Bracken-portrait.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/bracken-endowed-chair',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/walk-ahead.jpg',
					name: 'Walk Ahead for a Brain Tumor Cure',
					date: 'October 13, 2017',
					text: 'The UC Foundation announces five philanthropy award winners: Robert L. Fealy, Marvin P. Kolodzik, Mark A. Godsey, Jessica Brawand and Walk Ahead for a Brain Tumor Cure.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/walk-ahead-2017-245.jpg',
					link: 'https://www.youtube.com/watch?v=eRyGDV3E2Ho',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-cahs.jpg',
					name: 'University of Cincinnati College of Allied Health Sciences',
					date: 'October 20, 2017',
					text: 'The inauguration of UC President Neville Pinto takes place during Homecoming weekend. He is the university\'s 30th president.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/161217vPinto0008.jpg',
					link: 'https://youtu.be/8BMcWxIbeds',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'October 24, 2017',
					text: 'Robert "Bob" Fealy, who served 10 months as interim UC Foundation President, receives the UC President\'s Award for Excellence.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/robert-bob-fealy.jpg',
					link: 'https://youtu.be/n4HNYIu1Exs',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-alumni.jpg',
					name: 'University of Cincinnati Alumni Association',
					date: 'November 28, 2017',
					text: 'The Islamic Center of Greater Cincinnati gives $1 million to create the Inayat and Ishrat Malik Professorship in Islamic Studies within the McMicken College of Arts & Sciences at UC.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Malik-Edited-8212.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/Malik',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'November 30, 2017',
					text: 'The 2017 #GivingTuesday campaign is the most successful to date. More than 2,000 donors give $116,000 to UC and UC Health.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/DP5G-YFVQAAll5l.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/2017-givingtuesday-campaign-most-successful-yet',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'December 21, 2017',
					text: 'Procter & Gamble joins the effort to earn National Cancer Institute designation with a $10 million gift to the Cincinnati Cancer Center.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/cancerlabphoto.png',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/press-release-Proctor-and-Gamble',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/president-pinto.jpg',
					name: 'Neville G. Pinto',
					date: 'January 5, 2018',
					text: 'The UC Alumni Association announces the recipients of its four signature awards: Marian A. Spencer, A&S \'42, Hon \'06; Russell C. "Rusty" Myers, Bus \'82; Jacqueline L. Bailey-Davis, CECH \'92 and Austin G. Allison, CEAS \'08.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/DSzMCuGU0AAwYsz.jpg-large.jpg ',
					link: 'https://youtu.be/sTpkxBcGCDE',
					position: 'top'
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-alumni.jpg',
					name: 'University of Cincinnati Alumni Association',
					date: 'February 9, 2018',
					text: 'UC Blue Ash College\'s 50-year anniversary coincides with the largest gift in its history. The estate of retired professor Judith Baughin provides nearly $400,000 to support two scholarships.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Judith-Baughin.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/press-release---uc-blue-ash-college-receives-largest-gift-in-its-history',
					position: 'top'
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/president-pinto.jpg',
					name: 'Neville G. Pinto',
					date: 'February 12, 2018',
					text: 'The Farmer Family Foundation donates $10 million to the Cincinnati Cancer Center\'s pursuit of National Cancer Institute designation.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/DV3L60IVQAAPFWl.jpg',
					link: 'https://foundation.uc.edu/05-news--events/press-releases/press-release---farmer-family-foundation-donates-10-million-to-cincinnati-cancer-center',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-alumni.jpg',
					name: 'University of Cincinnati Alumni Association',
					date: 'February 20, 2018',
					text: 'President Pinto kicks off UC\'s new strategic direction, Next Lives Here.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/next-lives-here.png',
					link: 'https://youtu.be/poudyMpFrFI',
					position: 'right'
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-lindner-cob.jpg',
					name: 'UC Lindner College of Business',
					date: 'March 2, 2018',
					text: 'The new UC Carl H. Lindner College of Business hits a milestone with the placement of its final beam. The construction of this $120 million structure was made possible by the generosity of donors.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/DXScGEDX0AAO0qX.jpg-large.jpg',
					link: 'https://youtu.be/t4t0JBkynBo',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'March 21, 2018',
					text: 'UC\'s College of Engineering and Applied Science is one of eight schools worldwide to receive a 3D metal printer from GE Additive.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Mlab-cusing-R_GRAU_blau_0717.jpg',
					link: 'https://foundation.uc.edu/news/geadditive',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',                        
					date: 'April 2, 2018',
					text: 'UC Health supports diversity scholarships in UC\'s Academic Health Center with a $1.5 million commitment.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/180227ckAppeadu_016-72dpi.jpg',
					link: 'https://foundation.uc.edu/press-releases/uc-health-makes-leadership-investment-to-create-diversity-scholarships-at-uc',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-health.jpg',
					name: 'UC Health',
					date: 'April 10, 2018',
					text: 'Supporters of the UC Gardner Neuroscience Institute commemorate the installation of the last beam. The $60.5 million facility was made possible with the support of generous donors.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Bearcat-mascot-thank-you.jpg',
					link: 'https://youtu.be/HKbEfvBW17I',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/president-pinto.jpg',
					name: 'Neville G. Pinto',
					date: 'April 13, 2018',
					text: 'The University of Cincinnati announces its Bicentennial activities at a kickoff event.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/180413aBicentennial150.jpg',
					link: 'https://youtu.be/YWV3NhFNrLM',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/president-pinto.jpg',
					name: 'University of Cincinnati Alumni Association',
					date: 'May 8, 2018',
					text: 'The inaugural UC Day of Giving raises $240,599 in support of programs and initiatives at UC and UC Health.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/UCDayofGiving-200.jpg',
					link: 'https://youtu.be/Wshnz952HGc',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'May 8, 2018',
					text: 'The UC Foundation Board of Trustees elects five new members: William J. Davis, BBA \'91; Leigh Fox, MBA \'01; Jerry Fritz, BBA \'73; Stephen Kimpel, BBA \'90; and Andrea Zahumensky, BSIE \'00.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/NewUCFBoardMembers2018.png',
					link: 'https://foundation.uc.edu/news/trustees',
					position: ''
				},
				{
					avatar: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/logos/uc-foundation.png',
					name: 'UC Foundation',
					date: 'June 27, 2018',
					text: 'Emeriti professors Richard & Laura Kretschmer endow a Native American children\'s literature collection at UC Libraries.',
					image: 'https://foundation.uc.edu/image/annual-report/2018/yearglance/socialimages/Kretschmer.jpg',
					link: 'https://foundation.uc.edu/stories/Kretschmer',
					position: ''
				},
			]
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
