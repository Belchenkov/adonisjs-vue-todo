<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects />
        </v-flex>
      <v-flex pl-4 xs8>
        <Panel title="Tasks"></Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects';
import router from '../router';

import { mapGetters } from 'vuex';

export default {
  components: {
    Projects
  },
  mounted() {
    if (!this.isLoggedIn) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', [
          'isLoggedIn'
    ])
  }
}
</script>
