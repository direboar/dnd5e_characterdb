<template>
  <v-expansion-panel>
    <v-expansion-panel-header>特徴・特性</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="feature"
              messages="特徴・特性"
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
  methods: {
    rows(text) {
      return Math.max(10, text.split(/\n/).length)
    },
  },
}
</script>
