import axios from 'axios'
import config from '~/plugins/config.js'

export default axios.create({
  baseURL: config.baseApiURL
})
