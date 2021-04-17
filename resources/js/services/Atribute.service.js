import { ref } from "@vue/reactivity";

export function useAtributeService (name, controller, base) {
  const value = ref(base)

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