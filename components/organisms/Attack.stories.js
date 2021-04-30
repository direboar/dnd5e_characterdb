import Attack from './Attack.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Attack',
}

export const NuxtWebsite = () => ({
  components: {
    Attack,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Attack/></v-expansion-panels></v-app>',
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
