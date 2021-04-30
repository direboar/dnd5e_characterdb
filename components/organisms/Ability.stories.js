import SavingThrow from './SavingThrow.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/SavingThrow',
}

export const NuxtWebsite = () => ({
  components: {
    SavingThrow,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><SavingThrow/></v-expansion-panels></v-app>',
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
