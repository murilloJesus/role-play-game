<template>
  <div>
    <div>
      <div
        class="text-center"
        style="display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 190px;
              height: 190px;"
      >
        <div>
          <h3
            style="font-size: 5.575rem; 
                    margin-bottom: -15px;"
          >
            {{ nivel.nivel.value }}
          </h3>
          <small>
            {{ experiencia_atual }} / {{ experiencia_total }}
          </small>
        </div>
      </div>
      <chart :experiencia="data_chart" />
    </div>
    <div class="text-center">
      <b>Murillo</b><br><small> Humano / Guerreiro </small>
    </div>
    <a
      class="btn btn-outline-primary"
      role="button"
      @click="nivel.add_experiencia(100)"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import chart from "./chart.vue"

export default {
  components: { chart },
  props: ['nivel'],
  setup(props){

    const experiencia_total = computed(() => {
      return props.nivel.range()
    })

    const experiencia_atual = computed(() => {
      return props.nivel.sob_xp()
    })

    const data_chart = computed(() => {
      return {
        experiencia: experiencia_atual.value,
        resto: experiencia_total.value - experiencia_atual.value
      }
    })

    return {
      experiencia_total,
      experiencia_atual,
      data_chart
    }
  }

}
</script>

<style>

</style>