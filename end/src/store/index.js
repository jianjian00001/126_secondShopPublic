import { createStore } from 'vuex'

export default createStore({
  state: {
    token:'',
    userInfo:JSON.parse(sessionStorage.getItem("userInfo"))
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token",token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.token = userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },
    REMOVE_INFO:(state) => {
      state.token = ''
      state.userInfo = {}
      localStorage.setItem("token",'')
      sessionStorage.setItem("userInfo",JSON.stringify(''))
    },

  },
  getters:{
    getUser:state => {
      return state.userInfo
    }
  },
  actions: {

  },
  modules: {

  }
})
