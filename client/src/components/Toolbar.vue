<template>
    <v-toolbar
            color="green darken-1"
            dark
            class="elevation-11"
            fixed
    >
        <v-toolbar-title class="d-flex align-center mr-5">
            <img src="https://img.icons8.com/bubbles/50/000000/todo-list.png">
            <span class="logo">VUE ADONIS TODO</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat>
                <v-icon left>playlist_add_check</v-icon>
                Projects
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat v-if="!isLoggedIn" to="/register">
                <v-icon left>account_box</v-icon>
                Register
            </v-btn>
            <v-btn flat v-if="!isLoggedIn" to="/login">
                <v-icon left>fingerprint</v-icon>
                Login
            </v-btn>
            <v-btn flat v-if="isLoggedIn" @click="logout">
                <v-icon left>exit_to_app</v-icon>
                Logout
            </v-btn>
            <v-btn flat>
                <v-icon left>ondemand_video</v-icon>
                How this was Made
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from 'vuex';

    export default {
        computed: {
            ...mapGetters('authentication', [
                'isLoggedIn'
            ])
        },
        methods: {
            ...mapMutations('authentication', [
                'setToken'
            ]),
            ...mapActions('authentication', [
                'logout'
            ])
        }
    }
</script>

<style scoped>
    .toolbar {
        margin-bottom: 100px;

    }
    .logo {
        font-family: 'Akronim', cursive;
        font-size: 2.2rem;
        margin-top: 10px;
        text-shadow: 0 0 3px #000;
    }

</style>