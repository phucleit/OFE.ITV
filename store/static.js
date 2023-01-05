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
      let res = await this.$axios.get(`/static`);
      commit('init', res.data);
    },
  }
    