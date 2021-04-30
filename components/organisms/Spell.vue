<template>
  <v-card>
    <!-- <v-row>
      <v-col cols="12"> -->
    <v-data-table :headers="headers" :items="spells" hide-default-footer dense>
      <template #[`header.action`]>
        <v-icon small @click="addSpell()"> mdi-file-plus </v-icon>
      </template>
      <template #[`item.name`]="props">
        <v-text-field v-model="props.item.name" class="caption" dense />
      </template>
      <template #[`item.type`]="props">
        <v-text-field v-model="props.item.type" class="caption" dense />
      </template>
      <!-- <template v-slot:[`item.memo`]="props">
            <v-textarea
              v-model="props.item.memo"
              auto-grow
              row-height="1"
              dense
            />
          </template> -->
      <template #[`item.action`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
    <!-- </v-col>
    </v-row> -->
  </v-card>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: {
    level: {
      type: String,
      default: 'CANTRIP',
    },
  },
  data() {
    return {
      headers: [
        { text: this.level, value: 'name', sortable: false, width: '75%' },
        { text: '系統', value: 'type', sortable: false, width: '20%' },
        { text: '', value: 'action', sortable: false, width: '5%' },
      ],
      spells: [
        {
          name: 'ブーミング・ブレード',
          level: '0',
          type: '力術',
          memo: 'ああああ',
        },
        {
          name: 'ブーミング・ブレード',
          level: '0',
          type: '力術',
          memo: 'ああああ',
        },
      ],
    }
  },
  methods: {
    deleteItem(item) {
      const pos = this.spells.indexOf(item)
      this.spells.splice(pos, 1)
    },
    addSpell() {
      this.spells.push({
        name: '',
        level: this.level,
        type: '',
        memo: '',
      })
    },
  },
}
</script>
