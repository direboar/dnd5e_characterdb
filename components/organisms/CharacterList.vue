<template>
  <v-list dense subheader>
    <v-list-item v-for="(item, i) in list" :key="i">
      <v-list-item-avatar>
        <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
        <v-list-item-subtitle
          >クラス: {{ item.class }} 種族: {{ item.race }}</v-list-item-subtitle
        >
      </v-list-item-content>
      <v-list-item-action>
        <v-tooltip top>
          <v-btn
            slot="activator"
            icon
            ripple
            :disabled="!isEditable(item)"
            @click="editCharacter(item)"
          >
            <v-icon color="green lighten-1">edit</v-icon>
          </v-btn>
          <span>編集します。</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn slot="activator" icon ripple @click="showCharacter(item)">
            <v-icon color="green lighten-1">zoom_in</v-icon>
          </v-btn>
          <span>参照します。</span>
        </v-tooltip>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [
        { name: 'あああ', class: 'ファイター', race: '人間' },
        { name: 'あああ', class: 'ファイター', race: '人間' },
        { name: 'あああ', class: 'ファイター', race: '人間' },
      ],
    },
  },
  methods: {
    isEditable(item) {
      return true
    },
    showCharacter(character) {
      this.$emit('showCharacter', character)
    },
    editCharacter(character) {
      this.$emit('editCharacter', character)
    },
  },
}
</script>

<style lang="scss" scoped></style>
