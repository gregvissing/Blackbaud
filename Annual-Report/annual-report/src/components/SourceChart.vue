<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted () {
        this.renderChart({
            labels: ['GIFT-IN-KIND (Non-software)', 'NEW COMMITMENTS', 'DEFERRED GIFTS'],
            datasets: [
                {                               
                    backgroundColor: [
                        '#000000',
                        '#bf3437',
                        '#771819',
                    ],
                    data: [0.6, 70.9, 28.5]
                }
            ],
            options: {
                legend: {
                    display: true,
                    fullWidth: true
                }
            }
        },
        {                           
            render: 'percentage',
            responsive: true, 
            maintainAspectRatio: false,
            pieceLabel: [
                {
                    mode: 'percentage',
                    precision: 1,
                    fontColor: '#fff',
                }
            ]
        })
    }
}
</script>
