import { reactive } from "@vue/reactivity";

export function usePontosService (nivel, config = {
    distribuided: 0,
    inicial: 5,
    por_nivel: 2
  }) {

  const configs = reactive(config);

  function hasPointsToAdd(){
    return ( configs.inicial + ( nivel.nivel.value * configs.por_nivel ) ) > configs.distribuided
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