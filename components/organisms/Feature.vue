<template>
  <v-expansion-panel>
    <v-expansion-panel-header>特徴・特性</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-textarea
        v-model="feature"
        background-color="#424242"
        messages="特徴・特性"
        auto-grow
        dense
        class="detail"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss">
// .v-textarea textarea {
//   line-height: 70px !important;
// }
</style>

<script>
export default {
  data() {
    return {
      feature: '',
    }
  },
  methods: {
    rows(text) {
      return Math.max(10, text.split(/\n/).length)
    },
  },
}
</script>
