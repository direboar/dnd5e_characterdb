import Ability from './Ability.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Ability',
}

export const NuxtWebsite = () => ({
  components: {
    Ability,
  },
  template:
    '<v-app><v-expansion-panels multiple v-model="panels"><Ability :url="url"/></v-expansion-panels></v-app>',
  data() {
    return {
      panels: [0],
    }
  },
  // methods: {
  //   character: new Character('red', 'RED'),
  //   // editNewItem: action('editNewItem'),
  //   // reload: action('reload'),
  // },
})
