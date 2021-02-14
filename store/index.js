export const state = () => ({
  user: {}
})

export const getters = {
  loggedInUser (state) {
    return state.user
  }
}

export const mutations = {
  setLoggedInUser (state, user) {
    state.user = { ...state.user, ...user }
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const user = await this.$axios.$get('/api/users/me')
    commit('setLoggedInUser', user)
  }
}
