<template>
  <small @click="changeClass()">{{ classe.name }}</small>
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

        const changeClass = async () => {
            await confirmModal.ask().then((res) => {
                if(res != false){
                    store.state.player.setClass(res)
                }
            })         
        }

        return {
            changeClass,
            confirmModal,
            classe: computed(() => store.state.player.classe)
        }
    }
}
</script>

<style>

</style>