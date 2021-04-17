<template>
  <div
    class="text-center"
    style="padding:0px;"
  >
    <p
      class="card-text"
      style="position: absolute; color: white; margin-left: 20px;"
    >
        {{ atual }} /  {{ total }}
    </p><div
      class="progress"
      :style="`border-radius: 0px 20px 4.2rem 0.2rem; height: 25px;`"
    >
      <div
        role="progressbar"
        :style="style"
        class="progress-bar progress-bar-striped progress-bar-animated"
        :class="'bg-'+color"
      />
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
    },
    color:{
      type: String,
      default: "blue"
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