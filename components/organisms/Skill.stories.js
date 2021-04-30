import Skill from './Skill.vue'
// import Character from '~/domain/character'

export default {
  title: 'molecures/Skill',
}

export const NuxtWebsite = () => ({
  components: {
    Skill,
  },
  template: '<v-app><v-expansion-panels multiple v-model="panels"><Skill/></v-expansion-panels></v-app>',
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
