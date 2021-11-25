// initial state
const state = () => ({
  isLoggedIn: true,
  accountType: 0, //1 owner :: 2 : customer :: 0 : default: undefined
})

// getters
const getters = {
 getLogStatus(state) {
    return state.isLoggedIn = payload;
  },
 getAccountType(state) {
    return state.accountType
  },
}

// mutations
const mutations = {
  setLogStatus(state, payload) {
    state.isLoggedIn = payload;
  },
  setAccountType(state, payload) {
    state.accountType = payload;
  },
  toggleAuth(state, payload) {
      console.log('toggling', payload)
      state.isLoggedIn = payload;
  }
}

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
