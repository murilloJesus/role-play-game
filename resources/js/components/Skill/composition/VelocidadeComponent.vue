<template>
  <small 
    ref="tooltip"
    data-bs-toggle="tooltip"
    :title="velocidade.desc"
  >{{ velocidade.name }}</small>
</template>

<script>
import { ref, onMounted } from 'vue'
import { UseVelicidadeService } from './../../../services/Skill.service'
import { Tooltip } from 'bootstrap'
export default {
  props: {
    velocidade: {
      type: Object,
      default: () => {
        return UseVelicidadeService()
      }
    }
  },
  setup() {

    const tooltip = ref(null)

    onMounted(() => {
      new Tooltip(tooltip.value)
    })

    return {
      tooltip
    }
  }
}
</script>

<style>

</style>