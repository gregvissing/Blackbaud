<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted () {
        this.renderChart({
            labels: ['PHYSICAL PLANT', 'CURRENT OPERATIONS', 'ENDOWMENT'],
            datasets: [
                {                               
                    backgroundColor: [
                        '#000000',
                        '#bf3437',
                        '#771819',
                    ],
                    data: [10, 59.3, 30.7]
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