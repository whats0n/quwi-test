<template>
  <button class="btn">
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
  padding: 12px 24px
  border: none
  border-radius: 3px
  background: #d9d9d9
  cursor: pointer
  &:active
    background: darken(#d9d9d9, 10%)
</style>
