<template>
  <template
    v-for="(item, index) in damage.dice"
    :key="index"
  >
    <dice :dice="item" />&nbsp 
    <template v-if="index+1 < damage.dice.length && damage.real.length == 0">
      +&nbsp
    </template>
    <template v-if="index+1 == damage.dice.length && damage.real.length != 0">
      +&nbsp
    </template>
  </template>
  <template
    v-for="(item, index) in damage.real"
    :key="index"
  >
    <real :real="item" />&nbsp
    <template v-if="index+1 < damage.real.length">
      +&nbsp
    </template>
  </template>
</template>

<script>
import Dice from './dice'
import Real from './real.vue'

export default {
    components:{
        Real,
        Dice
    }, 
    props: ['damage']
}
// {
//     "dice": [
//         {
//             "number": 1,
//             "size": 6
//         }
//     ],
//     "real" : [
//         {
//             "modificador" : "forca",
//             "funcao": "x/2"
//         }
//     ]
// }
</script>

<style>

</style>