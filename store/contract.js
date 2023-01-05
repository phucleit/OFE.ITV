export const state = ()=> ({
  model: [],
})
export const mutations = {
  init(state,payload){
    state.model = payload;
  },
}
export const actions = {
  async init({ state, commit}, params) {
    let res = await this.$axios.get(`/contracts`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/contracts', params); 
    return res;
  },

  async getDetail({ state, commit }, id) {
    let res = await this.$axios.get(`/contracts/${id}`); 
    return res.data;
  },

  async update({ state, commit },params){
    let res = await this.$axios.patch(`/contracts/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit },params){
    let res = await this.$axios.delete(`/contracts/${params}`, {}); 
    return res;
  },

  async get({ state, commit },params){
    let res = await this.$axios.get(`/contracts/${params}`); 
    return res;
  },
}
