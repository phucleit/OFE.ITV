export const state = ()=> ({
    model: [],
    modules: [],
  })
  export const mutations = {
    init(state,payload){
      state.model = payload;
    },
    initModules(state,payload){
      state.modules = payload;
    }
  }
  export const actions = {
    async init({ state, commit}, params) {
      let res = await this.$axios.get(`/user-roles`);
      commit('init', res.data);
      res = await this.$axios.get(`/user-roles/module/all`);
      commit('initModules', res.data);
    },
  
    async create({ state, commit, dispatch}, params) {
      let res = await this.$axios.post('/user-roles', params); 
      return res;
    },
  
    async update({ state, commit},params){
      let res = await this.$axios.patch(`/user-roles/${params._id}`, params); 
      return res;
    },
  
    async delete({ state, commit},params){
      let res = await this.$axios.delete(`/user-roles/${params}`, {}); 
      return res;
    },
    
    async removeUser({ state, commit},params){
      let res = await this.$axios.delete(`/user-roles/user/remove?role=${params.role}&user=${params.id}`, ); 
      return res;
    },
  
    async get({ state, commit},params){
      let res = await this.$axios.get(`/user-roles/${params}`); 
      return res;
    }
  }
  