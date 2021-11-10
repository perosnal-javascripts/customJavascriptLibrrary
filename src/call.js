/**
 * @description call会执行对应函数
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数
 */
function call(fn, obj, ...args) {
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
