<template>
  <v-expansion-panel>
    <v-expansion-panel-header>技能</v-expansion-panel-header>
    <v-expansion-panel-content>
      <!-- スマホ・PCで共通 -->
      <v-simple-table dense>
        <thead>
          <tr>
            <th class="caption" width="5%">習熟</th>
            <th class="caption" width="50%">名前（能力値）</th>
            <th class="caption" width="15%">他修正</th>
            <th class="caption" width="30%">技能値（受動）</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in skills" :key="item.name">
            <td>
              <v-simple-checkbox v-model="item.profecy"></v-simple-checkbox>
            </td>
            <td class="caption">{{ item.name }}</td>
            <td>
              <v-text-field v-model="item.other" class="caption" dense />
            </td>
            <td class="caption">{{ item.value }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

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
      skills: [
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
  computed: {
    isXs() {
      console.log(this.$vuetify.breakpoint.name === 'xs')
      return this.$vuetify.breakpoint.name === 'xs'
    },
  },
}
</script>

<style lang="scss" scoped></style>
