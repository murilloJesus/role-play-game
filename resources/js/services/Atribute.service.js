import { ref } from "@vue/reactivity";

export function useAtributeService (name, controller) {
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
    name,
    value,
    incrementValue,
    canAdd
  }
}