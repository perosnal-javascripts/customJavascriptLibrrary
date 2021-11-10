/**
 *
 * @param {Array} arr
 * @param {Function} callback
 * @returns
 */
function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    if (res) {
      return arr[i] // 返回当前正在遍历的值
    }
  }

  return undefined // 如果没有找到，返回undefined
}
