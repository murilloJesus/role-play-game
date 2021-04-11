import { ref } from "@vue/reactivity";

export function useAtributeService (nome, controller) {
  const value = ref(0)

  function incrementValue() {
    if( canAdd() ){
      value.value++
      controller.addPoints()
    }
  }

  function canAdd(){
    return controller.hasPointsToAdd()
  }

  return {
    nome,
    value,
    incrementValue,
    canAdd
  }
}