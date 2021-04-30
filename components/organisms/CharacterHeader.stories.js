import CharacterHeader from './CharacterHeader.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/CharacterHeader',
}

export const NuxtWebsite = () => ({
  components: {
    CharacterHeader,
  },
  template: '<v-app><CharacterHeader :url="url"/></v-app>',
  data() {
    return {
      url:
        'http://wizardofthetavern.com/wp-content/uploads/2019/10/kensei-monk.jpg',
    }
  },
  // methods: {
  //   character: new Character('red', 'RED'),
  //   // editNewItem: action('editNewItem'),
  //   // reload: action('reload'),
  // },
})
