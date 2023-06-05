import AppBar from './AppBar.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/AppBar',
}

export const NuxtWebsite = () => ({
  components: {
    AppBar,
  },
  template: '<v-app><app-bar>',
  data() {
    return {}
  },
  // methods: {
  //   character: new Character('red', 'RED'),
  //   // editNewItem: action('editNewItem'),
  //   // reload: action('reload'),
  // },
})
