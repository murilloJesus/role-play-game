<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue3-chart-v2'

export default defineComponent({
  name: 'MonthlyChart',
  extends: Doughnut,
  props: ['experiencia'],
  mounted () {
    this.renderChart({
        datasets: [{
          data: [this.experiencia.experiencia, this.experiencia.resto],
          backgroundColor: [
            'rgb(0, 208, 0)',
            'rgb(208, 208, 208)'
          ],
          hoverOffset: 9
        }]
      },
      {
        cutoutPercentage: 70
      })

      this.$watch(
        () => this.experiencia,
        (val) => {

          this.renderChart({
            datasets: [{
              data: [val.experiencia, val.resto],
              backgroundColor: [
                'rgb(30, 208, 30)',
                'rgb(208, 208, 208)'
              ],
              hoverOffset: 9
            }]
          },
          {
            cutoutPercentage: 70
          })
        }
      )
  }
})
</script>