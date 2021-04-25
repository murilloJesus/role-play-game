import { reactive } from "@vue/reactivity"
import { useWeaponService } from "./Weapon.service"
import wpnJSON from './../configs/weapon.json'


export function useColdreService(configs = [
    useWeaponService(wpnJSON.armas.espada),
    useWeaponService(wpnJSON.armas.machadinha),
    useWeaponService(wpnJSON.armas.escudo)
]){

    const weapons = reactive(configs)

    function hasAtribute(attr){
        return weapons.findIndex((el) => el.hasAtribute(attr)) > -1
    }

    function getMaxModifier(weapon){
        return weapons.find((el) => el.hasAtribute(weapon)).raridade["max-modifier"]
    }

    return {
        weapons,
        hasAtribute,
        getMaxModifier
    }
}