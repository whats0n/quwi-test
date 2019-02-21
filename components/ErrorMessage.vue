<template>
  <div
    v-if="message"
    class="error-message"
    v-html="message"
  />
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="sass">
.error-message
  padding: 12px
  border: 1px solid lighten(red, 40%)
  border-radius: 3px
  background: lighten(red, 45%)
  font-size: 14px
  line-height: 1.2
</style>
