<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  name: 'depops',
  data () {
    return {
      type: 'radar',
      data: {
        labels: ['Linux', 'Docker', 'AWS', 'GitHub'],
        datasets: [
          {
            label: 'DepOps',
            data: [2, 2, 2, 3],
            backgroundColor: [
              'rgba(255, 219, 100, 0.2)'
            ],
            borderColor: [
              'rgba(255, 219, 100, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scale: {
          ticks: {
            min: 0,
            max: 5,
            fixedStepSize: 2
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
