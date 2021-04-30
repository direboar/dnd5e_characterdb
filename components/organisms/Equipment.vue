<template>
  <v-expansion-panel>
    <v-expansion-panel-header>装備</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card>
        <v-row>
          <v-col cols="12">
            <!--スマホ表示-->
            <v-data-iterator
              v-if="isXs"
              :items="equipments"
              item-key="name"
              :items-per-page="4"
              hide-default-footer
            >
              <template v-slot:default="{ items }">
                <v-row>
                  <v-col v-for="(item, index) in items" :key="index" cols="12">
                    <v-simple-table dense>
                      <thead>
                        <tr>
                          <th class="caption" width="50%">名前</th>
                          <th class="caption" width="25%">数量</th>
                          <th class="caption" width="25%">重量</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <v-text-field
                              class="caption"
                              v-model="item.name"
                              dense
                            />
                          </td>
                          <td>
                            <v-text-field
                              class="caption"
                              v-model="item.quantity"
                              dense
                            />
                          </td>
                          <td>
                            <v-text-field
                              class="caption"
                              v-model="item.weight"
                              dense
                            />
                          </td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                    <v-simple-table dense>
                      <thead>
                        <tr>
                          <th class="caption" width="900%">メモ</th>
                          <th class="caption" width="10%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <v-text-field
                              class="caption"
                              v-model="item.memo"
                              dense
                            />
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
                  <th class="caption" width="35%">装備名</th>
                  <th class="caption" width="5%">数量</th>
                  <th class="caption" width="10%">重量</th>
                  <th class="caption" width="40%">メモ</th>
                  <th class="caption" width="5%">
                    <v-icon small @click="addItem()"> mdi-file-plus </v-icon>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in equipments" :key="index">
                  <td>
                    <v-text-field class="caption" v-model="item.name" dense />
                  </td>
                  <td>
                    <v-text-field
                      class="caption"
                      v-model="item.quantity"
                      dense
                    />
                  </td>
                  <td>
                    <v-text-field class="caption" v-model="item.weight" dense />
                  </td>
                  <td>
                    <!-- <v-text-field class="caption" v-model="item.memo" dense /> -->
                    <v-textarea
                      class="caption"
                      v-model="item.memo"
                      dense
                      row-height="1"
                      auto-grow
                    />
                  </td>
                  <td>
                    <v-icon small @click="deleteItem(item)">
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <!-- <v-data-table
              :headers="headers"
              :items="equipments"
              hide-default-footer
              items-per-page="99"
            >
              <template v-slot:[`header.action`]>
                <v-icon small @click="addItem()"> mdi-file-plus </v-icon>
              </template>
              <template v-slot:[`item.name`]="props">
                <v-text-field v-model="props.item.name" dense />
              </template>
              <template v-slot:[`item.quantity`]="props">
                <v-text-field v-model="props.item.quantity" dense />
              </template>
              <template v-slot:[`item.weight`]="props">
                <v-text-field
                  v-model="props.item.weight"
                  messages="ポンド"
                  dense
                />
              </template>
              <template v-slot:[`item.memo`]="props">
                <v-text-field v-model="props.item.memo" dense />
              </template>
              <template v-slot:[`item.action`]="{ item }">
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
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
      headers: [
        {
          text: '装備名',
          value: 'name',
          sortable: false,
          width: '25%',
        },
        { text: '数量', value: 'quantity', sortable: false, width: '10%' },
        {
          text: '重量',
          value: 'weight',
          sortable: false,
          width: '10%',
        },
        { text: 'メモ', value: 'memo', sortable: false, width: '45%' },
        { text: '', value: 'action', sortable: false, width: '5%' },
      ],
      equipments: [
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
        },
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
        },
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
        },
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
        },
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
        },
        {
          name: 'ショートソード ',
          quantity: 1,
          weight: 1,
          memo: 'ファミリア：10gp',
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
      const pos = this.equipments.indexOf(item)
      this.equipments.splice(pos, 1)
    },
    addItem() {
      this.equipments.push({
        name: '',
        quantity: 0,
        weight: 0,
        memo: '',
      })
    },
  },
}
</script>
