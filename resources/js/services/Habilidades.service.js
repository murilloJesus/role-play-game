import { reactive } from '@vue/reactivity'
import sklJSON from './../configs/skill.json'
import { useSkillService } from './Skill.service';

export function useHabilidadeService (hab_list){

    const learned = reactive([])

    hab_list.value.forEach(skill => {
        learned.push(useSkillService(sklJSON[skill]))
    });

    return {
        learned
    }
}