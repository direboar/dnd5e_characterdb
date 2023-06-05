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
                <v-text-field v-model="name" messages="キャラクター名" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="XP" messages="XP" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="LV" messages="LV" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="bonus" messages="習熟ボーナス" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <v-text-field v-model="AC" messages="AC" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="size" messages="サイズ" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="race" messages="種族" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="background" messages="背景" />
              </v-col>
              <v-col cols="2">
                <v-text-field v-model="alignment" messages="属性" />
              </v-col>
              <v-col cols="2">
                <!--TODO 計算用の明細を入力可能にする-->
                <v-text-field v-model="move" messages="移動速度（基本）" />
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
    basic: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      panels: [0],
      messages: 'aaa',
      //   selection: null,
    }
  },
  computed: {
    name: {
      get() {
        return this.basic.name
      },
      set(val) {
        this.update((basic) => (basic.name = val))
      },
    },
    XP: {
      get() {
        return this.basic.XP
      },
      set(val) {
        this.update((basic) => (basic.XP = val))
      },
    },
    LV: {
      get() {
        return this.basic.LV
      },
      set(val) {
        this.update((basic) => (basic.LV = val))
      },
    },
    bonus: {
      get() {
        return this.basic.bonus
      },
      set(val) {
        this.update((basic) => (basic.bonus = val))
      },
    },
    AC: {
      get() {
        return this.basic.AC
      },
      set(val) {
        this.update((basic) => (basic.AC = val))
      },
    },
    size: {
      get() {
        return this.basic.size
      },
      set(val) {
        this.update((basic) => (basic.size = val))
      },
    },
    race: {
      get() {
        return this.basic.race
      },
      set(val) {
        this.update((basic) => (basic.race = val))
      },
    },
    background: {
      get() {
        return this.basic.background
      },
      set(val) {
        this.update((basic) => (basic.background = val))
      },
    },
    alignment: {
      get() {
        return this.basic.alignment
      },
      set(val) {
        this.update((basic) => (basic.alignment = val))
      },
    },
    move: {
      get() {
        return this.basic.move
      },
      set(val) {
        this.update((basic) => (basic.move = val))
      },
    },
  },
  watch: {},
  methods: {
    update(callback) {
      const copy = Object.assign({}, this.basic)
      callback(copy)
      this.$emit('update', copy)
    },
    // val(val) {
    //   return val ? val : null
    // },
  },
}
</script>
