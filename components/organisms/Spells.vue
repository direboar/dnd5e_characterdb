<template>
  <v-expansion-panel>
    <v-expansion-panel-header>呪文</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col lg="4" ms="6" cols="12">
          <spell level="CANTRIP" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV1" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV2" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV3" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV4" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV5" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV6" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV7" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV8" />
        </v-col>
        <v-col md="4" ms="6" cols="12">
          <spell level="LV9" />
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped></style>

<script>
import Spell from '~/components/organisms/Spell.vue'

export default {
  components: {
    Spell,
  },
  data() {
    return {}
  },
  methods: {
    deleteItem(item) {
      const pos = this.spells.indexOf(item)
      this.spells.splice(pos, 1)
    },
  },
}
</script>
