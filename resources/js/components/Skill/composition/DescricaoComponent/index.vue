<template>
  <p class="mb-1">
    <template v-for="(item, index) in descricao">
      <string
        v-if="item.type == 'string'"
        :key="index"
        :string="item.value"
      />
      <damage
        v-if="item.type == 'damage'"
        :key="index"
        :damage="item.value"
      />
    </template>
  </p>
</template>

<script>
import string from './string.vue'
import damage from './DamageComponent/index.vue'

export default {
  components: { string, damage },
    props: {
      descricao: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    setup(){

    }
}
</script>

<style>

</style>