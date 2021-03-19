<template>
    <div>
        <button @click='twitchRedir'>signup with twitch</button>
    </div>
</template>

<script>
export default {
    name: 'TwitchButton',

    data: () => ({

    }),

    methods: {
        twitchRedir() {
            window.location = 'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=8dr1mhpi7t8gf0vhjgjjv6d0lhn152&redirect_uri=http://localhost:8080/twitch&scope=viewing_activity_read+openid&state=c3ab8aa609ea11e793ae92361f002671&claims={"id_token":{"email_verified":null}}'
        }
    }
}
</script>

<style>

</style>