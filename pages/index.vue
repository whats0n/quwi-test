<template>
  <div class="container">
    <div class="header">
      <Button
        class="header__logout"
        @click.prevent="handleLogout"
      >
        Logout
      </Button>
    </div>
    <div
      v-if="hadProjects"
      class="projects"
    >
      <WithData
        v-for="project in filteredProjects"
        :ref="project.id"
        :key="project.id"
        :url="project.url"
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
            @submit="handleProjectSubmit($event, project.id, update)"
          />
        </template>
      </WithData>
      {{ edited }}
    </div>
  </div>
</template>

<script>
import HTTP from '~/plugins/http'
import logout from '~/plugins/logout'
import config from '~/plugins/config'
import WithData from '~/components/WithData'
import Project from '~/components/Project'
import Button from '~/components/Button'

export default {
  components: {
    Project,
    WithData,
    Button
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
          item.url = `projects-manage/${item.id}`
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
  },
  methods: {
    handleProjectSubmit(name, id, update) {
      HTTP.post(`projects-manage/update?id=${id}`, {
        name
      }).then(({ data }) => {
        update(data)
      })
    },
    handleLogout: logout
  }
}
</script>

<style lang="sass">

.header 
  padding: 16px 20px
  background: #f1f1f1
  &:after
    content: ''
    display: block
    clear: both
  &__logout
    float: right

.projects
  padding: 20px
  margin: 0 auto
  max-width: 700px

</style>
