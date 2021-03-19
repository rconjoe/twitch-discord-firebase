<template>
  <div>
      <button @click="redir">connect to discord</button>
  </div>
</template>

<script>
export default {
    name: "Button",

    data: () => ({

    }),

    methods: {
        redir() {
            window.location = "https://discord.com/api/oauth2/authorize?response_type=code&client_id=821241880795676702&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fdiscord&prompt=consent"
        }
    }
}
</script>

<style>

</style>