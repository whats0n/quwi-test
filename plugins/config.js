export default {
  baseApiURL: 'https://api.quwi.com/v2/',
  token: (() => {
    if (process.client) {
      return window.localStorage.getItem('token')
    } else {
      return null
    }
  })(),
  checkAuthorization(callback) {
    if (process.client) {
      if (window.localStorage.getItem('token')) {
        callback()
      } else {
        window.location.href = '/login'
      }
    }
  },
  isAuthorized(callback) {
    if (process.client) {
      if (window.localStorage.getItem('token')) {
        callback()
      }
    }
  }
}
