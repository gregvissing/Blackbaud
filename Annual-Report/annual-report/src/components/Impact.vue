<template>
	<section id="impact" class="cd-section">
		<h2 class="mobile-heading">IMPACT STORIES</h2>
		<div class="carousel animateblock">
			<div class="carousel-inner">
				<div v-for="(slide, index) in slides" class="carousel-inner-image" :data-active-slide="activeIndex === index" :style="{ backgroundImage: 'url(' + `${slide.image}` + ')' }">
					<div class="redBg" :style="{ backgroundImage: 'url(' + `${slide.textBg}` + ')' }">
						<div class="clipAngleUp"></div>
						<div class="slideTextContainer" v-html="slide.text"></div>
					</div>
					<p class="title"><span>REDEFINING <span class="nextTxt">NEXT</span> BY <span class="title-text">{{ slide.title }}</span></span></p>
					<span class="borderTriangle"></span>
					<h2 class="triangleText">REDEFINING <span>NEXT</span></h2>
				</div>
			</div>
		</div>
		<div class="thumbs">
			<div v-for="(thumbnail,index) in thumbnails" class="thumbs-thumbnail">
				<button :data-active-button="activeIndex === index" @click="update(index)">
					<img :src="`${thumbnail.image}`" />
					<p><span>{{ thumbnail.title }}</span></p>
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Impact',
	data() {
		return {
			activeIndex: 0,
			slides: [
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/chara-hood.jpg',
					title: 'INVENTING TOMORROW',
					text: '<p>Chara Hood is not easily discouraged. During a recent co-op with L\&#39;Oréal, the third year chemical engineering student was asked to resolve why a machine wasn\'t capping a shampoo bottle efficiently, a challenge she relished.</p><blockquote>"I have a knack for looking at multiple perspectives of a problem and finding solutions," she says. "That\'s why I am drawn to engineering."</blockquote><p>The same determination that allowed her to conquer the shampoo cap propelled Hood to seek out UC\'s Emerging Ethnic Engineers (E3), a program empowering underrepresented ethnic students in UC\'s College of Engineering and Applied Science. Through E3, Hood found her best friends, connected with faculty and received a much-needed scholarship from the Marathon Petroleum Scholars program.</p><p>Marathon Petroleum, a Fortune 500 Company, has been providing E3 students with scholarship support, co-op placements and student opportunities since 2015.</p><p>As one of seven children, Hood is solely responsible for her education. She has an excellent academic record, but paying her bills is tough.</p><p>Even innate problem-solvers need help, and to date 34 students, including Hood, have received scholarships from Marathon; eight students have completed Marathon co-ops.</p><p>"The Marathon scholarship changed my life," Hood says. "Without it, I would not have been able to stay in school."</p>',
					textBg: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/UC-Campus-Scenes0920-bw.jpg'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/crawford.jpg',
					title: 'OPENING DOORS',
					text: '<p>After 55 years of marriage, Dr. Alvin Crawford and Alva Jean Crawford still make each other laugh. Together, they\'ve attended college, raised a family, built successful careers. All of this is rooted in the love and lessons bestowed by their families.</p><p>The Memphis natives learned that lifting others was part of daily life. Taking this to heart, Dr. Crawford became a pediatric orthopedic surgeon; he is Professor Emeritus in Pediatrics and Orthopedic Surgery at UC\'s College of Medicine and a UC Health physician. Mrs. Crawford is a retired high school educator.</p><blockquote>"If someone helps you and you\'re on the receiving end, you really never ever forget that," Dr. Crawford says. "If you\'re on the giving end, it just feels good."</blockquote><p>Because of their passion for supporting students with diverse backgrounds and financial need, as well as a mutual love for education and the arts, the Crawfords created two new scholarships—one at the College of Medicine, another at the College-Conservatory of Music.</p><p>"People are assured better health care, a better life and a better retirement if they go to college," Mrs. Crawford says. "I want people who can help students to realize they can make a difference."</p><div class="image-text"><img  src="/image/annual-report/2018/impactstories/Dr_Crawford_President_Pinto.jpg"><em>Dr. Alvin Crawford was conferred with an honorary doctoral degree at 2018 commencement. He is pictured with UC Trustee Margaret K. Valentine and President Pinto.</em></div>',
					textBg: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/UC-Campus-Scenes1001-bw.jpg'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark.jpg',
					title: 'SAVING LIVES',
					text: '<p>At 19, Heidi Jark endured 40 rounds of radiation for Hodgkin\'s lymphoma. She spent three months living alone in a hotel while receiving treatment in Rochester, Minnesota, 350 miles away from her parents\' farm where they were tending to planting season.</p><p>Thirty-four years later, as managing director and senior vice president of the Foundation Office at Fifth Third Bank, she played a role in the decision to give $10 million toward the Cincinnati Cancer Center\'s effort to achieve a National Cancer Institute (NCI) designation.</p><blockquote>"When you think of the impact any disease has and if we can do something to improve the quality of care for our own employees and citizens, why would we not do that?" she says. "Why would we not make the investment?"</blockquote><p>The Cincinnati Cancer Center is a collaboration of UC, UC Health and Cincinnati Children\'s Hospital Medical Center. NCI designation will attract more research funding, fuel economic growth and create better outcomes for cancer patients.</p><p>Jark credits her survival to research.</p><p>"To be able to bring more research and clinical trials here with NCI designation just opens the doors for so many more survivors. When you throw resources and great minds together, we\'re all going to benefit."</p>',
					textBg: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark-bw.png'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/rachel-roseman.jpg',
					title: 'SOLVING PROBLEMS NOW',
					text: '<p>Daniel Cummins, UC\'s assistant dean of students, wants to change students\' lives—but first he wants to feed them.</p><blockquote>"Faculty and advisers were having conversations with students and saying, ‘You\'re not doing well, what\'s going on?\'" Cummins says. "The students are saying, ‘I haven\'t eaten in two days.\'"</blockquote><p>When the issue of food insecurity came to the attention of Cummins and campus leaders, they moved quickly. The Bearcat Pantry was established in fall 2017 and is led by students like Rachel Roseman (pictured at right). The Pantry has two campus locations, offering food, hygiene items and campus dining hall vouchers.</p><p>The Bearcat community has rallied behind this effort with food, volunteer hours and monetary donations. Funds raised during the first UC Day of Giving helped launch the UC Clermont Pantry. Donor support allows for the purchase of fresh food, the ability to address specific dietary needs and new initiatives such as a Bearcat Pantry Career Closet.</p><p>"Bearcats are very generous," Cummins says. "Once folks know, their generosity comes out."</p><div class="image-text"><img  src="/image/annual-report/2018/impactstories/Cummins.jpg"><em><strong>Daniel Cummins</strong> Assistant Dean of Students, University of Cincinnati</em></div>',
					textBg: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/rachel-roseman0381-bw.jpg'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/boyd.jpg', 
					title: 'BENDING THE FUTURE',
					text: '<p>Drew and Wendy Boyd believe three of their passions—creativity, philanthropy and UC—are the perfect combination.</p><p>The Boyds moved to Cincinnati 24 years ago for Drew\'s position with Johnson & Johnson. He also became an adjunct professor at UC\'s Carl H. Lindner College of Business and is now executive director of the Master of Science in Marketing program.</p><p>Drew and Wendy discussed how they could give students an edge in creativity, innovation, and subsequently, the job market.</p><p>The answer was supporting faculty.</p><p>"If the faculty are great, the students have a great experience, and they become great alumni," Drew says.</p><p>Established in 2018, the Drew and Wendy Boyd Breakthrough in Innovative Teaching Excellence Award recognizes Lindner College faculty who challenge students to think differently. Elliott Manzon and David Rapien, who are enhancing marketing education through a creative curriculum and new technology, were the first recipients.</p><blockquote>"When teachers add creative training to their curriculum, we\'ll produce a better product," Drew says. "We can get graduates walking out of here with the cognitive skills companies want.</blockquote><p>"This put our money where our hearts are," Wendy says.</p>',
					textBg: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/bending-future-textBg-bw.jpg'
				}
			],
			thumbnails: [
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/chara-hood.jpg',
					title: 'INVENTING TOMORROW'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/crawford.jpg',
					title: 'OPENING DOORS'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark.jpg',
					title: 'SAVING LIVES'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/rachel-roseman.jpg',
					title: 'SOLVING PROBLEMS NOW'
				},
				{ 
					image: 'https://foundation.uc.edu/image/annual-report/2018/impactstories/boyd.jpg', 
					title: 'BENDING THE FUTURE'
				}
			],
			images: ['https://foundation.uc.edu/image/annual-report/2018/impactstories/chara-hood.jpg','https://foundation.uc.edu/image/annual-report/2018/impactstories/crawford.jpg','https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark.jpg', 'https://foundation.uc.edu/image/annual-report/2018/impactstories/rachel-roseman.jpg', 'https://foundation.uc.edu/image/annual-report/2018/impactstories/boyd.jpg'],
			thumbnailImages: ['https://foundation.uc.edu/image/annual-report/2018/impactstories/chara-hood.jpg','https://foundation.uc.edu/image/annual-report/2018/impactstories/crawford.jpg','https://foundation.uc.edu/image/annual-report/2018/impactstories/heidi-jark.jpg', 'https://foundation.uc.edu/image/annual-report/2018/impactstories/rachel-roseman.jpg', 'https://foundation.uc.edu/image/annual-report/2018/impactstories/boyd.jpg'],
			thumbnailTitles: ['INVENTING TOMORROW', 'OPENING DOORS', 'SAVING LIVES', 'SOLVING PROBLEMS NOW', 'BENDING THE FUTURE']
		}
	},
	methods: {
		update(index) {
            this.activeIndex = index;
        },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>