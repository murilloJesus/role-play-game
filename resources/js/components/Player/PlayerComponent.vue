<template>
  <div class="container">
    <div style="position:relative; margin-bottom: 20px; width: 100px;">
      <dados-component :nivel="player.nivel" />
      <div style="position: absolute;top: 22px;left: 73px;  width: 320px; ">
        <div class="d-flex flex-column ">
          <status-component
            :status="player.status.vida"
            color="danger"
          />
          <status-component
            :status="player.status.energia"
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import DadosComponent from './DadosComponent.vue'
import StatusComponent from './StatusComponent.vue'


    export default 
    {
      components:{
        StatusComponent,
        DadosComponent
      },
      setup(){
        const store = new useStore()

        return {
          player: computed(() => store.state.player)
        }
      }
    }
</script>
