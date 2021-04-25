<template>
  <div class="list-group">
    <weapon-component
      v-for="(weapon, index) in coldre.weapons"
      :key="index"
      :weapon="weapon"
    />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import weaponComponent from './weaponComponent.vue';
import { computed } from 'vue';

export default {
  components: { weaponComponent },
  setup() {
       const store = new useStore()

        return {
          coldre: computed(() => store.state.player.coldre)
        }
    }
}
</script>

<style scoped>
.list-group-item {
  background-color: #4949695b;
}
</style>