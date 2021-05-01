<template>
  <!-- <v-expansion-panels v-model="panels"> -->
  <v-expansion-panel>
    <v-expansion-panel-header>基本情報</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="2">
            <v-img :src="url" />
          </v-col>
          <v-col cols="10">
            <v-row>
              <v-col cols="6">
                <v-text-field messages="キャラクター名" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="XP" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="LV" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="習熟ボーナス" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-text-field messages="AC" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="サイズ" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="種族" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="背景" />
              </v-col>
              <v-col cols="2">
                <v-text-field messages="属性" />
              </v-col>
              <v-col cols="2">
                <!--TODO 計算用の明細を入力可能にする-->
                <v-text-field messages="移動速度（基本）" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <!-- </v-expansion-panels> -->
</template>

<style lang="scss" scoped></style>

<script>
export default {
  components: {},
  props: {
    url: String,
  },
  data() {
    return {
      panels: [0],
      messages: 'aaa',
      //   selection: null,
    }
  },
  computed: {
    // characterList: {
    //   get() {
    //     return this.characters.filter((c) => c.join)
    //   },
    //   set(val) {
    //     this.$emit('updateCharacters', val)
    //   },
    // },
  },
  watch: {},
  methods: {},
}
</script>
