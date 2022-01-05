import data1 from '@/static/lineChart1.js';
import data2 from '@/static/lineChart2.js';
import data3 from '@/static/lineChart3.js';

// initial state
const state = () => ({
  data: {}
})

// getters
const getters = {
    getData(state) {
        return state.data
    }
}
// mutations
const mutations = {
  setData(state, payload) {
      state.data = payload
 }}

// actions
const actions = {
  async fetchData({commit}, id) {
      console.log('id', id)
      let data;
      if(id == 1) {
          commit('setData', data1)
          data = data1;
      } else if(id == 2){
        commit('setData', data2)
        data = data2; 
      } else {
        commit('setData', data3)
        data = data3;
      }
      return Promise.resolve(data);
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
