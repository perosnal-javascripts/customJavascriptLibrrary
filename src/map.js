/**
 *
 * @param {Array} arr
 * @param {Function} callback
 * @returns
 */
function map(arr, callback) {
  // 声明空数组
  let result = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  // 返回结果
  return result
}
