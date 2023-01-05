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
    let res = await this.$axios.get(`/hosting-plans`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/hosting-plans', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/hosting-plans/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/hosting-plans/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
      let res = await this.$axios.get(`/hosting-plans/${params}`); 
      return res;
  }
}
