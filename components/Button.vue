<template>
  <button
    class="btn"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  data: () => ({})
}
</script>

<style lang="sass">
.btn
  box-sizing: border-box
  outline: none
  padding: 10px 24px
  border: none
  border-radius: 3px
  background: #d9d9d9
  font-size: 16px
  line-height: 20px
  cursor: pointer
  &:active
    background: darken(#d9d9d9, 10%)
</style>
