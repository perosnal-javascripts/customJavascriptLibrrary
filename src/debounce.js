/**
 * @description 规定时间，只取所有操作的最后一次操作
 * @param {*} callback 执行的回调
 * @param {*} wait 延迟时间
 * @returns
 */
export function debounce(callback, time) {
  let timeId = null
  return function (e) {
    // 判断
    if (timeId !== null) {
      // 清除定时器
      clearTimeout(timeId)
    }
    // 启动定时器
    timeId = setTimeout(() => {
      // 执行回调
      callback.call(this, e)
      // 重置定时器, 因为到了时间，上一次的定时器已经停止了，并且timeId是有值的，所以执行clearTimeout是多余的。应该在这里将timeId重置为null更为合理
      timeId = null
    }, time)
  }
}
