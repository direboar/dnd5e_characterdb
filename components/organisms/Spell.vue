<template>
  <div>
    <!-- スマホ、PC共通 -->
    <v-row>
      <v-col>
        <v-simple-table dense>
          <thead>
            <tr>
              <th class="caption" width="75%">{{ this.level }}</th>
              <th class="caption" width="25%">系統</th>
              <th class="caption" width="5%">
                <v-icon v-if="!isXs" dense @click="addItem()">
                  mdi-file-plus
                </v-icon>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in spells" :key="index">
              <td>
                <v-textarea
                  v-model="item.name"
                  class="caption ma-n2"
                  dense
                  row-height="1"
                  auto-grow
                />
              </td>
              <td>
                <v-text-field v-model="item.type" class="caption" dense />
              </td>
              <td>
                <v-icon dense @click="deleteItem(item)"> mdi-delete </v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col cols="6" offset="4">
        <v-btn v-if="isXs" small color="#455A64" @click="addItem()"
          >呪文を追加</v-btn
        >
      </v-col>
    </v-row>
  </div>
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
  computed: {
    isXs() {
      console.log(this.$vuetify.breakpoint.name === 'xs')
      return this.$vuetify.breakpoint.name === 'xs'
    },
  },
  methods: {
    deleteItem(item) {
      const pos = this.spells.indexOf(item)
      this.spells.splice(pos, 1)
    },
    addItem() {
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
