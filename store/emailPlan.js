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
    let res = await this.$axios.get(`/email-plans`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/email-plans', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/email-plans/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/email-plans/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/email-plans/${params}`); 
    return res;
  }
}
