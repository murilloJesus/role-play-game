/* eslint-disable vue/html-indent */
<template>
  <div
    style="   width: 90px;
              height: 90px;
              position:inherit;
              z-index:10"
  >
    <div
      class="text-center"
      style="display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 94px;
              height: 99px;"
    >
      <div>
        <h3
          style="font-size: 3.575rem; 
                    margin-bottom: -15px;"
        >
          {{ nivel.nivel }}
        </h3>
        <small>
          {{ experiencia_atual }} / {{ experiencia_total }}
        </small>
      </div>
    </div>
    <chart :experiencia="data_chart" />
    <div
      class="text-center"
      style="    width: 226px; top: 81px; position: absolute;"
    >
      <b>Murillo</b><br><small> Humano / Guerreiro </small>
    </div>
  </div>
  <a
    class="btn btn-outline-primary"
    role="button"
    style="z-index: 11;position: relative;"
    @click="nivel.add_experiencia(100)"
  />
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