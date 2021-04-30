import OtherAttributes from './OtherAttributes.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/OtherAttributes',
}

export const NuxtWebsite = () => ({
  components: {
    OtherAttributes,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><OtherAttributes/></v-expansion-panels></v-app>',
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
