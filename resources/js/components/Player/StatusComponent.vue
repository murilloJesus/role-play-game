<template>
  <div
    class="text-center"
    style="padding:0px;"
    @click="changeValue()"
  >
    <p
      class="card-text"
      style="position: absolute; color: white; margin-left: 20px;"
    >
      {{ atual }} /  {{ total }}
    </p><div
      class="progress"
      :style="`border-radius: 0px 20px 4.2rem 0.2rem; height: 25px;`"
    >
      <div
        role="progressbar"
        :style="style"
        class="progress-bar progress-bar-striped progress-bar-animated"
        :class="'bg-'+color"
      />
    </div>
  </div>
  
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
        class="btn btn-secondary"
        data-dismiss="modal"
        @click="confirmModal.tell('retirar')"
      >
        -
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click="confirmModal.tell('adicionar')"
      >
        +
      </button>
    </template>
  </modal>
</template>

<script>
import { computed, ref } from 'vue'
import { useController } from '../../services/Controller'
import Modal from './../modal'
import { usePromiseModal } from '../../services/usePromiseModal'

export default {
  components: {
    Modal
  },
  props: {
    status:{
      type: Object,
      default: () => {
        const { status } = useController()
        return status
      }
    },
    color:{
      type: String,
      default: "blue"
    }
  },
  setup(props){

    const atual = computed(() => {
      return props.status.final_val()
    })

    const total = computed(() => {
      return props.status.total_val()
    })

    const style = computed(() => {
      return `width: ${props.status.percent_val()}%`
    })

    const valor = ref('')

    const confirmModal = usePromiseModal()

    const changeValue = async () => {
      await confirmModal.ask().then((res) => {
        if(res === 'retirar'){
          props.status.add_use(parseInt(valor.value))
        }else if(res === 'adicionar'){
          props.status.add_use(parseInt(-valor.value))
        }
      })         
    }
        

        return {
            changeValue,
            confirmModal,
            atual,
            total,
            style,
            valor
    }
  }
}
</script>

<style>

</style>