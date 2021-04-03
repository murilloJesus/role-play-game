import { ref } from "@vue/reactivity"

export function useStatusService(configs = {
  base: 100,
  modifier: 0,
  modifier_base: 5,
  use: 0
}, atributos){

  var use = ref(configs.use);

  function total_val(){
    return configs.base + (atributos[configs.modifier].value * configs.modifier_base)
  }

  function final_val(){
    return total_val() - use.value
  }

  function add_use(val){
    use.value += val
  }

  function percent_val(){
    return final_val()/total_val() * 100
  }

  return {
    total_val,
    final_val,
    percent_val,
    add_use
  }

} 