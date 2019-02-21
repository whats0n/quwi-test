<template>
  <div class="container">
    <div class="projects">
      <div class="project">
        {{ projects }}
      </div>
    </div>
  </div>
</template>

<script>
import HTTP from '~/plugins/http'

export default {
  data: () => ({
    projects: null
  }),
  created() {
    HTTP.get('projects-manage/index').then(({ data }) => {
      this.projects = data
    })
  }
}
</script>

<style>
</style>
