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
    let res = await this.$axios.get(`/content-plans`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/content-plans', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/content-plans/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/content-plans/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/content-plans/${params}`); 
    return res;
  }
}
