<template>
  <v-expansion-panel>
    <v-expansion-panel-header>能力値</v-expansion-panel-header>
    <v-expansion-panel-content>
      <!--スマホ表示-->
      <v-data-iterator
        v-if="isXs"
        :items="avility"
        item-key="name"
        :items-per-page="6"
        hide-default-footer
      >
        <template #default="{ items }">
          <v-row>
            <v-col v-for="(item, index) in items" :key="index" cols="12">
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th width="50%" class="caption">能力値</th>
                    <th width="25%" class="caption">現在値</th>
                    <th width="25%" class="caption">修正値</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="caption">
                      {{ item.name }}
                    </td>
                    <td class="caption">
                      {{ item.value }}
                    </td>
                    <td class="caption">
                      {{ item.modifier }}
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th width="50%">初期値</th>
                    <th width="25%">種族修正</th>
                    <th width="25%">他修正</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-select
                        v-model="item.start"
                        :items="startAbilities"
                        dense
                        class="caption"
                      ></v-select>
                    </td>
                    <td>
                      <v-text-field v-model="item.race" dense class="caption" />
                    </td>
                    <td>
                      <v-text-field
                        v-model="item.other"
                        dense
                        class="caption"
                      />
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>

      <!-- スマホ以外 -->
      <v-simple-table v-if="!isXs" dense>
        <thead>
          <tr>
            <th width="15%">能力値</th>
            <th width="10%">現在値</th>
            <th width="10%">修正値</th>
            <th width="25%">初期値</th>
            <th width="15%">種族修正</th>
            <th width="15%">他修正</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in avility" :key="index">
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
              <v-select
                v-model="item.start"
                :items="startAbilities"
                dense
              ></v-select>
            </td>
            <td>
              <v-text-field v-model="item.race" dense />
            </td>
            <td>
              <v-text-field v-model="item.other" dense />
            </td>
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
      </v-data-table> -->
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
  computed: {
    isXs() {
      console.log(this.$vuetify.breakpoint.name === 'xs')
      return this.$vuetify.breakpoint.name === 'xs'
    },
  },
}
</script>
