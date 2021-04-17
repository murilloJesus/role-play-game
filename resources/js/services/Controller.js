import { reactive } from "vue";
import { useAtributeService } from "./Atribute.service";
import { useNivelService } from "./Nivel.service";
import { usePontosService } from "./Pontos.service"
import { useStatusService } from "./Status.service";
import { useHabilidadeService } from "./Habilidades.service";

import classJSON from './../configs/classe.json'

export function useController(class_name){

  const classe = classJSON[class_name]

  const nivel = useNivelService()

  const pontos = usePontosService(nivel)

  const atributos = reactive({
    forca:  useAtributeService('Força', pontos, classe.base_status.forca),
    agilidade:  useAtributeService('Agilidade', pontos, classe.base_status.agilidade),
    resistencia:  useAtributeService('Resistência', pontos, classe.base_status.resistencia),
    carisma:  useAtributeService('Carisma', pontos, classe.base_status.carisma),
    sabedoria:  useAtributeService('Sabedoria', pontos, classe.base_status.sabedoria),
    inteligencia:  useAtributeService('Inteligência', pontos, classe.base_status.inteligencia)
  })

  const status = reactive({
    vida: useStatusService(atributos, classJSON[class_name].vida),
    energia: useStatusService(atributos, classJSON[class_name].energia)
  })

  const habilidades = useHabilidadeService(classe.habilidades)

  return {
    nivel,
    pontos,
    atributos,
    status,
    habilidades
  }
}