import { reactive } from "@vue/reactivity";

export function usePontosService () {

  const configs = reactive({
    distribuided: 0,
    total: 5,
  })
  
  function hasPointsToAdd(){
    return configs.total > configs.distribuided
  }
  
  function addPoints(){
    configs.distribuided++
  }

  return {
    configs,
    hasPointsToAdd,
    addPoints
  }


}