<template>
  <div class="list-group">
    <skill-component :skill="skill" />
  </div>
</template>

<script>

import {useSkillService} from './../../services/Skill.service'
import SkillComponent from './SkillComponent.vue'

import sklJSON from './../../configs/skill.json'

export default {
  components: { SkillComponent },
    setup() {
       const skill = useSkillService(sklJSON['estocada'])

        return {
          skill
        }
    }
}
</script>

<style>

</style>