import { ref } from "@vue/reactivity"

export function useStatusService(atributos, configs = {
  base: 100,
  modifier: 0,
  modifier_base: 5,
  use: 0
}){

  var use = ref(configs.value.use);

  function total_val(){
    return configs.value.base + parseInt(atributos[configs.value.modifier].value * configs.value.modifier_base)
  }

  function final_val(){
    return total_val() - use.value
  }

  function add_use(val){
    use.value += val
    if (use.value > total_val()) use.value = total_val()
    if (use.value < 0) use.value = 0
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