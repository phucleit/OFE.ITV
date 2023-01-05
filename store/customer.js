export const state = ()=> ({
  model: [],
  domain: [],
  hosting: [],
  ssl: [],
  email: [],
  google: [],
  facebook: [],
  content: [],
  maintenance: [],
  countAll: 0,
  countPersonalType: 0,
  countCompanyType: 0,
  countFriendlyType: 0,
})
export const mutations = {
  init(state,payload){
    state.model = payload;
  },

  initDomain(state, payload) {
    state.domain = payload;
  },

  initHosting(state, payload) {
    state.hosting = payload;
  },

  initSsl(state, payload) {
    state.ssl = payload;
  },

  initEmail(state, payload) {
    state.email = payload;
  },

  initGoogle(state, payload) {
    state.google = payload;
  },

  initFacebook(state, payload) {
    state.facebook = payload;
  },

  initContent(state, payload) {
    state.content = payload;
  },

  initMaintenance(state, payload) {
    state.maintenance = payload;
  },

  initCountAll(state,payload){
    if (payload.total.rows) {
      state.countAll = payload.total.rows;
    } else {
      state.countAll = 0;
    }
  },

  initCountPersonalType(state,payload){
    if (payload.total.rows) {
      state.countPersonalType = payload.total.rows;
    } else {
      state.countPersonalType = 0;
    }
  },

  initCountCompanyType(state,payload){
    if (payload.total.rows) {
      state.countCompanyType = payload.total.rows;
    } else {
      state.countCompanyType = 0;
    }
  },

  initCountFriendlyType(state,payload){
    if (payload.total.rows) {
      state.countFriendlyType = payload.total.rows;
    } else {
      state.countFriendlyType = 0;
    }
  }
}
export const actions = {
  async init({ state, commit}, params) {
    let res = await this.$axios.get(`/customers?search=${params.search??""}&page=${params.page??1}`);
    commit('init', res.data);
  },

  async create({ state, commit, dispatch}, params) {
    let res = await this.$axios.post('/customers', params); 
    return res;
  },

  async update({ state, commit},params){
    let res = await this.$axios.patch(`/customers/${params.id}`, params.data); 
    return res;
  },

  async delete({ state, commit},params){
    let res = await this.$axios.delete(`/customers/${params}`, {}); 
    return res;
  },

  async get({ state, commit},params){
    let res = await this.$axios.get(`/customers/${params}`); 
    return res;
  },

  async getDomain({ state, commit}, id) {
    let res = await this.$axios.get(`/domains?customerId=${id}`);
    commit('initDomain', res.data);
  },

  async getHosting({ state, commit}, id) {
    let res = await this.$axios.get(`/hostings?customerId=${id}`);
    commit('initHosting', res.data);
  },

  async getSsl({ state, commit}, id) {
    let res = await this.$axios.get(`/ssls?customerId=${id}`);
    commit('initSsl', res.data);
  },

  async getEmail({ state, commit}, id) {
    let res = await this.$axios.get(`/emails?customerId=${id}`);
    commit('initEmail', res.data);
  },

  async getGoogle({ state, commit}, id) {
    let res = await this.$axios.get(`/googles?customerId=${id}`);
    commit('initGoogle', res.data);
  },

  async getFacebook({ state, commit}, id) {
    let res = await this.$axios.get(`/facebooks?customerId=${id}`);
    commit('initFacebook', res.data);
  },

  async getContent({ state, commit}, id) {
    let res = await this.$axios.get(`/contents?customerId=${id}`);
    commit('initContent', res.data);
  },

  async getMaintenance({ state, commit}, id) {
    let res = await this.$axios.get(`/maintenances?customerId=${id}`);
    commit('initMaintenance', res.data);
  },

  async getPersonalType({ state, commit}, params) {
    let res = await this.$axios.get(`/customers?typeCustomer=personal`);
    commit('init', res.data);
  },

  async getCompanyType({ state, commit}, params) {
    let res = await this.$axios.get(`/customers?typeCustomer=company`);
    commit('init', res.data);
  },

  async getFriendlyType({ state, commit}, params) {
    let res = await this.$axios.get(`/customers?typeCustomer=friendly`);
    commit('init', res.data);
  },
}
