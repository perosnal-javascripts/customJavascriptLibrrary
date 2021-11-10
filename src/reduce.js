/**
 *
 * @param {Array} arr
 * @param {Function} callback
 * @param {*} initValue // 初始值
 * @returns
 */
function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue

  // 遍历数组执行回调
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  // 返回最终结果
  return result
}
