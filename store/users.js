export const state= () => ({
  users:[]
})
export const mutations={
  setUsers(state,users){
    state.users=users
  }
}
export const actions={
  async fetchUsers({commit}){
    try{
      const users=awaitthis.$axios.$get("https://jsonplaceholder.typicode.com/users")
      commit('setUser',users)
    }catch(e){
     throw e
    }
  },
  async fetchUserById({},userId){
    try{
      return await this.$axion.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }catch(e){
     throw e
    }


  }
}
export const getters={
  users:state=>state.users


}
