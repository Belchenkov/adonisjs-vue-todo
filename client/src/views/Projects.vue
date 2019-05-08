<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects />
        </v-flex>
      <v-flex
            pl-4
            xs8
            v-if="currentProject"
      >
        <Tasks />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects';
import Tasks from '@/components/Tasks';
import router from '../router';

import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    Tasks,
    Projects
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
      ...mapState('projects', [
        'currentProject'
      ]),
    ...mapGetters('authentication', [
          'isLoggedIn'
    ])
  }
}
</script>
