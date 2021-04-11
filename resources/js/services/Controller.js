import { reactive } from "vue";
import { useAtributeService } from "./Atribute.service";
import { useNivelService } from "./Nivel.service";
import { usePontosService } from "./Pontos.service"
import { useStatusService } from "./Status.service";

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