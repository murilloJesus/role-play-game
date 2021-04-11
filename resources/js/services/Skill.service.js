import { reactive } from "vue";
import sklJSON from './../configs/skill.json'


export function useSkillService (configs = sklJSON['Açoite']) {
    
    const skill = reactive({
        nome: configs.nome,
        velocidade: UseVelicidadeService(configs.velocidade),
        descricao: configs.descricao,
        requisitos: configs.requisitos,
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