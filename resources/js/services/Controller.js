import { reactive, ref } from "vue";
import { useAtributeService } from "./Atribute.service";
import { useNivelService } from "./Nivel.service";
import { usePontosService } from "./Pontos.service"
import { useStatusService } from "./Status.service";
import { useHabilidadeService } from "./Habilidades.service";

import { useClasseService } from "./Classe.service";
import { useColdreService } from "./Coldre.service";

export function useController(class_name){

  const classe = useClasseService(class_name)

  const nivel = useNivelService()
  
  const pontos = usePontosService(nivel)

  const coldre = useColdreService();

  const atributos = reactive({
    forca:  useAtributeService('Força', pontos, classe, 'forca'),
    agilidade:  useAtributeService('Agilidade', pontos, classe, 'agilidade'),
    resistencia:  useAtributeService('Resistência', pontos, classe, 'resistencia'),
    carisma:  useAtributeService('Carisma', pontos, classe, 'carisma'),
    sabedoria:  useAtributeService('Sabedoria', pontos, classe, 'sabedoria'),
    inteligencia:  useAtributeService('Inteligência', pontos, classe, 'inteligencia')
  })

  const status = reactive({
    vida: useStatusService(atributos, ref(classe.configs.vida)),
    energia: useStatusService(atributos, ref(classe.configs.energia))
  })

  const habilidades = useHabilidadeService(ref(classe.configs.habilidades))

  return {
    classe,
    coldre,
    nivel,
    pontos,
    atributos,
    status,
    habilidades
  }
}