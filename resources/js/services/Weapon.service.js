import wpnJSON from './../configs/weapon.json'

export function useWeaponService (configs = {
    name: 'Espada de Treino',
    image: "espada",
    raridade: 0,
    damage: [
        {
            "number": 1,
            "size": 6
        }
    ],
    atributos: [
        'corte',
        'espada'
    ]
}) {    


    function hasAtribute(attr){        
        return this.atributos.indexOf(attr) > -1
    }

    return {
        name: configs.name,
        imagem: wpnJSON.images[configs.image],
        raridade: wpnJSON.raridade[configs.raridade],
        damage: configs.damage,
        atributos:  configs.atributos,
        hasAtribute
    }
}