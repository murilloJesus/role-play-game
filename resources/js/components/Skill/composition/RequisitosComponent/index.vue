<template>
  <div style="width: 60%">
    <template
      v-for="(item, index) in requisitos"
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