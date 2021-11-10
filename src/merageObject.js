/**
 *
 * @param  {...any} args
 */
function merageObject(...args) {
  const result = {}
  // 遍历所有的参数对象
  args.forEach(item => {
    // 获取当前对象所有的属性
    Object.keys(item).forEach(key => {
      // 检查result中是否存在key
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], item[key])
      } else {
        // 如果没有，则直接写入
        result[key] = item[key]
      }
    })
  })

  return result
}
