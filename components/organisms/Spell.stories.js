import Spells from './Spells.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Spells',
}

export const NuxtWebsite = () => ({
  components: {
    Spells,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Spells/></v-expansion-panels></v-app>',
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
