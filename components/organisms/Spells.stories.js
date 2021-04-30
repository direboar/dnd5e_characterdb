import Spell from './Spell.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Spell',
}

export const NuxtWebsite = () => ({
  components: {
    Spell,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Spell/></v-expansion-panels></v-app>',
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
