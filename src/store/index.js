import { createStore } from 'vuex'

export default createStore({
  state: {
    position: '', //地址
    date: '', //日期
    carType: '', //车型
  },
  mutations: {
    setPosition(state,p=''){
      state.position = p
    },
    setDate(state,d=''){
      state.date = d
    },
    setCarType(state,c=''){
      state.carType = c
    }
  },
  actions: {
  },
  modules: {
  }
})
