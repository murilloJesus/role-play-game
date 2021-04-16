import { reactive, ref } from "vue";
import sklJSON from './../configs/skill.json'
import { UseDiceRollerService } from './DiceRoll.service'

import { v4 as uuidv4 } from 'uuid';


export function useSkillService (initConfigs = sklJSON['açoite']) {
    
    const configs = reactive({
        nome: initConfigs.nome,
        velocidade: UseVelicidadeService(initConfigs.velocidade),
        descricao: UseDescricaoService(initConfigs.descricao),
        requisitos:  initConfigs.requisitos,
        custo: initConfigs.custo,
        historic: []
    })

    function castSkill() {
       const dice =  UseDiceRollerService()

       let resolves = Array()

       configs.descricao.diceSet().forEach((diceSet) => {
           let uuid = uuidv4(),
            retorno  = `this.apply = (any, res) => {
                $('#dices_roll').append(\`
                    <div id="${uuid}">
                        \${res}
                    </div>
                \`)
            }`;

           dice.start_throw(diceSet, retorno)

           resolves.push(uuid)

       })

       configs.historic.push(resolves)
    }

    return {
        configs,
        castSkill
    }
}

import velJSON from './../configs/velocidade.skill.json'

export function UseVelicidadeService (id = 0) {
    const velocidade = velJSON[id]

    return velocidade
}

export function UseDescricaoService (descricao = sklJSON['Assoite']['descricao']) {

    const value = descricao

    const damages = () => {
        return descricao.filter((el) => {
          return el.type == 'damage'
        })
    }

    const diceSet = () => {
        let dices = Array()
        damages().forEach((damage) => {
            let retorno = ''
            damage.value.dice.forEach((dado, index) => {
                retorno += `${dado.number}d${dado.size}`
                retorno += index  + 1 < damage.value.dice.length ?  ' + ' :  '' 
                
            })
            dices.push(retorno);
        });
        return dices
    }

    return{
        diceSet,
        value
    } 
    
}

export function UseRequisitoService (requisitos = sklJSON['Assoite']['requisitos']) {

    return  requisitos


}