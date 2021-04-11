<template>
  <div class="list-group">
    <skill-component />
    <skill-component :skill="skill" />
  </div>
</template>

<script>

import {useSkillService} from './../../services/Skill.service'
import SkillComponent from './SkillComponent.vue'

export default {
  components: { SkillComponent },
    setup() {
       const { skill } = useSkillService({
            name: "Perfuração",
            velocidade: 2,
            descricao: "perfura o alvo",
            requisito: "arma de disparo",
            custo: 8
       })

        return {
          skill
        }
    }
}
</script>

<style>

</style>