import axios from 'axios'
import store from '@/store'

const request = axios.create({})

/**
 * 拦截器配置
 * https://axios-http.com/docs/interceptors
 */

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    const { user } = store.state
    if (user && user.access_token) {
      if (config.headers) {
        config.headers.Authorization = user.access_token as string
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
