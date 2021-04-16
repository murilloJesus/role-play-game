import { ref } from "vue"

export function usePromiseModal(){

    let resolveFn = () => {}

    const visible = ref(false)

    const ask = () => {
      visible.value = true

      return new Promise((resolve) => {
        resolveFn = resolve
      })
    }

    const tell = (value) => {
      visible.value = false,
      resolveFn(value)
    }

    return {
        visible,
        ask,
        tell
    }
}