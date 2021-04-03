<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-6">
            <status-component :status="player.status.vida" />
          </div>
          <div class="col-md-6">
            <status-component :status="player.status.energia" />
          </div>
        </div>
        <atribute-group-component :atributos="player.atributos" />
      </div>
    </div>
  </div>
</template>

<script>
import { useController } from '../services/Controller'
import AtributeGroupComponent from './AtributeGroupComponent'
import StatusComponent from './StatusComponent.vue'


    export default 
    {
      components:{
        AtributeGroupComponent,
        StatusComponent
      },
      setup(){
        const player = useController();

        return {
          player,
        }
      }
    }
</script>
