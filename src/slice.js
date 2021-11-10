/**
 * @description 数组切片
 * @param {Array} arr
 * @param {*} begin
 * @param {*} end
 * @returns
 */
function slice(arr, begin, end) {
  // 若arr的长度为0
  if (!arr.length) {
    return []
  }

  begin = begin || 0

  // 如果begin大于等于arr.length
  if (begin >= arr.length) {
    return []
  }

  end = end || arr.length

  if (end < begin) {
    end = arr.length
  }

  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      result.push(arr[i])
    }
  }

  return result
}
