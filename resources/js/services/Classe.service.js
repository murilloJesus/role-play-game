import { reactive } from "@vue/reactivity";
import classJSON from './../configs/classe.json'

export function useClasseService(class_name){

    const configs = reactive(classJSON[class_name])

    return {
        configs
    }
}