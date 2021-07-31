import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: []
  },
  mutations: {
    Carrito(state,food){
      let bol = false
      
      state.carrito.forEach((element,index) => {
        if(element.name == food.name){
          bol = true
          state.carrito[index].cant = state.carrito[index].cant + 1
        }
      });

      if(!bol){
        state.carrito.push(food)
      }

      console.log(state.carrito);
    }
  },
  actions: {
    AddTrolley({commit},food){
      commit('Carrito',food)
    }
  },
  modules: {
  }
})
