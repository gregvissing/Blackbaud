<script>
import { Doughnut } from 'vue-chartjs'

export default {
    extends: Doughnut,
    mounted () {
        this.renderChart({
            labels: ['UNRESTRICTED', 'PROGRAM ENHANCEMENTS', 'FACILITY & EQUIPMENT', 'SCHOLARSHIPS & FELLOWSHIPS', 'CHAIRS & PROFESSORSHIPS'],
            datasets: [
                {                               
                    backgroundColor: [
                        '#949598',
                        '#ce0e2d',
                        '#771819',
                        '#000000', 
                        '#58585a'
                    ],                            
                    data: [2.4, 70.5, 14.3, 10, 2.7]
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