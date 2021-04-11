<template>
  <div class="row">
    <div class="col-2">
      <atribute-component
        :attr="atributos.forca"
        :icon="['fa', 'fist-raised']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="atributos.agilidade"
        :icon="['fa', 'running']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="atributos.resistencia"
        :icon="['fa', 'heartbeat']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="atributos.carisma"
        :icon="['fa','user-alt']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="atributos.sabedoria"
        :icon="['fa', 'hat-wizard']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="atributos.inteligencia"
        :icon="['fa', 'graduation-cap']"
      />
    </div>
  </div>
</template>

<script>
import AtributeComponent from './AtributeComponent.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFistRaised, faRunning, faHeartbeat, faUserAlt, faHatWizard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useController } from './../../services/Controller'

library.add(faFistRaised, faRunning, faHeartbeat,faUserAlt, faHatWizard, faGraduationCap)

export default {
  components: { AtributeComponent },
  props: {
    atributos: {
      type: Object,
      default: () => {
        const { atributos } = useController()
        return atributos
      }
    }
  }
}
</script>

<style>

</style>