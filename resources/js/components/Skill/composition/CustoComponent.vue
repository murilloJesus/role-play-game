<template>
  <small :style="style">{{custo}} Energia</small>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['custo'],
  setup(props) {
    const store = useStore()

    return {
      style: computed(() => {
        return props.custo > store.state.player.status.energia.final_val() ? 'color: red;' : 'color: blue;'
      })
    }
  }
}
</script>

<style>

</style>