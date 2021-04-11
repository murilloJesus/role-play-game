<template>
  <div class="card" style="width: 100%">
    <div
      class="card-body text-center"
      style="color: blue;padding-bottom: 0px;padding-left: 0px;padding-right: 0px;"
    >
      <h5 class="card-title">
        {{ atual }}
      </h5><p
        class="card-text"
        style="width: 40%;margin: auto;border-top: 2px solid blue;"
      >
        {{ total }}
      </p><div
        class="progress"
        style="height: 6px; border-radius: 0.2rem; border-top-left-radius: 0;border-top-right-radius: 0;margin-top: 1.25em;"
      >
        <div
          role="progressbar"
          :style="style"
          class="progress-bar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useController } from '../../services/Controller'

export default {
  props: {
    status:{
      type: Object,
      default: () => {
        const { status } = useController()
        return status
      }
    }
  },
  setup(props){

    const atual = computed(() => {
      return props.status.final_val()
    })

    const total = computed(() => {
      return props.status.total_val()
    })

    const style = computed(() => {
      return `width: ${props.status.percent_val()}%`
    })

    return {
      atual,
      total,
      style
    }
  }
}
</script>

<style>

</style>