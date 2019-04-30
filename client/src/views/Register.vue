<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs6 offset-xs3>
                <h1>Register</h1>
                <div class="register-form">
                    <v-text-field
                            label="Email"
                            type="email"
                            color="green"
                            :value="registerEmail"
                            prepend-icon="email"
                            @input="setRegisterEmail"
                    ></v-text-field>
                    <v-text-field
                            type="password"
                            label="Password"
                            color="green"
                            :value="registerPassword"
                            autocomplete="new-password"
                            prepend-icon="email"
                            @input="setRegisterPassword"
                    ></v-text-field>

                    <v-alert
                        type="error"
                        :value="registerError"
                    ></v-alert>

                    <v-btn
                            class="mt-3"
                            color="green"
                            dark
                            @click="register"
                    >
                        <v-icon left>account_circle</v-icon>
                        Register
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex';
    export default {
        computed: {
            ...mapState('authentication', [
                'registerEmail',
                'registerPassword'
            ])
        },
        methods: {
            ...mapMutations('authentication', [
                'setRegisterEmail',
                'setRegisterPassword'
            ]),
            ...mapActions('authentication', [
                'register'
            ])
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .register-form {
        width: 700px;
        margin: 20px auto;
        border: 1px solid #00b200;
        padding: 30px;
        background: #e7f1dd;
        box-shadow: 0 0 2px rgba(0, 0, 0, .5);
        border-radius: 4px;
    }
</style>