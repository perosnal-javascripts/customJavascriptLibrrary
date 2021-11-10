/**
 *
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数,apply是数组，不使用三点运算符
 */
function apply(fn, obj, args) {
  // 判断
  if (obj === null || obj === undefined) {
    obj = globalThis
  }
  // 为obj添加临时方法
  obj.temp = fn
  // 执行temp方法
  let result = obj.temp(...args)

  // 删除temp
  delete obj.temp

  return result
}
