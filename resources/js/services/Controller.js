import { reactive } from "vue";
import { useAtributeService } from "./AtributeService";
import { useNivelService } from "./NivelService";
import { usePontosService } from "./PontosService"
import { useStatusService } from "./StatusService";

export function useController(){

  const nivel = useNivelService()

  const pontos = usePontosService(nivel)

  const atributos = reactive({
    forca:  useAtributeService(pontos),
    agilidade:  useAtributeService(pontos),
    resistencia:  useAtributeService(pontos),
    carisma:  useAtributeService(pontos),
    sabedoria:  useAtributeService(pontos),
    inteligencia:  useAtributeService(pontos)
  })

  const status = reactive({
    vida: useStatusService(atributos, {
      base: 100,
      modifier: 'resistencia',
      modifier_base: 10,
      use: 0
    }),

    energia: useStatusService(atributos, {
      base: 20,
      modifier: 'sabedoria',
      modifier_base: 2,
      use: 0
    })

  })

  return {
    nivel,
    pontos,
    atributos,
    status
  }
}