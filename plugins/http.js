import axios from 'axios'
import config from '~/plugins/config.js'

const { token, baseApiURL } = config

export default (() => {
  if (token) {
    return axios.create({
      baseURL: baseApiURL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  } else {
    return axios.create({
      baseURL: baseApiURL
    })
  }
})()
