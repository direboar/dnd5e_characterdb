<template>
  <v-expansion-panel>
    <v-expansion-panel-header>視界・習熟・脆弱性等</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-textarea
        v-model="feature"
        background-color="#424242"
        messages="視界・習熟・脆弱性等"
        auto-grow
        dense
        class="detail"
      />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {}
  },
}
</script>
