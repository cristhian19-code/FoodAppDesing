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
    },
    setFoods(state){
      state.carrito = []
    }
  },
  actions: {
    AddTrolley({commit},food){
      commit('Carrito',food)
    },
    ClearCart({commit}){
      commit('setFoods')
    }
  },
  getters: {
    getTotal(state){
      var total = 0;

      state.carrito.forEach(prod=> {
        total += prod.price*prod.cant
      })

      return total
    }
  }
})