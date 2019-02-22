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
    urlGet: {
      type: String,
      required: true
    },
    urlUpdate: {
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
      HTTP.get(this.urlGet).then(({ data }) => {
        this.fetchedData = data
      })
    },
    updateData(name) {
      HTTP.post(this.urlUpdate, {
        name
      }).then(({ data }) => {
        this.fetchedData = data
      })
    }
  }
}
</script>
