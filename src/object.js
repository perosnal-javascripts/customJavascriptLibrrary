/**
 *
 * @param {*} constructor 类
 * @param  {...any} args
 * @returns
 */
export function newInstance(constructor, ...args) {
  // 1、创建一个新对象
  const obj = {}
  // 2、修改函数内部this指向新对象并执行
  const result = constructor.call(obj, ...args)
  // 修改新对象的原型对象
  obj.__proto__ = constructor.prototype
  // 3、返回新对象, 判断result，和原生new创建对象保持一致
  return result instanceof Object ? result : obj
}

/**
 *
 * @param  {...any} args
 */
export function merageObject(...args) {
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

/**
 *
 * @param {Object} obj
 * @param {Function} fn
 * @returns
 */
function instanceOf(obj, fn) {
  // 获取函数的显示原型
  let prototype = fn.prototype
  // 获取obj的隐式原型对象
  let proto = obj.__proto__
  // 遍历原型链
  while (proto) {
    // 检测原型对象是否相等
    if (prototype === proto) {
      return true
    }
    // 如果不相等
    proto = proto.__proto__
  }

  return false
}
