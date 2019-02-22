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
    updateData({ data, callback }) {
      HTTP.post(this.urlUpdate, data).then(({ data }) => {
        this.fetchedData = data
        callback && callback()
      })
    }
  }
}
</script>
