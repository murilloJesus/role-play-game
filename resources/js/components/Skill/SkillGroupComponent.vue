<template>
  <div class="list-group">
    <skill-component
      v-for="(skill, index) in habilidades.learned"
      :key="index"
      :skill="skill"
    />
  </div>
</template>

<script>

import SkillComponent from './composition/SkillComponent.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { SkillComponent },
    setup() {
       const store = new useStore()

        return {
          habilidades: computed(() => store.state.player.habilidades)
        }
    }
}
</script>

<style>

</style>