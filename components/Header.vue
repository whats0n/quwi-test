<template>
  <div class="header">
    <Button
      class="header__logout"
      @click.prevent="handleLogout"
    >
      Logout
    </Button>
  </div>
</template>

<script>
import Button from '~/components/Button'
import logout from '~/plugins/logout'
import config from '~/plugins/config'

export default {
  name: 'Header',
  components: {
    Button
  },
  methods: {
    handleLogout() {
      config.checkAuthorization(logout)
    }
  }
}
</script>

<style lang="sass">
  
.header 
  padding: 16px 20px
  background: #f1f1f1
  &:after
    content: ''
    display: block
    clear: both
  &__logout
    float: right

</style>
