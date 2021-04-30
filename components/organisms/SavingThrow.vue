<template>
  <v-expansion-panel>
    <v-expansion-panel-header>セーヴィングスロー</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="saves"
              hide-default-footer
              dense
            >
              <template #[`item.other`]="props">
                <v-text-field v-model="props.item.other" dense />
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
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
