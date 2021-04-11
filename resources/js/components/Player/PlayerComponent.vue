<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-4">
            <dados-component :nivel="player.nivel"/>
          </div>
          <div class="col-md-6">
            <div class="d-flex flex-column ">
              <status-component :status="player.status.vida" />
              <status-component :status="player.status.energia" />
            </div>
          </div>
        </div>
        <br>
        <atribute-group-component :atributos="player.atributos" />
      </div>
    </div>
  </div>
</template>

<script>
import { useController } from '../../services/Controller'
import AtributeGroupComponent from './AtributeGroupComponent'
import DadosComponent from './DadosComponent.vue'
import StatusComponent from './StatusComponent.vue'


    export default 
    {
      components:{
        AtributeGroupComponent,
        StatusComponent,
        DadosComponent
      },
      setup(){
        const player = useController();

        return {
          player,
        }
      }
    }
</script>
