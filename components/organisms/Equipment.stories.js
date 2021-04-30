import Equipment from './Equipment.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Equipment',
}

export const NuxtWebsite = () => ({
  components: {
    Equipment,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Equipment/></v-expansion-panels></v-app>',
  data() {
    return {
      panels : [0]
    }
  },
  // methods: {
  //   character: new Character('red', 'RED'),
  //   // editNewItem: action('editNewItem'),
  //   // reload: action('reload'),
  // },
})
