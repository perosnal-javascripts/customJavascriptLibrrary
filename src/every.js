/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function every(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调, 如果回调结果为false
    if (!callback(arr[i], i)) {
      return false
    }
  }
  // 如果都满足条件，返回true
  return true
}
