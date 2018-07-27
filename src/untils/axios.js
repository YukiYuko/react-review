import axios from 'axios'
import qs from 'qs'

// baseURL
const baseURL = 'https://easy-mock.com/mock/5a6fe597a52f145df7e8a38a/apis/';
// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // node环境的不同，对应不同的baseURL
  timeout: 300000, // 请求的超时时间
  //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
  // headers: {
  // "Content-Type": "application/x-www-form-urlencoded"
  // },
  withCredentials: true // 允许携带cookie
});

// 发送时
service.interceptors.request.use(config => {
  // 开始
  return config
}, err => {
  return Promise.reject(err)
});

// 响应时
service.interceptors.response.use(response => response, err => Promise.resolve(err.response));

// 检查状态码
function checkStatus(res) {
  // 结束
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
}


// 检查CODE值
function checkCode(res) {
  if (res.code === 0) {
    alert(res.msg);
    throw new Error(res.msg)
  }

  return res
}

export default {
  get(url, params) {
    if (!url) return;
    return service({
      method: 'get',
      url: url,
      params,
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  post(url, data) {
    if (!url) return;
    return axios({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  postFile(url, data) {
    if (!url) return;
    return axios({
      method: 'post',
      url: url,
      data
    }).then(checkStatus).then(checkCode)
  }
}