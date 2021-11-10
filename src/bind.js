/**
 * @description bind函数不会执行函数，且会返回一个新的函数
 * @param {*} fn 要执行的函数
 * @param {*} obj 函数运行时，this指向的对象
 * @param  {...any} args 函数运行时的参数
 */
function bind(fn, obj, ...args) {
  // 返回一个新函数
  return function (...args2) {
    // 该函数的作用：调用目标函数，并且改变目标函数内部的this指向，指向obj
    // 所以内部和call是一样的，在这里直接执行call函数
    return call(fn, obj, ...args, ...args2)
  }
}
