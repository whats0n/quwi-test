<template>
  <input
    class="input"
    :type="type"
    :value="value"
    @input="handleInput"
    v-on="$listeners"
  >
</template>

<script>
export default {
  name: 'Input',
  model: {
    event: 'modelChange',
    prop: 'value'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(event) {
      this.$emit('modelChange', event.target.value)
      this.$emit('input', event)
    }
  }
}
</script>

<style lang="sass">
.input
  outline: none
  padding: 0 15px
  border: 1px solid #333
  border-radius: 3px
  width: 100%
  height: 40px
  line-height: normal
  transition: border-color 0.25s, box-shadow 0.25s
  &:focus
    box-shadow: 0 0 2px 2px rgba(#333, 0.1)
  &.is-error
    border-color: red
</style>
