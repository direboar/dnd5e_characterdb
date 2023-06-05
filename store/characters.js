// @see https://zenn.dev/grinch1252/articles/99c3010e235609
export const state = () => ({
  characters: [],
})

export const getters = {
  // allPrefix: (state) => {
  //   return state.resources.map((resource) => {
  //     return resource.prefix
  //   })
  // },
}

export const mutations = {
  setCharacters(state, characters) {
    state.characters = characters
  },
  addCharacter(state, character) {
    state.characters.push(character)
  },
}

export const actions = {
  // login() {
  //   const provider = new this.$firebase.auth.TwitterAuthProvider()
  //   this.$firebase.auth().languageCode = 'jp'
  //   this.$firebase.auth().signInWithRedirect(provider)
  // },
}
