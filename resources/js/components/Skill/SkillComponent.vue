<template>
  <div
    class="list-group-item list-group-item-action"
    @click="castSkill()"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">
        {{ skill.configs.nome }}
      </h5>
      <velocidade-component :velocidade="skill.configs.velocidade" />
    </div>
    <descricao-component :descricao="skill.configs.descricao.value" />
    <div class="d-flex w-100 justify-content-between">
      <requisitos-component :requisitos="skill.configs.requisitos" />
      <custo-component :custo="skill.configs.custo" />
    </div>
  </div>
  <modal
    :visible="confirmModal"
  >
    <template #body>
      Deseja Usar a Skill?
    </template>
    <template #footer>
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell(true)"
      >
        Sim
      </button>
      <button
        type="button"
        class="btn btn-secondary"
        data-dismiss="modal"
        @click="confirmModal.tell(false)"
      >
        Não
      </button>
    </template>
  </modal>
</template>

<script>
import VelocidadeComponent from './composition/VelocidadeComponent.vue'
import DescricaoComponent from './composition/DescricaoComponent'
import RequisitosComponent from './composition/RequisitosComponent/index.vue'
import CustoComponent from './composition/CustoComponent.vue'
import Modal from './../modal'

import { usePromiseModal } from './../../services/usePromiseModal'
import { useSkillService } from './../../services/Skill.service'

    export default {
      components: {
        VelocidadeComponent,
        DescricaoComponent,
        RequisitosComponent,
        CustoComponent,
        Modal
      },
      props: {
        skill : {
          type: Object,
          default: () => {
            const { skill } = useSkillService()
            return skill
          }
        }
      },
      setup(props) {
        const confirmModal = usePromiseModal()

        const castSkill = async () => {
          await confirmModal.ask().then((res) => {
            if(res){
             props.skill.castSkill()
            }
          })         
        }

        return {
            castSkill,
            confirmModal
        }
      }
    }

</script>

<style>

</style>
