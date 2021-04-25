<template>
  <b
    ref="tooltip"
    style="color: red"
    data-bs-toggle="tooltip"
    :title="expressao"
  >{{ valor }}</b>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { Tooltip } from 'bootstrap'

export default {
    props: ['real', 'weapon'],
    setup(props) {
      const store = useStore()      

      const max = computed(() => props.weapon ? store.state.player.coldre.getMaxModifier(props.weapon.atribute) : 18)
      const x = computed(() => store.state.player.atributos[props.real.modifier].value > max.value ? max.value : store.state.player.atributos[props.real.modifier].value)
      const nome =  store.state.player.atributos[props.real.modifier].name

      const tooltip = ref(null)

      onMounted(() => {
        new Tooltip(tooltip.value)
      })
      
      return {
        tooltip,
        expressao : computed(() => props.real.function.replace(/x/, `${nome}`) ),
        valor: computed(() => parseInt( eval(props.real.function.replace(/x/, x.value)) ))
      }
    }
}
</script>

<style>

</style>