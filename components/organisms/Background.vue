<template>
  <v-expansion-panel>
    <v-expansion-panel-header>背景</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-textarea messages="背景" auto-grow dense class="custom-class" />
            <v-textarea
              v-model="feature"
              messages="人格的特徴"
              auto-grow
              dense
              class="custom-class"
            />
            <v-textarea
              v-model="feature"
              messages="尊ぶもの"
              auto-grow
              dense
              class="custom-class"
            />
            <v-textarea
              v-model="feature"
              messages="関わり深いもの"
              auto-grow
              dense
              class="custom-class"
            />
            <v-textarea
              v-model="feature"
              messages="弱味"
              auto-grow
              dense
              class="custom-class"
            />
          </v-col>
        </v-row>
      </v-card>
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
