<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  name: 'frontend',
  data () {
    return {
      type: 'radar',
      data: {
        labels: ['HTML/CSS', 'JavaScripts', 'JQuery', 'Vue.js'],
        datasets: [
          {
            label: 'Front-end',
            data: [3, 2, 2, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
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
