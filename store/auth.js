// @see https://zenn.dev/grinch1252/articles/99c3010e235609
export const state = () => ({
  userUid: null,
  loggedIn: false,
})

export const getters = {
  // allPrefix: (state) => {
  //   return state.resources.map((resource) => {
  //     return resource.prefix
  //   })
  // },
}

export const mutations = {
  loginStatusChange(state, status) {
    // 認証状態を双方向に変化
    state.loggedIn = status
  },
  setUserUid(state, userUid) {
    // user_uidの取得
    state.userUid = userUid
  },
}

export const actions = {
  login() {
    // const provider = new this.$firebase.auth.TwitterAuthProvider()
    // this.$firebase.auth().languageCode = 'jp'
    // this.$firebase.auth().signInWithRedirect(provider)
    const provider = new this.$firebase.auth.GoogleAuthProvider()
    this.$firebase.auth().languageCode = 'jp'
    this.$firebase.auth().signInWithRedirect(provider)
  },
  logout({ commit }) {
    this.$firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUserUid', null)
        commit('loginStatusChange', false)
      })
  },
  onAuth({ commit }) {
    this.$firebase.auth().onAuthStateChanged((user) => {
      user = user || {}
      commit('setUserUid', user.uid)
      commit('loginStatusChange', !!user.uid)
    })
  },
}
