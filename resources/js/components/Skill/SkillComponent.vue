<template>
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">
        {{ skill.nome }}
      </h5>
      <velocidade-component :velocidade="skill.velocidade" />
    </div>
    <descricao-component :descricao="skill.descricao" />
    <div class="d-flex w-100 justify-content-between">
      <requisitos-component :requisitos="skill.requisitos" />
      <custo-component :custo="skill.custo" />
    </div>
  </div>
</template>

<script>
import VelocidadeComponent from './composition/VelocidadeComponent.vue'
import DescricaoComponent from './composition/DescricaoComponent'
import RequisitosComponent from './composition/RequisitosComponent.vue'
import CustoComponent from './composition/CustoComponent.vue'
import { useSkillService } from './../../services/Skill.service'

    export default {
      components: {
        VelocidadeComponent,
        DescricaoComponent,
        RequisitosComponent,
        CustoComponent
      },
      props: {
        skill : {
          type: Object,
          default: () => {
            const { skill } = useSkillService()
            return skill
          }
        }
      }
    }

</script>

<style>

</style>
