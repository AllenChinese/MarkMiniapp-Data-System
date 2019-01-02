import axios from 'axios'
import config from './config.js'
import qs from 'qs'

export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function (data) { }]
    })

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // Tip: 1 请求开启全屏 loading
        // Tip: 2
        // 带上 token , 可以结合 vuex 或者重 localStorage
        // if (store.getters.token) {
        //   config.headers['X-Token'] = getToken()
        // } else {
        //   // 重定向到登录页面
        // }
        // Tip: 3
        // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method.toLocaleLowerCase() === 'get'
          || config.method.toLocaleLowerCase() === 'post'
          || config.method.toLocaleLowerCase() === 'put'
          || config.method.toLocaleLowerCase() === 'delete') {

          config.data = qs.stringify(config.data)
        }
        return config
      },
      error => {// 错误处理
        // Tip: 4
        // 关闭loadding
        console.log('request:', error)
        // 1、判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          console.log('请求超时，处理方案')
        }
        //  2.需要重定向到错误页面
        const errorInfo = error.response
        if (errorInfo) {
          const errorStatus = errorInfo.status; // 404 403 500 ... 等
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error)
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data
        //  IE9 时 response.data 是 undefined

        if (response.data === undefined) {
          data = response.request.responseText
        } else {
          data = response.data
        }

        // 根据返回的 code 值来做不同的处理
        // switch (data.code) {
        //   case '':
        //     break;
        //   default:
        // }

        // 若不是正确的返回 code，且已经登录，就抛出错误
        // if (response.code !== 0) {
        //   let err = new Error(response.code)
        //   err.data = response.data
        //   err.response = response
        //   throw err
        // }

        return JSON.parse(data)
      },

      err => {
        if (err && err.response) {
          switch (err.response.data.code) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        }
        // 此处我使用的是 element UI 的提示组件
        // Message.error(`ERROR: ${err}`);
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    //请求处理
    instance(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}

