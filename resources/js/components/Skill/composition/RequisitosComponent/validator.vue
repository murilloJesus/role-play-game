<template>
  <span
    ref="tooltip"
    class="badge rounded-pill"
    :class="validate ? 'bg-primary' : 'bg-danger' "
    data-bs-toggle="tooltip"
    :title="descrição"
  >{{ requisito.type }}</span>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { Tooltip } from 'bootstrap'
export default {
    props: ['requisito'],
    setup(props){

        const tooltip = ref(null)

        onMounted(() => {
            new Tooltip(tooltip.value)
        })        

        const store = useStore()

        var descrição = '' 
        var value = 0
        var validate = false

        switch(props.requisito.type){
            case 'Arma':
                 value = computed(() => store.state.player.arma[props.requisito.atribute])
                 descrição += `Tipo de arma deve ser `
                 break

            case 'Atributo':
                 value = computed(() => store.state.player.atributos[props.requisito.atribute].value)
                 descrição += `Atributo ${store.state.player.atributos[props.requisito.atribute].name} deve ser `
                 break

        }

        switch(props.requisito.operator){
            case '==':
                validate = computed(() => value.value == props.requisito.comparison)
                 descrição += `igual à ${props.requisito.comparison}`
                break

            case '>':  
                validate = computed(() => value.value > props.requisito.comparison)
                 descrição += `maior que ${props.requisito.comparison}`
                break

            case '>=':
                validate = computed(() => value.value >= props.requisito.comparison)
                descrição += `maior ou igual à ${props.requisito.comparison}`
                break

            case '<':  
                validate = computed(() => value.value < props.requisito.comparison)
                descrição += `menor que ${props.requisito.comparison}`
                break

            case '<=':
                validate = computed(() => value.value <= props.requisito.comparison)
                descrição += `menor ou igual à ${props.requisito.comparison}`
                break

            case '!=':
                validate = computed(() => value.value != props.requisito.comparison)
                descrição += `diferente de ${props.requisito.comparison}`
                break
        }


        return {
            tooltip,
            descrição,
            value,
            validate
        }
    }
}

</script>

<style>

</style>