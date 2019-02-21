export default () => {
  if (process.client) {
    window.localStorage.removeItem('token')
    window.location.reload()
  }
}
