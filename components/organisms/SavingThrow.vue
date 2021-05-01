<template>
  <v-expansion-panel>
    <v-expansion-panel-header>セーヴィングスロー</v-expansion-panel-header>
    <v-expansion-panel-content>
      <!-- スマホ,PCで同じレイアウト -->
      <v-simple-table dense>
        <thead>
          <tr>
            <th width="20%">種類</th>
            <th width="20%">セーヴ</th>
            <th width="20%">能力修正</th>
            <th width="20%">その他</th>
            <th width="20%">習熟ボーナス</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in saves" :key="index">
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.value }}
            </td>
            <td>
              {{ item.modifier }}
            </td>
            <td>
              <v-text-field v-model="item.other" dense />
            </td>
            <td>
              {{ item.profecies }}
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <!-- <v-data-table :headers="headers" :items="saves" hide-default-footer dense>
        <template #[`item.other`]="props">
          <v-text-field v-model="props.item.other" dense />
        </template>
      </v-data-table> -->
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: '種類',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '20%',
        },
        { text: 'セーヴ', value: 'value', sortable: false, width: '20%' },
        { text: '能力修正', value: 'modifier', sortable: false, width: '20%' },
        { text: 'その他', value: 'other', sortable: false, width: '20%' },
        {
          text: '習熟ボーナス',
          value: 'profecies',
          sortable: false,
          width: '20%',
        },
      ],
      saves: [
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
        {
          name: '筋力',
          value: 6,
          modifier: 1,
          other: 2,
          profecies: 3,
        },
      ],
    }
  },
}
</script>
