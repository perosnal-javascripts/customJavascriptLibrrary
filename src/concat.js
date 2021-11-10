/**
 *
 * @param {Array} arr
 * @param {*} args
 */
function concat(arr, ...args) {
  // 声明一个空数组
  const result = [...arr]
  // 遍历数组
  args.forEach((item, index) => {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  })

  return result
}
