/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
function pull(arr, ...args) {
  // 保存删掉的元素
  const result = []
  // 遍历
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否在args中
    if (args.includes(arr[i])) {
      // 将当前值存入result中
      result.push(arr[i])
      // 删除当前元素
      arr.splice(i, 1)
      // 下标自减
      i--
    }
  }

  return result
}

/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
function pullAll(arr, values) {
  return pull(arr, ...values)
}
