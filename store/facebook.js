export const state = ()=> ({
  model: [],
  countAll: 0,
  countPeriod: 0,
  countExpired: 0,
})
export const mutations = {
  init(state,payload){
    state.model = payload;
  },

  initCountAll(state,payload){
    if (payload.total.rows) {
      state.countAll = payload.total.rows;
    } else {
      state.countAll = 0;
    }
  },

  initCountPeriod(state,payload){
    if (payload.total.rows) {
      state.countPeriod = payload.total.rows;
    } else {
      state.countPeriod = 0;
    }
  },

  initCountExpired(state,payload){
    if (payload.total.rows) {
      state.countExpired = payload.total.rows;
    } else {
      state.countExpired = 0;
    }
  }
}
export const actions = {
  async init({ state, commit}, params) {
    let res = await this.$axios.get(`/facebooks?search=${params.search??""}&page=${params.page??1}`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/facebooks', params); 
    return res;
  },

  async getDetail({ state, commit }, id) {
    let res = await this.$axios.get(`/facebooks/${id}`); 
    return res.data;
  },

  async update({ state, commit },params){
    let res = await this.$axios.patch(`/facebooks/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit },params){
    let res = await this.$axios.delete(`/facebooks/${params}`, {}); 
    return res;
  },

  async get({ state, commit },params){
    let res = await this.$axios.get(`/facebooks/${params}`); 
    return res;
  },

  async getPeriodType({ state, commit}, params) {
    let res = await this.$axios.get(`/facebooks?periodType=1`);
    commit('init', res.data);
  },

  async getExpiredType({ state, commit}, params) {
    let res = await this.$axios.get(`/facebooks?expiredType=2`);
    commit('init', res.data);
  },
}
