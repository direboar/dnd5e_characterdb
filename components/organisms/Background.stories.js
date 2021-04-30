import Background from './Background.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Background',
}

export const NuxtWebsite = () => ({
  components: {
    Background,
  },
  template:
    '<v-app><v-expansion-panels multiple v-model="panels"><Background/></v-expansion-panels></v-app>',
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
