<template>
  <div>
    <v-btn @click="save">保存</v-btn>
    <v-btn>aaa</v-btn>
    <CharacterHeader :url="url" :character="character" @update="update" />
  </div>
</template>

<script>
import CharacterHeader from '~/components/organisms/CharacterHeader.vue'

export default {
  components: {
    CharacterHeader,
  },
  data() {
    return {
      url:
        'http://wizardofthetavern.com/wp-content/uploads/2019/10/kensei-monk.jpg',
      mode: 'edit',
      userid: this.$route.params.userid,
      characterid: this.$route.params.characterid,
      character: {
        basic: { name: '' },
      },
    }
  },
  computed: {
    editable() {
      return this.mode === 'edit' || this.mode === 'create'
    },
    // userUid() {
    //   return this.$store.state.auth.userUid
    // },
    characters() {
      return this.$store.state.characters.characters
    },
  },
  mounted() {
    // 1. setMode
    this.mode = this.$route.query.mode
    // 2. load data
    if (this.mode === 'create') {
      this.character = {
        id: this.characterid,
        basic: {},
      }
    } else {
      const db = this.$firebase.default.firestore()
      const users = db.collection(this.userid)
      const docRef = users.doc(this.characterid)
      docRef
        .get()
        .then((doc) => {
          const data = doc.data()
          this.character = data.data
        })
        .catch((e) => {
          // TODO エラー処理
          alert(e)
        })
    }
  },
  methods: {
    update(character) {
      this.character = character
    },
    save() {
      // 1. キャラクタヘッダに書き込み
      // store
      const db = this.$firebase.default.firestore()
      const users = db.collection('user')
      const character = {
        name: this.character.basic.name,
        class: 'ファイター',
        race: '人間',
        id: this.character.id,
      }
      this.$store.commit('characters/addCharacter', character)

      // firestoreに永続化
      // firebase TODO storeに移動
      users.doc(this.userid).set({
        chars: this.characters,
      })

      // 2.キャラクターの書き込み（firestoreに永続化）
      const characterCollection = db.collection(this.userid)
      characterCollection.doc(this.character.id).set({
        data: this.character,
      })
    },
  },
}
</script>
