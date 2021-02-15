export const actions={
  login({commit}){
    commit('setToken','true')
  },
  logout({commit}){
    commit('clearToken')
    this.$router.push('/')
  },
  async nuxtServerInit({dispatch}){
    await dispatch('users/fetchUsers')
  }
}
export const state=() => ({
  token:null
})
export const mutations={
  setToken(state,token){
    state.token=token
  }
}
export const getters={
  isAuth:state => !!state.token
}
