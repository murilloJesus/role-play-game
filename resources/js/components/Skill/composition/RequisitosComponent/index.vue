<template>
  <div style="width: 60%">
    <validator
      :requisito="requisitos.arma"
    />
    <template
      v-for="(item, index) in requisitos.atributos"
      :key="index"
    >
      <validator
        :requisito="item"
      />
    </template>
  </div>
</template>

<script>
import validator from "./validator.vue"

export default {
  components: { validator },
  props: ['requisitos']
}
</script>

<style>

</style>