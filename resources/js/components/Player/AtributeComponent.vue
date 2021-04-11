<template>
  <div
    class="card text-center"
    style="width: 5rem;"
  >
    <div class="card-body"> 
      <h3 class="card-title">
        <font-awesome-icon :icon="icon" />
      </h3>
      <p class="card-text">
        {{ attr.value }}
      </p>
      <button
        v-if="showBtn"
        type="button"
        class="btn btn-outline-primary"
        @click="attr.incrementValue"
      >
        <font-awesome-icon icon="plus-square" />
      </button>
    </div>
  </div>
</template>

<script>

import { computed } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useAtributeService } from '../../services/Atribute.service'
import { usePontosService } from '../../services/Pontos.service'

library.add( faPlusSquare, faQuestion )

export default {
  props: {
    attr: {
      type: Object,
      default: () => {
        return useAtributeService(usePontosService)
      }
    },
    icon: {
      type: Array,
      default: () => {
        return ['fa', 'question']
      }
    }
  },
  setup(props) {

    const showBtn = computed(() => {
      return props.attr.canAdd()
    })

    return {
      showBtn
    }
  }
}
</script>

<style>

</style>