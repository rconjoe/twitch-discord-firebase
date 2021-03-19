<template>
    <div>
        <button @click='getTwitchToken'>get token from code, call endpoints, write data</button>
    </div>
</template>

<script>
import { functions } from '../main'
export default {
    name: "twitchRedirectURI",

    data: () => ({
        accessCode: "",
    }),

    created() {
        this.accessCode = this.$route.query.code
        console.log(this.accessCode)
    },

    methods: {
        async getTwitchToken() {
            const fun = functions.httpsCallable('callableTwitchCodeToData')
            await fun({ token: this.accessCode }).then(resp => {
                console.log(resp)
            })
        }
    }

}
</script>

<style>

</style>