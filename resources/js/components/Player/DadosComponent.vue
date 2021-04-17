/* eslint-disable vue/html-indent */
<template>
  <div
    style="   width: 90px;
              height: 90px;
              position:inherit;
              z-index:10"
  >
    <div
      class="text-center"
      style="display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              width: 94px;
              height: 99px;"
    >
      <div>
        <h3
          style="font-size: 3.575rem; 
                    margin-bottom: -15px;"
        >
          {{ nivel.nivel }}
        </h3>
        <small>
          {{ experiencia_atual }} /  {{ experiencia_total }}
        </small>
      </div>
    </div>
    <chart :experiencia="data_chart" />
    <div
      class="text-center"
      style="    width: 226px; top: 81px; position: absolute;"
    >
      <b>Murillo</b><br><small> Humano / <classe-component />  </small>
    </div>
  </div>
  <a
    class="btn btn-outline-primary"
    role="button"
    style="z-index: 11;position: relative;"
    @click="addExp()"
  />
    <modal
    :visible="confirmModal"
  >
    <template #body>
      Quantidade?
      <label />
      <input
        v-model="valor" 
        class="form-control"
        type="text"
      >
    </template>
    <template #footer>
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell(true)"
      >
        Adicionar
      </button>
    </template>
  </modal>
</template>

<script>
import { computed, ref } from 'vue'
import chart from "./chart.vue"
import { usePromiseModal } from '../../services/usePromiseModal'
import Modal from '../modal'
import ClasseComponent from './ClasseComponent.vue'

export default {
  components: { ClasseComponent, chart, Modal },
  props: ['nivel'],
  setup(props){

    const experiencia_total = computed(() => {
      return props.nivel.range()
    })

    const experiencia_atual = computed(() => {
      return props.nivel.sob_xp()
    })

    const data_chart = computed(() => {
      return {
        experiencia: experiencia_atual.value,
        resto: experiencia_total.value - experiencia_atual.value
      }
    })

    const confirmModal = usePromiseModal()

    const valor = ref('')

    const addExp = async () => {
      await confirmModal.ask().then((res) => {
        if(res){
         props.nivel.add_experiencia(parseInt(valor.value))
        }
      })         
    }
      

    return {
      valor,
      addExp,
      confirmModal,
      experiencia_total,
      experiencia_atual,
      data_chart
    }
  }

}
</script>

<style>

</style>