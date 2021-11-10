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
