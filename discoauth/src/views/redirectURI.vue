<template>
    <div>
        <button @click='getDiscordToken'>get token from code</button>
    </div>
</template>

<script>
import { functions } from '../main'

export default {
    name: "redirectURI",

    data: () => ({
        accessCode: "",
    }),

    created() {
        this.accessCode = this.$route.query.code
        console.log(this.accessCode)
    },

    methods: {
        async getDiscordToken() {
            const fun = functions.httpsCallable('discordCodeToToken')
            await fun({ code: this.accessCode }).then(resp => {
                console.log(resp)
            })
        }
    }
}
</script>

<style>

</style>