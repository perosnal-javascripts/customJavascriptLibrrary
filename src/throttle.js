/**
 * @description 操作在规定时间内只执行一次，一般用于滚动事件，resize事件
 * @param {*} callback 执行的回调
 * @param {*} wait 间隔时间
 * @returns
 */
export function throttle(callback, wait) {
  // 定义开始时间
  let start = 0
  // 返回结果是一个函数
  return function (e) {
    console.log('节流')
    // 获取当前的时间戳
    let now = Date.now()

    if (now - start >= wait) {
      // 若满足条件则执行回调,这里的this会指向事件源，替换思维思考一下
      callback.call(this, e)
      // 修改开始时间
      start = now
    }
  }
}
