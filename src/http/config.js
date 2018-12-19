// axios 配置
export default {
  method: 'get',
  // 基础url前缀
  baseURL: 'https://easy-mock.com/mock/5ad75e9f41d4d65f0e935be4/example',
  // 请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 参数
  data: {},
  // 设置超时时间
  timeout: 10000,
  // 携带凭证
  withCredentials: false,
  // 返回数据类型
  responseType: 'json'
}