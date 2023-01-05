export const state = ()=> ({
  model: []
})
export const mutations = {
  init(state,payload){
    state.model = payload;
  }
}
export const actions = {
  async init({ state, commit}, params) {
    let res = await this.$axios.get(`/maintenance-plans`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/maintenance-plans', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/maintenance-plans/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/maintenance-plans/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/maintenance-plans/${params}`); 
    return res;
  }
}
