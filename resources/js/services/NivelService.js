import { ref } from "@vue/reactivity";

export function useNivelService(){
  const nivel = ref(1)
  const experiencia = ref(0)
  const arr_lvl_exp = get_arr_lvl_exp()

  function add_experiencia(val){
    experiencia.value += val
    contabilizar_nivel()
  }
  
  function get_exp_percent() {
    return parseInt((sob_xp() * 100) / range() )
  }

  return {
    nivel,
    experiencia,
    add_experiencia,
    get_exp_percent,
    range,
    sob_xp
  }

  function contabilizar_nivel(){
    let lvl = nivel.value,
        xp = experiencia.value,
        max_xp = arr_lvl_exp[lvl]

    if(xp >= max_xp){
      nivel.value++
      contabilizar_nivel()
    }
  }

  function range(){
    let lvl = nivel.value,
        lvl_xp = arr_lvl_exp[lvl],
        lst_lvl_xp = arr_lvl_exp[lvl-1]

    return lvl_xp - lst_lvl_xp
  }

  function sob_xp() {
    let lvl = nivel.value,
        xp = experiencia.value,
        lst_lvl_xp = arr_lvl_exp[lvl - 1]

    return xp - lst_lvl_xp
  }

  function get_arr_lvl_exp() {
    let arr = []

    for (var i = 0; i <= 60; i++) {
      arr.push( parseInt( ( (i * 1.3) * (i * 1.3) * 80) / 10 ) * 10 )
    }

    return arr
  }
}
