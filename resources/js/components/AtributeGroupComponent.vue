<template>
  <div class="row">
    <div class="col-2">
      <atribute-component
        :attr="forca"
        :icon="['fa', 'fist-raised']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="agilidade"
        :icon="['fa', 'running']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="resistencia"
        :icon="['fa', 'heartbeat']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="carisma"
        :icon="['fa','user-alt']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="sabedoria"
        :icon="['fa', 'hat-wizard']"
      />
    </div>
    <div class="col-2">
      <atribute-component
        :attr="inteligencia"
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

library.add(faFistRaised, faRunning, faHeartbeat,faUserAlt, faHatWizard, faGraduationCap)

export default {
  components: { AtributeComponent },
  setup() {
    const ctrl = usePontosService()

    const forca = useAtributeService(ctrl)
    const agilidade = useAtributeService(ctrl)
    const resistencia = useAtributeService(ctrl)
    const carisma = useAtributeService(ctrl)
    const sabedoria = useAtributeService(ctrl)
    const inteligencia = useAtributeService(ctrl)

    return {
      ctrl,
      forca,
      agilidade,
      resistencia,
      carisma,
      sabedoria,
      inteligencia
    }
  }
}
</script>

<style>

</style>