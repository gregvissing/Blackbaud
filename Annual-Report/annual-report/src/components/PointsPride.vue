<template>
	<section id="pointsPride" class="cd-section points animateblock">
		<div class="btn-wrap">
			<button class="prev" @click="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
			<button class="next" @click="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
		</div>                
		<transition-group name="slide" tag="div" class="slider-container">
			<div v-for="slide in pointsSlides" :key="slide.id" class="slide" v-show="slide.id == currentSlide">
				<div v-if="slide.full" class="full-container"  :style="{ backgroundImage: `url(${slide.bgImage})` }">
					<span v-if="slide.id == 0" class="borderTriangle"></span>
					<h2 v-if="slide.triangleText" class="triangleText">POINTS<br />OF PRIDE</h2> 
					<h1>{{ slide.heading }}</h1>
					<div class="bottomright" v-html="slide.stat"></div>
				</div>
				<div v-else-if="slide.id == 1" class="split-image-container slide1">
					<div class="hero_skewed--left">
						<div class="unskewed--left" v-bind:style="{ backgroundImage: 'url(' + slide.leftBgImage + ')' }"></div>
					</div>
					<div class="hero_skewed--right">
						<div class="unskewed--right" v-bind:style="{ backgroundImage: 'url(' + slide.rightBgImage + ')' }"></div>
					</div>
					<div class="text-bottomBgImage">
						<div class="image-text-container">                    
							<div class="text-image">
								<p v-html="slide.kelceCelekText"></p>
								<img class="half" :src="slide.kelceImage" />
								<img class="half" :src="slide.celekImage" />
								<p class="caption half">{{ slide.kelceCaption }}</p>
								<p class="caption half">{{ slide.celekCaption }}</p>
							</div>                    
							<div class="text-image">
								<p v-html="slide.spencerText"></p>
								<img :src="slide.spencerImage" />
							</div>
						</div>
						<img class="bottomBgImage" :src="slide.bottomBgImage" />                             
					</div>
					<p class="trishaText" v-html="slide.trishaWiseText"></p>
					<!-- <div class="one-half left">
						<div class="image-text-container">                    
							<div class="text-image">
								<p v-html="slide.kelceCelekText"></p>
								<img class="half" :src="slide.kelceImage" />
								<img class="half" :src="slide.celekImage" />
								<p class="caption half">{{ slide.kelceCaption }}</p>
								<p class="caption half">{{ slide.celekCaption }}</p>
							</div>                    
							<div class="text-image">
								<p v-html="slide.spencerText"></p>
								<img :src="slide.spencerImage" />
							</div>
						</div>
					</div> -->
					<!-- <div class="one-half right">
						<div class="bgImage" v-bind:style="{ backgroundImage: 'url(' + slide.rightBgImage + ')' }">
							<p v-html="slide.trishaWiseText"></p>
						</div>                            
					</div>           
					<img class="bottomBgImage" :src="slide.bottomBgImage" />            -->                 
				</div>
				<div v-else-if="slide.id == 2" class="split-image-container slide2">
					<div class="hero_skewed--left">
						<div class="unskewed--left" v-bind:style="{ backgroundImage: 'url(' + slide.leftBgImage + ')' }">
							<div class="text-container" v-html="slide.leftText"></div>
						</div>
					</div>
					<div class="hero_skewed--right">
						<div class="unskewed--right" v-bind:style="{ backgroundImage: 'url(' + slide.rightBgImage + ')' }">
							<img class="globe" :src="slide.rightTopBgImage">
							<div class="topright" v-html="slide.rightTopText"></div>
							<div class="bottomright" v-html="slide.rightBgText"></div>
						</div>
					</div>

					<!-- <div class="one-half left top" v-bind:style="{ backgroundImage: 'url(' + slide.leftBgImage + ')' }">
						<div class="text-container" v-html="slide.leftText"></div>
					</div>
					<div class="one-half right bottom">
						<img class="top" :src="slide.rightTopBgImage">
						<div class="topright" v-html="slide.rightTopText"></div>
						<img class="bottom" :src="slide.rightBgImage">
						<div class="bottomright" v-html="slide.rightBgText"></div>
					</div> -->
				</div>
				<div v-else-if="slide.id == 3" class="split-image-container slide3">
					<div class="hero_skewed--left">
						<div class="unskewed--left">
							<img class="us-china-students" :src="slide.leftBgImage">
							<img class="map" :src="slide.map">
							<div class="leftText" v-html="slide.leftText"></div>
						</div>
					</div>
					<div class="hero_skewed--right">
						<div class="unskewed--right" v-bind:style="{ backgroundImage: 'url(' + slide.rightBgImage + ')' }">
							<div class="topright" v-html="slide.rightText"></div>
						</div>
					</div>
					<!-- <div class="one-half left" v-bind:style="{ backgroundImage: 'url(' + slide.leftBgImage + ')' }">
						<img class="map" :src="slide.map">
						<div class="bottomleft"><div v-html="slide.leftText"></div></div>
					</div>
					<div class="one-half right" v-bind:style="{ backgroundImage: 'url(' + slide.rightBgImage + ')' }">
						<div class="topright" v-html="slide.rightText"></div>
					</div> -->
				</div>
			</div>
		</transition-group>
	</section>
</template>

<script>
export default {
	name: 'PointsPride',
	data() {
		return {
			currentSlide: 0,
			pointsSlides: [
				{
					id: 0,
					full: true,
					url: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/MoveableFeast213.jpg',
					bgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/MoveableFeast213.jpg',
					triangle: true,
					triangleText: true,
					heading: 'Incredible things are happening at UC and UC Health',
					stat: '<span>2nd</span><p>CCM alumni rank second in Playbill\'s "Most-Represented Colleges on Broadway."</p>'    
				},
				{
					id: 1,
					full: false,
					url: '',
					triangle: false,
					triangleText: false,
					leftBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/SuperBowlRing.jpg',
					rightBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/CCC_kremer-85.jpg',
					bottomBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/MarianSpencerHall.png',
					trishaWiseText: 'UC Health\'s Trisha Wise-Draper, PhD, COM \'08, MD COM \'10, is pioneering the use of immunotherapy in cancer patients while also training the next generation of physicians and studying cancer\'s underlying mechanisms to develop newer and better treatments.', 
					kelceCelekText: 'Alumni Jason Kelce, BUS \'10 and Brent Celek, BUS \'07 were part of the 2018 Super Bowl champion team, the Philadelphia Eagles.',
					kelceImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/Jason-Kelce.png',
					kelceCaption: 'Jason Kelce',
					celekImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/Celek-Brent.png',
					celekCaption: 'Brent Celek',
					spencerImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/Marian-Spencer.png',
					spencerText: 'UC\'s newest resident hall has been named after civil rights activist and lifelong community servant Marian Spencer, A&S \'42, Hon \'06.'
				},
				{
					id: 2,
					full: false,
					url: '',
					triangle: false,
					triangleText: false,
					leftBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/UCGraduation159_2018-bw.jpg',
					leftText: '<h1>CLASS OF 2018</h1><div class="container"><span>6,500</span><p>students earned degrees of various levels in UC\'s largest-ever spring commencement.</p></div><div class="container"><span>50.5%</span> <img class="icon" src="/image/annual-report/2018/pointspride/icon-atom.png"> <img class="icon" src="/image/annual-report/2018/pointspride/icon-math.png"> <img class="icon" src="/image/annual-report/2018/pointspride/icon-gears.png"> <img class="icon" src="/image/annual-report/2018/pointspride/icon-compass.png"><p class="block">of this year\'s graduates were awarded degrees in the STEM areas of science, technology, engineering and math.</p></div><div class="container"><span>16%</span> <img class="icon" src="/image/annual-report/2018/pointspride/icon-graduates.png"><p class="block">of these students were first-generation college students.</p></div><div class="container"><p class="margin-bottom-10">They hailed from <span>49</span> states and <span>76</span> countries.</p><em>By comparison, the Class of 2017 had graduates from 51 countries.</em></div>',                        
					rightTopBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/earth.png',
					rightTopText: '<span>113%</span><p>increase in students studying internationally since 2010.</p>',
					rightBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/mens-basketball-bw.png',
					rightBgText: '<span>3.224</span><p>UC student-athletes\' cumulative grade-point average for the Fall 2017 semester.</p><em>It was the 19th consecutive grading period our Bearcats have exceeded a 3.00 GPA.</em>'
				},
				{
					id: 3,
					full: false,
					url: '',
					triangle: false,
					triangleText: false,
					leftBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/uc_china.jpg',
					map: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/map.png',
					leftText: '<span>56</span><p>students earned engineering degrees from UC and China\'s Chongqing University as part of UC\'s Joint Engineering Co-op Institute\'s first graduating class.</p>',
					rightBgImage: 'https://foundation.uc.edu/image/annual-report/2018/pointspride/UC_Health_West_Chester.jpg',
					rightText: '<span>Top 5%</span><p>UC Health\'s West Chester Hospital ranked in top 5 percent of hospitals nationally for clinical outcomes (Healthgrades, 2018).</p><em>The distinction recognizes West Chester Hospital as being within the top five percent of nearly 4,500 hospitals nationwide for its clinical performance as measured by Healthgrades, the leading online resource for comprehensive information about physicians and hospitals.</em>'
				}
			]
		}
	},
	methods: {
		prev: function () {
            this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1
        },                
        next: function () {
            this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1
        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>