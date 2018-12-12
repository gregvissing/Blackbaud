<template>
  	<section id="letters" class="cd-section letters animateblock" ref="lettersWidth">	
        <h2 v-if="lettersWidth <= 767">A LETTER FROM</h2>
        <vue-tabs>
            <vue-tab v-if="lettersWidth > 767" label="A LETTER FROM PETER E. LANDGREN" :active="true">
                <div class="letter-text-container" v-html="peterLetterText" id="peterText">
                </div>
            </vue-tab>
            <vue-tab v-if="lettersWidth > 767" label="A LETTER FROM W. TROY NEAT">
                <div class="letter-text-container" v-html="troyLetterText" id="troyText">
                </div>
            </vue-tab>
            <vue-tab v-if="lettersWidth <= 767" label="PETER E. LANDGREN" :active="true">
                <div class="letter-text-container" v-html="peterLetterText" id="peterText">
                </div>
            </vue-tab>
            <vue-tab v-if="lettersWidth <= 767" label="W. TROY NEAT">
                <div class="letter-text-container" v-html="troyLetterText" id="troyText">
                </div>
            </vue-tab>
        </vue-tabs>  
	</section>
</template>

<script>
import VueTab from './VueTab.vue'
import VueTabs from './VueTabs.vue'

export default {
	name: 'letters',
	data () {
		return {
            lettersWidth: '0px',
            lettersHeight: '0px',
            fullWidth: document.documentElement.clientWidth,
            fullHeight: document.documentElement.clientHeight,
            peterBgImage: 'https://foundation.uc.edu/image/annual-report/2018/letters/UC-Campus-Scenes0232-angle.png ', 
            peterLetterText: '<p>"What\'s next?"<br/><br/>Have you ever asked yourself what has helped you define your next? Like all college graduates, I asked myself this very question when I was a student at this university\'s College-Conservatory of Music. I had been invited to audition for a position with the Baltimore Symphony, but couldn\'t afford to make the trip.<br/><br/>Through a donor\'s generosity, I received $78 to cover some of the cost and take my audition, and it was that small sum of $78 that changed my life forever.<br/><br/>My life\'s dream was to play French horn in a major symphony orchestra. That $78 allowed me to not only achieve that goal, but to forge a career as an arts educator, becoming a leader of my alma mater, and now, serving UC and UC Health through the UC Foundation.<br/><br/>With philanthropy comes new possibilities, and as you\'ll read throughout these pages, your support of UC and UC Health is redirecting the future in ways we never thought possible, and allowing others to create their own next.<br/><br/>You\'re cultivating diversity, granting scholarship opportunities and innovating how our faculty teach. You\'re tackling student hunger, and ensuring that cancer ends here in Greater Cincinnati.<br/><br/>None of this is possible without you—your interest, your passion, your unwavering support. Thank you for sharing in our commitment to redefining what\'s next and reimagining the best possible future for our campus, community, nation and world.<br/><br/><span class="image-signature"><img class="image" src="https://foundation.uc.edu/image/annual-report/2018/letters/Peter_Landgren.jpg"><span class="position"><img class="signature"  src="https://foundation.uc.edu/image/annual-report/2018/letters/Peter-Landgren-signature.png"><br/><strong>Peter E. Landgren</strong><br/>President, University of Cincinnati Foundation<br/>Vice President for University Advancement, University of Cincinnati</span></span></p>',
            peterImage: 'https://foundation.uc.edu/image/annual-report/2018/letters/Peter_Landgren.jpg',
            peterSignature: 'https://foundation.uc.edu/image/annual-report/2018/letters/Peter-Landgren-signature.png',
            peterTitle: '<strong>Peter E. Landgren</strong><br/>President, University of Cincinnati Foundation<br/>Vice President for University Advancement, University of Cincinnati',
            troyBgImage: 'https://foundation.uc.edu/image/annual-report/2018/letters/UCDayofGiving.jpg',
            troyLetterText: '<p>If you follow me on Twitter, you know that my handle is @bearcatroy—it\'s a testament to my love for my alma mater. This passion extends to my position as board chair of the UC Foundation, where I have a front-row seat to all of the great relationships that are the glue of our unique university and academic health care system.<br/><br/>I\'ve also witnessed the connections the Foundation and Alumni Association staff make with alumni, donors, students and volunteers. These bonds lift up and enrich our shared vision for the future, which is guided by UC\'s strategic direction, <span class="nextTxt">Next</span> <strong>Lives Here</strong>.<br/><br/>When I reflect on the generosity of Bearcats like yourself, I think about the community you\'re building and empowering through philanthropy. In aligning your passions with UC and UC Health, you\'re supporting students, patients, research, facilities and the future. Philanthropy is our state of mind, and I\'m pleased to share that our designated days of giving—UC Day of Giving and #GivingTuesday—inspired Bearcats from across the country to give in fiscal year 2018.<br/><br/>On behalf of the UC Foundation Board of Trustees, thank you for bending the future through your generosity. It\'s a fantastic time to be a Bearcat!<br/><br/><span class="image-signature"><img class="image" src="https://foundation.uc.edu/image/annual-report/2018/letters/Troy-Neat.jpg"><span class="position"><img class="signature"  src="https://foundation.uc.edu/image/annual-report/2018/letters/Troy-Neat-Signature.png"><br/><strong>W. Troy Neat</strong><br/><span>Chair, University of Cincinnati Foundation Board of Trustees</span></span></span></p>',
            troyImage: 'https://foundation.uc.edu/image/annual-report/2018/letters/Troy-Neat.jpg',
            troySignature: 'https://foundation.uc.edu/image/annual-report/2018/letters/Troy-Neat-Signature.png',
            troyTitle: '<strong>W. Troy Neat</strong><br/>Chair, University of Cincinnati Foundation Board of Trustees'
		}       
	},
	components: {
		VueTabs,
		VueTab
    },
    mounted() {
        this.computedWidth();
        $.scrollify.update();
	},
    methods: {
        computedWidth: function () {
            this.lettersWidth = this.$refs.lettersWidth.clientWidth;
			return this.lettersWidth
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
</style>
