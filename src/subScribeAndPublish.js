export const publishSub = {
  // 订阅的唯一Id
  id: 1,
  // 频道与回调的保存容器
  callbacks: {}
}

// 订阅消息
publishSub.subscribe = function (channel, callback) {
  // 创建唯一的编号
  let token = 'token_' + this.id++
  // 判断callback属性中是否存在该频道
  if (this.callbacks[channel]) {
    this.callbacks[channel][token] = callback
  } else {
    this.callbacks[channel] = {
      [token]: callback
    }
  }
  // 返回频道订阅的id
  return token
}

// 发布消息
publishSub.publish = function (channel, data) {
  // 获取当前频道中所有的回调
  if (this.callbacks[channel]) {
    Object.values(this.callbacks[channel]).forEach(callback => {
      // 执行回调
      callback(data)
    })
  } else {
  }
}

/* 取消订阅 */
/**
 * 取消消息订阅
 * 1、没有传值：flag为undefined 所有频道被取消
 * 2、传入token字符串 某一消息被取消
 * 3、msgName字符串 频道名，当前频道的消息订阅全部取消
 */
publishSub.unSubscribe = function (flag) {
  // 如果flag为undefined，则清空所有订阅
  if (flag === undefined) {
    this.callbacks = {}
  } else if (typeof flag === 'string') {
    // 判断是否是token_开头
    if (flag.indexOf('token_') === 0) {
      // 如果是，则是一个订阅id
      let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))

      if (callbackObj) {
        delete callbackObj[flag]
      }
    } else {
      // 表明是一个频道名称
      delete this.callbacks[flag]
    }
  }
}
