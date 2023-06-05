<template>
  <!-- <v-app-bar> -->
  <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-btn v-if="userUid == null" dark @click.native="login()">
      login<v-icon right dark>fab fa-twitter-square</v-icon>
    </v-btn>
    <v-btn v-if="userUid != null" dark @click.native="logout()">
      logout<v-icon right dark>fab fas fa-sign-out-alt</v-icon>
    </v-btn>
    <v-menu offset-y>
      <template #activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> メニュー </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>キャラクター一覧</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title @click="addCharacter()"
            >キャラクター作成</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
  <!-- </v-app-bar> -->
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: {},
  computed: {
    userUid() {
      return this.$store.state.auth.userUid
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login')
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
    addCharacter() {
      console.log('addCharacter')
      this.$emit('addCharacter', null)
    },
  },
}
</script>
