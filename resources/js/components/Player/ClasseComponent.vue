<template>
  <small @click="changeClass()">{{ classe.configs.name }}</small>
  <modal
    :visible="confirmModal"
  >
    <template #body>
      <p>Deseja usar qual classe?</p>
    </template>
    <template #footer >
        <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell('barbaro')"
      >
        Barbaro
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell('arcano')"
      >
        Arcano
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell('pistoleiro')"
      >
        Pistoleiro
      </button>
    </template>
  </modal>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

import { usePromiseModal } from '../../services/usePromiseModal'
import Modal from '../modal'

export default {
    components: {
        Modal
    },
    setup(){
        const store = useStore()
        
        const confirmModal = usePromiseModal()

        return {
            confirmModal,
            classe: computed(() => store.state.player.classe)
        }
    }
}
</script>

<style>

</style>