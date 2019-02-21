<template>
  <div>
    <slot :data="fetchedData" :update="updateData" />
  </div>
</template>

<script>
import HTTP from '~/plugins/http'

export default {
  name: 'WithData',
  components: {},
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    fetchedData: null
  }),
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      HTTP.get(this.url).then(({ data }) => {
        this.fetchedData = data
      })
    },
    updateData(data) {
      this.fetchedData = data
    }
  }
}
</script>
