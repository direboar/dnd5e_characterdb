import Feature from './Feature.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Feature',
}

export const NuxtWebsite = () => ({
  components: {
    Feature,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Feature/></v-expansion-panels></v-app>',
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
