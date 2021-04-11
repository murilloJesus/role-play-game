import { createStore } from 'vuex'
import { useController } from '../services/Controller'

// Create a new store instance.
export default createStore({
  state () {
    return {
      player: useController()
    }
  }
})