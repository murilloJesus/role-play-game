<template>
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100">
      <div
        class="weapon-image" 
        :style="`background: url(${weapon.imagem}) center/90px no-repeat rgba(94, 58, 58, 0.61);`"
      />
      <div class="weapon-descritive">
        <h5 class="mb-1">
          {{ weapon.name }}
        </h5>
        <small>
          {{ weapon.raridade.name }}
        </small>
        <p class="mb-1">
          <damage-component :damage="weapon.damage" />
        </p>
        <div>
          <span
            v-for="(atributo, index) in weapon.atributos"
            :key="index"
            class="badge rounded-pill bg-success me-1"
          >{{ wpnJSON.atributos[atributo] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import damageComponent from "./../Skill/composition/DescricaoComponent/DamageComponent"
import wpnJSON from './../../configs/weapon.json'

export default {
    components: {
        damageComponent
    },
    props: {
        weapon : {
            type: Object,
            default: () => {
              
            }
        }
    },
    setup(){
      return {
        wpnJSON
      }
    }
}
</script>

<style>
.weapon-image{
    height: 100px;
    width: 100px;
    margin: 10px 0px;
    border: 1px solid blueviolet;
    border-radius: 10px;
}
.weapon-descritive {
    margin: 10px 0px 10px 20px;
    width: 60%;
}
</style>
