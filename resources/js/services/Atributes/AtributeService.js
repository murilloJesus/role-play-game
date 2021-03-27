import { ref } from "@vue/reactivity";

export function useAtributeService (controller) {
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
    value,
    incrementValue,
    canAdd
  }
}