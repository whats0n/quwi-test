<template>
  <div class="container">
    <Header />
    <div
      v-if="hadProjects"
      class="projects"
    >
      <WithData
        v-for="project in filteredProjects"
        :ref="project.id"
        :key="project.id"
        :url-get="project.urlGet"
        :url-update="project.urlUpdate"
      >
        <template
          v-if="data"
          slot-scope="{ data, update }"
        >
          <Project
            :id="data.project.id"
            :title="data.project.name"
            :icon="data.project.logo_url"
            :status="data.project.is_active"
            :time-week="data.project.spent_time_week"
            :time-month="data.project.spent_time_month"
            :time-total="data.project.spent_time_all"
            @submit="update"
          />
        </template>
      </WithData>
      {{ edited }}
    </div>
  </div>
</template>

<script>
import HTTP from '~/plugins/http'
import config from '~/plugins/config'
import WithData from '~/components/WithData'
import Project from '~/components/Project'
import Header from '~/components/Header'

export default {
  components: {
    Project,
    WithData,
    Header
  },
  data: () => ({
    projects: null,
    edited: null
  }),
  computed: {
    filteredProjects() {
      return (
        this.projects &&
        this.projects.map(item => {
          item.urlGet = `projects-manage/${item.id}`
          item.urlUpdate = `projects-manage/update?id=${item.id}`
          return item
        })
      )
    },
    hadProjects() {
      return this.projects && this.projects.length
    }
  },
  created() {
    config.checkAuthorization(() => {
      HTTP.get('projects-manage').then(({ data }) => {
        this.projects = data.projects
      })
    })
  }
}
</script>

<style lang="sass">

.projects
  padding: 20px
  margin: 0 auto
  max-width: 700px

</style>
