<template>
  <v-expansion-panel>
    <v-expansion-panel-header>技能</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-simple-table>
              <thead>
                <tr>
                  <th width="5%">習熟</th>
                  <th width="32%">名前（能力値）</th>
                  <th width="32%">他修正</th>
                  <th width="32%">技能値（受動）</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in avility" :key="item.name">
                  <td>
                    <v-simple-checkbox
                      v-model="item.profecy"
                    ></v-simple-checkbox>
                  </td>
                  <td>{{ item.name }}</td>
                  <td>
                    <v-text-field v-model="item.other" dense />
                  </td>
                  <td>{{ item.value }}</td>
                </tr>
              </tbody>
            </v-simple-table>
            <!-- <v-data-table
              :headers="headers"
              :items="avility"
              hide-default-footer
              class="table"
              dense
            >
              <template v-slot:[`item.profecy`]="props">
                <v-simple-checkbox
                  v-model="props.item.profecy"
                ></v-simple-checkbox>
              </template>
              <template v-slot:[`item.other`]="props">
                <v-text-field v-model="props.item.other" dense />
              </template>
            </v-data-table> -->
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
        { text: '習熟', value: 'profecy', sortable: false, width: '5%' },
        {
          text: '名前（能力値）',
          value: 'name',
          sortable: false,
          width: '32%',
        },
        { text: '他修正', value: 'other', sortable: false, width: '32%' },
        {
          text: '技能値（受動）　',
          value: 'value',
          sortable: false,
          width: '32%',
        },
      ],
      avility: [
        {
          profecy: true,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: true,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
        {
          profecy: false,
          name: '威圧（魅力）',
          other: 1,
          value: '+3(13)',
        },
      ],
    }
  },
}
</script>
