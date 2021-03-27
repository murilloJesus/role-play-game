<template>
  <div class="row">
    <div class="col-2">
      <atribute-component
        :attr="controller.forca"
        :icon="['fa', 'fist-raised']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="controller.agilidade"
        :icon="['fa', 'running']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="controller.resistencia"
        :icon="['fa', 'heartbeat']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="controller.carisma"
        :icon="['fa','user-alt']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="controller.sabedoria"
        :icon="['fa', 'hat-wizard']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="controller.inteligencia"
        :icon="['fa', 'graduation-cap']"
      />
    </div>
  </div>
</template>

<script>
import { useAtributeService } from '../services/Atributes/AtributeService'
import  { usePontosService } from '../services/Atributes/PontosService'
import AtributeComponent from './AtributeComponent.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFistRaised, faRunning, faHeartbeat, faUserAlt, faHatWizard, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { useControllerAtributes } from '../services/Atributes/Controller'

library.add(faFistRaised, faRunning, faHeartbeat,faUserAlt, faHatWizard, faGraduationCap)

export default {
  components: { AtributeComponent },
  setup() {
    const controller = useControllerAtributes();

    // const ctrl = usePontosService()

    // const forca = useAtributeService(ctrl)
    // const agilidade = useAtributeService(ctrl)
    // const resistencia = useAtributeService(ctrl)
    // const carisma = useAtributeService(ctrl)
    // const sabedoria = useAtributeService(ctrl)
    // const inteligencia = useAtributeService(ctrl)

    return {
      controller
      // ctrl,
      // forca,
      // agilidade,
      // resistencia,
      // carisma,
      // sabedoria,
      // inteligencia
    }
  }
}
</script>

<style>

</style>