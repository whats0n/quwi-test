<template>
  <div
    class="project"
    :class="{
      'is-active': isEdit
    }"
  >
    <div
      class="project__content"
      @click.prevent="handleClick"
    >
      <div class="project__icon">
        <img
          class="project__icon-img"
          :src="iconImg"
          :alt="iconAlt"
        >
      </div>
      <div class="project__title">
        {{ title }}
      </div>
      <div
        class="project__status"
        :class="{
          'is-active': status
        }"
      >
        {{ statusText }}
      </div>
      <ul class="project__schedule">
        <li class="project__schedule-item">
          <div class="project__schedule-label">
            time this week
          </div>
          <div class="project__schedule-value">
            {{ getFormattedTime(timeWeek) }}
          </div>
        </li>
        <li class="project__schedule-item">
          <div class="project__schedule-label">
            this month
          </div>
          <div class="project__schedule-value">
            {{ getFormattedTime(timeMonth) }}
          </div>
        </li>
        <li class="project__schedule-item">
          <div class="project__schedule-label">
            total
          </div>
          <div class="project__schedule-value">
            {{ getFormattedTime(timeTotal) }}
          </div>
        </li>
      </ul>
    </div>
    <div class="project__container">
      <form
        action="POST"
        class="project__form"
        @submit.prevent="handleSubmit"
      >
        <Field
          label="Name:"
          class="project__field"
        >
          <Input
            ref="inputName"
            v-model="newTitle"
            type="text"
            placeholder="Enter new name"
            class="input"
          />
        </Field>
        <Button
          type="submit"
          class="project__btn"
        >
          Submit
        </Button>
      </form>
    </div>
  </div>
</template>

<script>
import Field from '~/components/Field'
import Button from '~/components/Button'
import Input from '~/components/Input'

export default {
  name: 'Project',
  components: {
    Field,
    Button,
    Input
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    status: {
      type: [Number, Boolean],
      default: 0
    },
    timeWeek: {
      type: Number,
      default: 0
    },
    timeMonth: {
      type: Number,
      default: 0
    },
    timeTotal: {
      type: Number,
      default: 0
    }
  },
  data: vm => ({
    isEdit: false,
    newTitle: vm.title
  }),
  computed: {
    iconImg() {
      return this.icon ? this.icon : 'https://placehold.it/50/50'
    },
    iconAlt() {
      return `${this.title} Logo`
    },
    statusText() {
      return this.status ? 'Active' : 'Not active'
    }
  },
  watch: {
    title(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.isEdit = false
      }
    }
  },
  methods: {
    getFormattedTime(duration) {
      let seconds = parseInt((duration / 1000) % 60)
      let minutes = parseInt((duration / (1000 * 60)) % 60)
      let hours = parseInt((duration / (1000 * 60 * 60)) % 24)

      hours = hours < 10 ? '0' + hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      return hours + ':' + minutes + ':' + seconds
    },
    handleClick() {
      this.isEdit = true
      setTimeout(() => {
        this.$refs.inputName.$el.focus()
        this.$refs.inputName.$el.setSelectionRange(0, this.title.length)
      }, 100)
    },
    handleSubmit() {
      this.$emit('submit', this.newTitle)
    }
  }
}
</script>

<style lang="sass">

.project
	position: relative
	cursor: pointer
	&.is-active
		.project
			&__container
				opacity: 1
				visibility: visible
	&__container
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		padding: 20px
		opacity: 0
		visibility: hidden
		background: #fff
		transition: opacity 0.25s, visibility 0.25s
	&__content
		display: flex
		align-items: center
		justify-content: space-between
		padding: 20px
		background: #fff
		box-shadow: 0 0 2px 1px rgba(#000, 0.2)
	&__icon
		flex: 0 0 50px
		font-size: 0
		text-align: center
	&__icon-img
		max-width: 50px
	&__schedule
		flex: 0 0 180px
		padding: 0
		margin: 0
	&__schedule,
	&__schedule-item
		list-style-type: none
	&__schedule-item
		display: flex
		align-items: flex-start
		justify-content: space-between
	&__schedule-value,
	&__status,
	&__title
		font-weight: 700
	&__status
		color: red
		&.is-active
			color: green
	&__form
		display: flex
		align-items: flex-end
	&__field
		flex: 1 1 auto
	&__btn
		flex: 0 0 auto
		margin-left: 20px

</style>
