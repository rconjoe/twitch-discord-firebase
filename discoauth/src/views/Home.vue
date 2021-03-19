<template>
  <div>
    <TwitchButton />
    <Button />
  </div>
</template>

<script>
import Button from '../components/Button'
import TwitchButton from '../components/TwitchButton'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Button,
    TwitchButton
  }
}
</script>
