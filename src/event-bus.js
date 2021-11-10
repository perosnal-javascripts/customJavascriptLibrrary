export const eventBus = {
  callbacks: {} // 以键值对形式存储所有的事件，保存类型:事件（事件是数组）
}

// 绑定事件, 将事件类型和事件回调保存起来， 键值对，使用对象保存数据
eventBus.on = function (type, callback) {
  // 判断
  if (this.callbacks[type]) {
    // 如果存在对事件
    this.callbacks[type].push(callback)
  } else {
    // 如果callbacks属性中不存在对应事件
    this.callbacks[type] = [callback]
  }
}
// 触发事件，查找对应类型是否存在与之对应的回调，如果有，则取出来并执行
eventBus.emit = function (type, data) {
  // 判断
  if (this.callbacks[type] && this.callbacks[type].length) {
    // 遍历数组
    this.callbacks[type].forEach(callback => {
      callback(data)
    })
  }
}
// 事件的解绑
eventBus.off = function (eventName) {
  // 若传入了 eventName 事件类型
  if (eventName) {
    // 只是删除 eventName对应的事件回调
    delete this.callbacks[eventName]
  } else {
    this.callbacks = {}
  }
}
