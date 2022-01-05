import Vue from 'vue'
import Vuex from 'vuex'
import lineChart from './modules/lineChart'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lineChart,
    auth
  }
})
