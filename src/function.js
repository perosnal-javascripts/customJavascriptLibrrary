/**
 * @description call会执行对应函数
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数
 */
export function call(fn, obj, ...args) {
  // 1、如何改变函数this的指向（这里改变this指向，使之指向了obj这个对象），并执行函数
  /**
   * 解决办法：为obj对象添加临时的方法, 此时obj里有一个和fn功能一样的函数，这时候可以不调用fn，而通过调用obj中的temp, 实现调用fn。并且temp方法内部的值的this是指向obj的，变相实现this指向obj对象这个效果
   */
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  // 判断obj是否为null或undefined
  if (obj === null || obj === undefined) {
    obj = globalThis // 指向全局对象, globalThis是es11提供的
  }
  obj.temp = fn
  // 调用temp, 并把参数传递进去, 函数的执行，实际是在这里执行的
  let result = obj.temp(...args)
  // obj对象身上还有temp方法，要复原，删除temp
  delete obj.temp
  // 返回执行结果
  return result
}

/**
 * @description bind函数不会执行函数，且会返回一个新的函数
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数
 */
export function bind(fn, obj, ...args) {
  // 返回一个新函数
  return function (...args2) {
    // 该函数的作用：调用目标函数，并且改变目标函数内部的this指向，指向obj
    // 所以内部和call是一样的，在这里直接执行call函数
    return call(fn, obj, ...args, ...args2)
  }
}

/**
 *
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数,apply是数组，不使用三点运算符
 */
export function apply(fn, obj, args) {
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
