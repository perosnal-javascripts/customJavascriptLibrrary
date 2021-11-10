/**
 *
 * @param {Array} arr
 * @returns
 */
function unique1(arr) {
  const result = []

  arr.forEach((item, index) => {
    // 检查result数组中是否包含该元素
    if (result.indexOf(item) === -1) {
      // 若没有该元素，则插入到数组中
      result.push(item)
    }
  })

  return result
}

/**
 *
 * @param {Array} arr
 * @returns
 */
function unique2(arr) {
  const result = []
  // 声明空对象，把数组中的值作为属性存到obj中
  const obj = {}

  arr.forEach((item, index) => {
    if (obj[item] === undefined) {
      // 将item作为下标存储到obj中
      obj[item] = true
      result.push(item)
    }
  })

  return result
}

/**
 *
 * @param {Array} arr
 * @returns
 */
function unique3(arr) {
  // 将数组转化为集合Set
  //   let set = new Set(arr)
  //   // 将set展开创建一个数组
  //   let array = [...set]
  //   return array
  return [...new Set(arr)]
}
