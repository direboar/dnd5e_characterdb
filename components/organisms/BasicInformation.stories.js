import BasicInformation from './BasicInformation.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/BasicInformation',
}

export const NuxtWebsite = () => ({
  components: {
    BasicInformation,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><BasicInformation :url="url"/></v-expansion-panels></v-app>',
  data() {
    return {
      panels : [0],
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
