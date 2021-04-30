<template>
  <CharacterHeader :url="url" />
</template>

<script>
import CharacterHeader from '~/components/organisms/CharacterHeader.vue'

export default {
  components: {
    CharacterHeader,
  },
  data() {
    return {
      url:
        'http://wizardofthetavern.com/wp-content/uploads/2019/10/kensei-monk.jpg',
      //   selection: null,
    }
  },
}
</script>
