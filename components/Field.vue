<template>
  <div class="field">
    <div
      v-if="label"
      class="field__label"
    >
      {{ label }}
    </div>
    <div class="field__container">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="sass">
.field
  &__label
    font-size: 16px
    font-weight: 500px
    &:not(:last-child)
      margin-bottom: 8px
</style>
