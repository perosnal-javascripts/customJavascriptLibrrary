/**
 *
 * @param {Array} arr
 * @param {Number} size
 */
function drop(arr, size) {
  // 过滤原数组
  return arr.filter((value, index) => index >= size)
}

/**
 *
 * @param {Array} arr
 * @param {Number} size
 */
function dropRight(arr, size) {
  // 过滤原数组
  return arr.filter((value, index) => index < arr.length - size)
}
