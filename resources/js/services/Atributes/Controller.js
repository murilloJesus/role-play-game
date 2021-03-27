import { useAtributeService } from "./AtributeService";
import { usePontosService } from "./PontosService"

export function useControllerAtributes(){

  const pontos = usePontosService()

  
    const forca =  useAtributeService(pontos)
    const agilidade =  useAtributeService(pontos)
    const resistencia =  useAtributeService(pontos)
    const carisma =  useAtributeService(pontos)
    const sabedoria =  useAtributeService(pontos)
    const inteligencia =  useAtributeService(pontos)
  


  return {
    pontos,
    forca,
    agilidade,
    resistencia,
    carisma,
    sabedoria,inteligencia
  }
}