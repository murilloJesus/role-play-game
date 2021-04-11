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

  <!-- <p class="mb-1">
    Causa 
    <b style="color: green;">1d6</b> + 
    <b
      ref="tooltip"
      data-bs-toggle="tooltip"
      data-bs-html="true"
      title="<b><i>Força / 2</i></b>"
      style="color: red;"
    >4</b> de dano.
  </p> -->
</template>

<script>
import { ref, onMounted } from 'vue'
import { Tooltip } from 'bootstrap'
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
      const tooltip = ref(null)

      onMounted(() => {
        new Tooltip(tooltip.value, {
          html: true,
        })
      });
      
      return {
        tooltip
      }

    }
}
</script>

<style>

</style>