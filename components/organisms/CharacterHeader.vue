<template>
  <v-card :color="color" hover rounded>
    <v-container class="pa-0" fluid fill-height>
      <v-expansion-panels multiple v-model="panels">
        <v-row no-gutters>
          <v-col cols="12">
            <basic-information :url="url" />
          </v-col>
          <v-col lg="6" cols="12">
            <ability />
          </v-col>
          <v-col lg="6" cols="12">
            <saving-throw />
          </v-col>
          <v-col lg="6" cols="12">
            <skill />
          </v-col>
          <v-col lg="6" cols="12">
            <attack />
          </v-col>
          <v-col lg="6" cols="12">
            <equipment />
          </v-col>
          <v-col lg="6" cols="12">
            <other-attributes />
          </v-col>
          <v-col lg="6" cols="12">
            <background />
          </v-col>
          <v-col lg="6" cols="12">
            <feature />
          </v-col>
          <v-col lg="6" cols="12" />
          <v-col cols="12">
            <spells />
          </v-col>
        </v-row>
      </v-expansion-panels>
    </v-container>
  </v-card>
</template>

<style lang="scss" scoped></style>

<script>
import BasicInformation from '~/components/organisms/BasicInformation.vue'
import Ability from '~/components/organisms/Ability.vue'
import SavingThrow from '~/components/organisms/SavingThrow.vue'
import Skill from '~/components/organisms/Skill.vue'
import Attack from '~/components/organisms/Attack.vue'
import Equipment from '~/components/organisms/Equipment.vue'
import OtherAttributes from '~/components/organisms/OtherAttributes.vue'
import Feature from '~/components/organisms/Feature.vue'
import Background from '~/components/organisms/Background.vue'
import Spells from '~/components/organisms/Spells.vue'

export default {
  components: {
    BasicInformation,
    Ability,
    SavingThrow,
    Skill,
    Attack,
    Equipment,
    OtherAttributes,
    Feature,
    Background,
    Spells,
  },
  props: {
    url: String,
  },
  data() {
    return {
      messages: 'aaa',
      panels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      //   selection: null,
    }
  },
  computed: {},
  watch: {},
  methods: {},
}
</script>
