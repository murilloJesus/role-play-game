import { reactive } from "vue";
import sklJSON from './../configs/skill.json'


export function useSkillService (configs = sklJSON['Açoite']) {
    
    const skill = reactive({
        name: configs.name,
        velocidade: UseVelicidadeService(configs.velocidade),
        descricao: configs.descricao,
        requisito: configs.requisito,
        custo: configs.custo
    })

    return {
        skill
    }
}

import velJSON from './../configs/velocidade.skill.json'

export function UseVelicidadeService (id = 0) {
    const velocidade = velJSON[id]

    return velocidade
}

export function UseDescricaoService (descricao = sklJSON['Assoite']['descricao']) {

    return {
        descricao
    }




}