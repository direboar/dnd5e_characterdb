<template>
  <v-expansion-panel expand pa-0>
    <v-expansion-panel-header>攻撃</v-expansion-panel-header>
    <v-expansion-panel-content>
      <!-- <v-card>
        <v-row>
          <v-col cols="12"> -->
      <!--スマホ表示-->
      <v-data-iterator
        v-if="isXs"
        :items="attacks"
        item-key="name"
        :items-per-page="4"
        hide-default-footer
      >
        <template #default="{ items }">
          <v-row>
            <v-col v-for="(item, index) in items" :key="index" cols="12">
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th width="50%" class="caption">攻撃</th>
                    <th width="25%" class="caption">ボーナス</th>
                    <th width="25%" class="caption">ダメージ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-text-field v-model="item.name" dense class="caption" />
                    </td>
                    <td>
                      <v-text-field
                        v-model="item.bonus"
                        dense
                        class="caption"
                      />
                    </td>
                    <td>
                      <v-text-field
                        v-model="item.damage"
                        dense
                        class="caption"
                      />
                    </td>
                  </tr>
                </tbody>
              </v-simple-table>
              <v-simple-table dense>
                <thead>
                  <tr>
                    <th width="30%">タイプ</th>
                    <th width="65%">補足</th>
                    <th width="5%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <v-text-field v-model="item.type" dense class="caption" />
                    </td>
                    <td>
                      <v-text-field v-model="item.memo" dense class="caption" />
                    </td>
                    <td>
                      <v-icon small @click="deleteItem(item)">
                        mdi-delete
                      </v-icon>
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
            <th class="caption" width="25%">攻撃</th>
            <th class="caption" width="15%">ボーナス</th>
            <th class="caption" width="15%">ダメージ</th>
            <th class="caption" width="15%">タイプ</th>
            <th class="caption" width="25%">補足</th>
            <th class="caption" width="5%">
              <v-icon small @click="addItem()"> mdi-file-plus </v-icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in attacks" :key="index">
            <td>
              <v-text-field v-model="item.name" class="caption" dense />
            </td>
            <td>
              <v-text-field v-model="item.bonus" class="caption" dense />
            </td>
            <td>
              <v-text-field v-model="item.damage" class="caption" dense />
            </td>
            <td>
              <v-text-field v-model="item.type" class="caption" dense />
            </td>
            <td>
              <v-text-field v-model="item.memo" class="caption" dense />
            </td>
            <td>
              <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <!-- </v-col>
        </v-row>
      </v-card> -->
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
        { text: '攻撃', value: 'name', sortable: false, width: '25%' },
        { text: 'ボーナス', value: 'bonus', sortable: false, width: '15%' },
        {
          text: 'ダメージ',
          value: 'damage',
          sortable: false,
          width: '15%',
        },
        { text: 'タイプ', value: 'type', sortable: false, width: '15%' },
        {
          text: '補足',
          value: 'memo',
          sortable: false,
          width: '25%',
        },
        {
          text: '',
          value: 'action',
          sortable: false,
          width: '5%',
        },
      ],
      attacks: [
        {
          name: 'ショートソード',
          bonus: '+3',
          damage: '1d8+3',
          type: '刺突',
          memo: '20/60',
        },
        {
          name: 'ショートソード',
          bonus: '+3',
          damage: '1d8+3',
          type: '刺突',
          memo: '20/60',
        },
        {
          name: 'ショートソード',
          bonus: '+3',
          damage: '1d8+3',
          type: '刺突',
          memo: '20/60',
        },
        {
          name: 'ショートソード',
          bonus: '+3',
          damage: '1d8+3',
          type: '刺突',
          memo: '20/60',
        },
        {
          name: 'ショートソード',
          bonus: '+3',
          damage: '1d8+3',
          type: '刺突',
          memo: '20/60',
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
  methods: {
    deleteItem(item) {
      const pos = this.attacks.indexOf(item)
      this.attacks.splice(pos, 1)
    },
    addItem() {
      this.attacks.push({
        name: '',
        bonus: '',
        damage: '',
        type: '',
        memo: '',
      })
    },
  },
}
</script>
