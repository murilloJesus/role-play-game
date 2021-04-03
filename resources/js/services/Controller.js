import { reactive } from "vue";
import { useAtributeService } from "./AtributeService";
import { usePontosService } from "./PontosService"
import { useStatusService } from "./StatusService";

export function useController(){

  const pontos = usePontosService()

  const atributos = reactive({
    forca:  useAtributeService(pontos),
    agilidade:  useAtributeService(pontos),
    resistencia:  useAtributeService(pontos),
    carisma:  useAtributeService(pontos),
    sabedoria:  useAtributeService(pontos),
    inteligencia:  useAtributeService(pontos)
  })

  const status = reactive({
    vida: useStatusService({
      base: 100,
      modifier: 'resistencia',
      modifier_base: 10,
      use: 0
    }, atributos),

    energia: useStatusService({
      base: 20,
      modifier: 'sabedoria',
      modifier_base: 2,
      use: 0
    }, atributos)

  })

  return {
    pontos,
    atributos,
    status
  }
}