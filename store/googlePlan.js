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
    let res = await this.$axios.get(`/google-plans`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/google-plans', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/google-plans/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/google-plans/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/google-plans/${params}`); 
    return res;
  }
}
