<template>
  <p class="mb-1">
    <template v-for="(item, index) in descricao">
      <string
        v-if="item.type == 'string'"
        :key="index"
        :string="item.value"
      />
      <acao
        v-if="item.type == 'ação'"
        :key="index"
        :string="item.value"
      />
      <damage
        v-if="item.type == 'damage'"
        :key="index"
        :damage="item.value"
        :weapon="weapon"
      />
    </template>
  </p>
</template>

<script>
import string from './string.vue'
import damage from './DamageComponent/index.vue'
import Acao from './acao.vue'

export default {
  components: { string, damage, Acao },
    props: {
      descricao: {
        type: Array,
        default: () => {
          return []
        }
      },
      weapon: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    setup(){

    }
}
</script>

<style>

</style>