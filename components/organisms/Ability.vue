<template>
  <v-expansion-panel>
    <v-expansion-panel-header>能力値</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="avility"
              hide-default-footer
              class="table"
              dense
            >
              <template #[`item.start`]="props">
                <v-select
                  v-model="props.item.start"
                  :items="startAbilities"
                  dense
                ></v-select>
              </template>
              <template #[`item.race`]="props">
                <v-text-field v-model="props.item.race" dense />
              </template>
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
      startAbilities: [
        { text: '8(-1pt)', value: 8 },
        { text: '9(-1pt)', value: 9 },
        { text: '10(-1pt)', value: 10 },
        { text: '11(-1pt)', value: 11 },
        { text: '12(-1pt)', value: 12 },
        { text: '13(-1pt)', value: 13 },
        { text: '14(-1pt)', value: 14 },
        { text: '15(-1pt)', value: 15 },
        { text: '16(-1pt)', value: 16 },
      ],
      headers: [
        {
          text: '能力値',
          align: 'start',
          sortable: false,
          value: 'name',
          width: '15%',
        },
        { text: '現在値', value: 'value', sortable: false, width: '15%' },
        { text: '修正値', value: 'modifier', sortable: false, width: '15%' },
        { text: '初期値', value: 'start', sortable: false, width: '15%' },
        { text: '種族修正', value: 'race', sortable: false, width: '15%' },
        { text: '他修正', value: 'other', sortable: false, width: '15%' },
      ],
      avility: [
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
        {
          name: '筋力',
          value: 16,
          modifier: 3,
          start: 16,
          race: 1,
          other: 1,
        },
      ],
    }
  },
}
</script>
