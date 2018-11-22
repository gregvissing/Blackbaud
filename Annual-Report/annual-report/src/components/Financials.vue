<template>
  	<section id="financials" class="cd-section financials animateblock">
		<h2 class="mobile-heading">FUNDRAISING REPORT</h2>
		<div class="one-half image" v-bind:style="{ backgroundImage: 'url(' + financials.image + ')' }">
			<span class="borderTriangle"></span>
			<h2 class="triangleText">FUNDRAISING<br />REPORT</h2>                
		</div>
		<div class="one-half graphs">
			<h2>FISCAL YEAR 2018 COMMITMENTS*</h2>
			<span class="odometer"></span>
			<h4>in Total Funds</h4>
			<div class="graph-type-container">                    
				<ul>
					<li v-for="(type, index) in financials.types" :class="{ active: financials.selected == index }"> 
						<span @click="toggle(type)">{{ type.name }}</span> 
					</li>
				</ul>
			</div>
			<div class="chart-container" v-if="financials.selected === '0'">
				<template>
					<PurposeChart/>
				</template>
				<!-- <purpose-chart></purpose-chart> -->
			</div>              
			<div class="chart-container" v-if="financials.selected === '1'">
				<template>
					<FundChart/>
				</template>
				<!-- <fund-chart></fund-chart> -->
			</div>                
			<div class="chart-container" v-if="financials.selected === '2'">
				<template>
					<SourceChart/>
				</template>
				<!-- <source-chart></source-chart> -->
			</div>      
			<div class="button-container">
				<button id="show-modal" @click.prevent="openModal(showModal)">View Financial Highlights</button>
				
			</div>  
			<em>*Excludes UC Health contribution, non-government research fund, software gifts-in-kind, campaign-only gifts.</em> 
		</div>
		<modal v-if="showModal" @close="showModal = false">
			<button slot="closebutton" class="modal-default-button" @click.prevent="closeModal(showModal)">X</button> 
			<h3 slot="header"><span>FINANCIAL HIGHLIGHTS</span></h3>
			<h4 slot="subHeader">UC FOUNDATION AND UC HEALTH FOUNDATION COMBINED*</h4>                                
			<div slot="body">
				<vue-tabs>
					<vue-tab label="REVENUES/EXPENSES" :active="true">
						<table>
							<thead>
								<tr>
									<th>REVENUES</th>
									<th>2018 TOTAL</th>
									<th>2017 TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="revenue in revenues" v-bind:class="{ bold: revenue.bold }">
									<td>{{revenue.title}}</td>
									<td><span v-if="revenue.bold">$</span>{{revenue.total18.toLocaleString()}}</td>
									<td><span v-if="revenue.bold">$</span>{{revenue.total17.toLocaleString()}}</td>
								</tr>    
							</tbody>
							<thead>                                
								<tr class="strong">
									<th>EXPENSES</th>
									<th>&nbsp;</th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="expense in expenses" v-bind:class="{ bold: expense.bold }">
									<td>{{expense.title}}</td>
									<td><span v-if="expense.bold">$</span>{{expense.total18.toLocaleString()}}</td>
									<td><span v-if="expense.bold">$</span>{{expense.total17.toLocaleString()}}</td>
								</tr>
							</tbody>
							<tbody>
								<tr v-for="otherExpense in otherExpenses" v-bind:class="{ bold: otherExpense.bold }">
									<td>{{otherExpense.title}}</td>
									<td><span v-if="otherExpense.bold">$</span>{{otherExpense.total18.toLocaleString()}}</td>
									<td><span v-if="otherExpense.bold">$</span>{{otherExpense.total17.toLocaleString()}}</td>
								</tr>
							</tbody>
						</table>
					</vue-tab>
					<vue-tab label="ASSETS/LIABILITIES">
						<table>
							<thead>
								<tr>
									<th>ASSETS</th>
									<th>2018 TOTAL</th>
									<th>2017 TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="asset in assets" v-bind:class="{ bold: asset.bold }">
									<td>{{asset.title}}</td>
									<td><span v-if="asset.bold">$</span>{{asset.total18.toLocaleString()}}</td>
									<td><span v-if="asset.bold">$</span>{{asset.total17.toLocaleString()}}</td>
								</tr>
							</tbody>
							<thead>
								<tr>
									<th>LIABILITIES</th>
									<th>2018 TOTAL</th>
									<th>2017 TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="liability in liabilities" v-bind:class="{ bold: liability.bold }">
									<td>{{liability.title}}</td>
									<td><span v-if="liability.bold">$</span>{{liability.total18.toLocaleString()}}</td>
									<td><span v-if="liability.bold">$</span>{{liability.total17.toLocaleString()}}</td>
								</tr>
							</tbody>
							<thead>
								<tr>
									<th>NET ASSETS</th>
									<th>2018 TOTAL</th>
									<th>2017 TOTAL</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="netAsset in netAssets" v-bind:class="{ bold: netAsset.bold }">
									<td>{{netAsset.title}}</td>
									<td><span v-if="netAsset.bold">$</span>{{netAsset.total18.toLocaleString()}}</td>
									<td><span v-if="netAsset.bold">$</span>{{netAsset.total17.toLocaleString()}}</td>
								</tr>
							</tbody>
						</table>
					</vue-tab>
				</vue-tabs>                    
			</div>
		</modal>
	</section>
</template>

<script type="text/x-template" id="modal-financials-template">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">  
                    <slot name="closebutton">default close button</slot>                                         
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                        <slot name="subHeader">default sub-header</slot>
                    </div>                    
                    <div class="modal-body">
                        <slot name="body">default body</slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</script>

<script>
import PurposeChart from './PurposeChart.vue';
import SourceChart from './SourceChart.vue';
import FundChart from './FundChart.vue';
import Modal from './Modal.vue';
import VueTab from './VueTab.vue';
import VueTabs from './VueTabs.vue';

export default {
	name: 'Financials',
	data() {
		return {
			showModal: false,
			financials: {
				image: 'https://foundation.uc.edu/image/annual-report/2018/financials/ucgni-building.jpg',
				initialTotalFunds: '000,000,000',
				selected: '0',                    
				types: [
					{ 
						name: 'By Purpose',
						value: '0'
					},
					{ 
						name: 'By Fund Type',
						value: '1'
					},
					{ 
						name: 'By Source',
						value: '2' 
					}
				],
			},
			revenues: [
				{ title: 'Contributions', total18: 76450224, total17: 72110627, bold: false },
				{ title: 'University support', total18: 18010286 , total17: 11996517, bold: false },
				{ title: 'Fundraising fees', total18: 9817699, total17: 11206249, bold: false },
				{ title: 'Investment gains, net', total18: 29798702, total17: 39378367, bold: false },
				{ title: 'Other', total18: 2489308, total17: 1757564, bold: false },
				{ title: 'TOTAL REVENUES', total18: 136566219, total17: 136449324, bold: true },
			],
			expenses: [
				{ title: 'Distributions to University of Cincinnati', total18: 60522872, total17: 50471635, bold: false },
				{ title: 'Operating expenses', total18: 25181877 , total17: 26561165, bold: false },
				{ title: 'UC Foundation endowment fee', total18: 4755942, total17: 5073849, bold: false },
				{ title: 'TOTAL EXPENSES', total18: 90460691, total17: 82106649, bold: true },
			],
			otherExpenses: [
				{ title: 'Change in present value of annuities payable', total18: 784529, total17: 457435, bold: false },
				{ title: 'TOTAL EXPENSES AND OTHER DEDUCTIONS', total18: 91245220, total17: 82564084, bold: true },
				{ title: 'CHANGE IN NET ASSETS before acquisition income', total18: 45320999, total17: 53885240, bold: true },
				{ title: 'Excess of Fair Value of Net assets over consideration of the acquired entity', total18: '-', total17: 2219307, bold: false },
				{ title: 'CHANGE IN NET ASSETS', total18: 45320999, total17: 56104547, bold: true },
				{ title: 'NET ASSETS, BEGINNING OF YEAR', total18: 519243173, total17: 463138626, bold: true },
				{ title: 'NET ASSETS, END OF YEAR', total18: 564564172, total17: 519243173, bold: true },
			],
			assets: [
				{ title: 'Cash and cash equivalents', total18: 23856663, total17: 19653549, bold: false },
				{ title: 'Pledges receivable, net of allowance', total18: 98479600, total17: 94699382, bold: false },
				{ title: 'Investments', total18: 443222848, total17: 405851400, bold: false },
				{ title: 'Beneficial interest in assets', total18: 16544386, total17: 13029897, bold: false },
				{ title: 'Property and equipment', total18: 2360497, total17: 13029897, bold: false },
				{ title: 'Other assets', total18: 2360497, total17: 3736320, bold: false },
				{ title: 'TOTAL ASSETS', total18: 587600429, total17: 540180449, bold: true },
			],
			liabilities: [
				{ title: 'Accounts payable and accrued expenses', total18: 11441536, total17: 10601027, bold: false },
				{ title: 'Agency payable', total18: 1512725, total17: 907675, bold: false },
				{ title: 'Trusts held for the benefit of others', total18: 1799437, total17: 1455514, bold: false },
				{ title: 'Present value of annuities payable', total18: 6823623, total17: 6619239, bold: false },
				{ title: 'Other liabilities', total18: 1458936, total17: 1353821, bold: false },
				{ title: 'TOTAL liabilities', total18: 23036257, total17: 20937276, bold: true },
			],
			netAssets: [
				{ title: 'TOTAL LIABILITIES AND NET ASSETS', total18: 587600429, total17: 540180449, bold: false },
			],
		}       
	},
	methods: {
		toggle: function (type) {
			type.isActive = !type.isActive;
			this.financials.selected = type.value;
		},
		openModal: function(showModal) {
			$.scrollify.disable();
			this.showModal = true
		},
		closeModal: function(showModal) {
			$.scrollify.enable();
			this.showModal = false                    
		}
	},
	components: {
		PurposeChart,
		SourceChart,
		FundChart,
		Modal,
		VueTabs,
		VueTab
	},
	template: '#modal-financials-template'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>