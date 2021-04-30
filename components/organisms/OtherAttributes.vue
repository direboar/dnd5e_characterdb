<template>
  <v-expansion-panel>
    <v-expansion-panel-header>視界・習熟・脆弱性等</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="feature"
              messages="視界・習熟・脆弱性等"
              auto-grow
              dense
              class="custom-class"
            />
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
