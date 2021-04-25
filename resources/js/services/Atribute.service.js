import { reactive, ref } from "@vue/reactivity";

export function useAtributeService (name, controller, classe, base) {
  const cls = reactive(classe)

  const value = ref(cls.configs.base_status[base])

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