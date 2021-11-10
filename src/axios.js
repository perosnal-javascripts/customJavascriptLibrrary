export function axios({ method, url, params, data }) {
  // 转换method大小写
  method = method.toUpperCase()
  return new Promise((resolve, reject) => {
    // 四步骤
    // 1、创建对象
    const xhr = new XMLHttpRequest()
    // 2、初始化
    // 处理params对象 a=100&b=200
    let str = ''
    for (let k in params) {
      str += `${k}=${params[k]}&`
    }

    str = str.slice(0, -1)
    xhr.open(method, url + '?' + str)
    // 3、发送
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      // Content-type mime 类型设置
      xhr.setRequestHeader('Content-type', 'application/json')
      // 设置请求体
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }
    // 设置响应结果的类型为JSON
    xhr.responseType = 'json'
    // 4、处理结果
    xhr.onreadystatechange = function () {
      //
      if (xhr.readyState === 4) {
        // 判断响应状态码 2xx
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功状态
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response
          })
        } else {
          reject(new Error('请求失败，失败的状态码为' + xhr.status))
        }
      }
    }
  })
}

axios.get = function (url, options) {
  // 发送ajax请求 get
  let config = Object.assign(options, { method: 'get', url: url })
  return axios(config)
}

axios.post = function (url, options) {
  // 发送ajax请求 post
  let config = Object.assign(options, { method: 'post', url: url })
  return axios(config)
}

axios.put = function (url, options) {
  // 发送ajax请求 put
  let config = Object.assign(options, { method: 'put', url: url })
  return axios(config)
}

axios.delete = function (url, options) {
  // 发送ajax请求 delete
  let config = Object.assign(options, { method: 'delete', url: url })
  return axios(config)
}
