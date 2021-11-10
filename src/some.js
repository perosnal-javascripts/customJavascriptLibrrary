/**
 *
 * @param {Array} arr
 * @param {Function} callback
 */
function some(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调, 如果有一个满足
    if (callback(arr[i], i)) {
      return true
    }
  }
  // 如果都不满足条件，返回false
  return false
}
