<template>
  <div>
    <AppBar @addCharacter="addCharacter" />
    <!-- <CharacterList :list.sync="chars" /> -->
    <CharacterList
      :list.sync="characters"
      @showCharacter="showCharacter"
      @editCharacter="editCharacter"
    />
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import AppBar from '~/components/organisms/AppBar.vue'
import CharacterList from '~/components/organisms/CharacterList.vue'

export default {
  components: {
    AppBar,
    CharacterList,
  },
  data() {
    return {}
  },
  computed: {
    isXs() {
      console.log(this.$vuetify.breakpoint.name === 'xs')
      return this.$vuetify.breakpoint.name === 'xs'
    },
    userUid() {
      return this.$store.state.auth.userUid
    },
    characters() {
      return this.$store.state.characters.characters
    },
  },
  watch: {
    userUid(val) {
      const db = this.$firebase.default.firestore()
      if (val) {
        const users = db.collection('user')
        const docRef = users.doc(val)
        console.log(docRef.id)
        docRef
          .get()
          .then((doc) => {
            const data = doc.data()
            const chars = data.chars
            if (chars) {
              this.$store.commit('characters/setCharacters', chars)
            } else {
              this.$store.commit('characters/setCharacters', [])
            }
          })
          .catch((e) => {
            // TODO エラー処理
            alert(e)
          })
      } else {
        this.$store.commit('characters/setCharacters', [])
      }
    },
  },
  mounted() {
    // 認証状態のフックを設定。状態が変わったら再度読み込む。
    this.$store.dispatch('auth/onAuth')
  },
  methods: {
    addCharacter() {
      const id = uuidv4()
      const url = `/${this.userUid}/${id}/character?mode=create`
      this.$router.push(url)
    },
    showCharacter(character) {
      const url = `/${this.userUid}/${character.id}/character?mode=show`
      this.$router.push(url)
    },
    editCharacter(character) {
      const url = `/${this.userUid}/${character.id}/character?mode=edit`
      this.$router.push(url)
    },
  },
}
</script>
