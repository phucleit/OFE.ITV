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
    let res = await this.$axios.get(`/user`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/user/create', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/user/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/user/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/user/${params}`); 
    return res;
  },

  async getDetail({ state, commit}, id) {
    let res = await this.$axios.get(`/user/${id}`); 
    return res.data;
  }
}
  