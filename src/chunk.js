/**
 * @description 数组分块
 * @param {Array} arr
 * @param {Number} size 数组的分组
 */
export function chunk(arr, size = 1) {
  if (arr.length === 0) {
    return []
  }
  let result = []
  let temp = []
  arr.forEach(item => {
    // 判断temp长度是否为0
    if (temp.length === 0) {
      // 将temp放入result中
      result.push(temp) // [[]]
    }
    // 将数组放入temp中
    temp.push(item)
    if (temp.length === size) {
      temp = []
    }
  })

  return result
}
