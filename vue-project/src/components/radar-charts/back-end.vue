<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  name: 'backend',
  data () {
    return {
      type: 'radar',
      data: {
        labels: ['Ruby/Ruby on Rails', 'PHP', 'Java', 'MySQL'],
        datasets: [
          {
            label: 'Back-end',
            data: [3, 1, 1, 1],
            backgroundColor: [
              'rgba(100, 110, 255, 0.2)'
            ],
            borderColor: [
              'rgba(100, 110, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scale: {
          pointLabels: {
            fontSize: 13 // レーダーチャートのラベルを変更
          },
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
