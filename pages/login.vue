<template>
  <form
    action="POST"
    class="form"
    @submit.prevent="handleSubmit"
  >
    <div class="form__title">
      Login
    </div>
    <Field
      label="Email:"
      class="form__field"
    >
      <input
        v-model="email.value"
        type="text"
        placeholder="Enter your e-mail address"
        class="input"
        :class="{ 'is-error': !email.valid }"
        @focus="handleFocus(email.name)"
        @blur="handleBlur(email.name)"
      >
    </Field>
    <Field
      label="Password:"
      class="form__field"
    >
      <input
        v-model="password.value"
        type="password"
        placeholder="Enter your password"
        class="input"
        :class="{ 'is-error': !password.valid }"
        @focus="handleFocus(password.name)"
        @blur="handleBlur(password.name)"
      >
    </Field>
    <ErrorMessage
      class="form__error-message"
      :message="errorMessage"
    />
    <button
      type="submit"
      class="btn"
    >
      Submit
    </button>
  </form>
</template>

<script>
import HTTP from '~/plugins/http'
import isEmailValid from '~/plugins/isEmailValid'
import isPasswordValid from '~/plugins/isPasswordValid'
import Field from '~/components/Field'
import ErrorMessage from '~/components/ErrorMessage'

export default {
  components: {
    Field,
    ErrorMessage
  },
  data: () => ({
    errorMessage: null,
    email: {
      valid: true,
      value: '',
      name: 'email'
    },
    password: {
      valid: true,
      value: '',
      name: 'password'
    }
  }),
  methods: {
    handleFocus(field) {
      this[field].valid = true
    },
    handleBlur(field) {
      this.handleValidation(field)
      this.setClientErrorMessage()
    },
    handleValidation(field) {
      if (field === this.email.name) {
        this.email.valid = isEmailValid(this.email.value)
      } else if (field === this.password.name) {
        this.password.valid = isPasswordValid(this.password.value)
      }
    },
    handleSubmit() {
      this.handleValidation(this.email.name)
      this.handleValidation(this.password.name)
      this.setClientErrorMessage()

      if (!this.email.valid || !this.password.valid) return

      HTTP.post('auth/login', {
        email: this.email.value,
        password: this.password.value
      })
        .then(({ data }) => {
          window.location.href = window.location.origin
        })
        .catch(({ response }) => {
          if (response && response.data && response.data.first_errors) {
            this.setServerErrorMessage(response.data.first_errors)
          } else {
            this.errorMessage = 'Something went wrong'
          }
        })
    },
    setClientErrorMessage() {
      this.errorMessage =
        !this.email.valid && !this.password.valid
          ? 'Wrong e-mail and password fields.'
          : !this.email.valid
            ? 'Wrong e-mail field.'
            : !this.password.valid
              ? 'Wrong password field.'
              : null
    },
    setServerErrorMessage(errors) {
      let message = ''
      for (const key in errors) {
        const fieldMessage = errors[key]
        this[key].valid = false
        message += message.length ? `<br>${fieldMessage}` : fieldMessage
      }
      this.errorMessage = message
    }
  }
}
</script>

<style lang="sass">
body 
  font-family: Roboto, sans-serif
body
  *
    font-family: inherit

.form 
  padding: 40px 20px
  margin: 0 auto
  max-width: 420px
  &__title
    font-size: 32px
    font-weight: 700
    &:not(:last-child)
      margin-bottom: 32px
  &__field
    &:not(:last-child)
      margin-bottom: 24px
  &__error-message
    &:not(:last-child)
      margin-bottom: 20px


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

.btn
  padding: 12px 24px
  border: none
  border-radius: 3px
  background: #d9d9d9
  cursor: pointer
  &:active
    background: darken(#d9d9d9, 10%)

</style>