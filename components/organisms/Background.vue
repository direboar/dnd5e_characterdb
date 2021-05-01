<template>
  <v-expansion-panel>
    <v-expansion-panel-header>背景</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-textarea
        messages="背景"
        background-color="#424242"
        auto-grow
        dense
        class="custom-class"
      />
      <v-textarea
        background-color="#424242"
        messages="人格的特徴"
        auto-grow
        dense
        class="custom-class"
      />
      <v-textarea
        background-color="#424242"
        messages="尊ぶもの"
        auto-grow
        dense
        class="custom-class"
      />
      <v-textarea
        background-color="#424242"
        messages="関わり深いもの"
        auto-grow
        dense
        class="custom-class"
      />
      <v-textarea
        background-color="#424242"
        messages="弱味"
        auto-grow
        dense
        class="custom-class"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss">
.custom-class textarea {
  font-size: 13px;
  line-height: 14px !important;
}
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
}
</script>
