import Vue from 'vue'
import Vuex from 'vuex'
import { parseJson } from '@/utils/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: parseJson(window.localStorage.getItem('__admin__user')),
  },
  mutations: {
    setUser(state, payload) {
      const user = parseJson(payload)
      state.user = user
      window.localStorage.setItem('__admin__user', payload)
    },
  },
  actions: {},
  modules: {},
})
