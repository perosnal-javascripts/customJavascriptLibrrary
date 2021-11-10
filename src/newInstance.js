function newInstance(constructor, ...args) {
  // 1、创建一个新对象
  const obj = {}
  // 2、修改函数内部this指向新对象并执行
  const result = constructor.call(obj, ...args)
  // 修改新对象的原型对象
  obj.__proto__ = constructor.prototype
  // 3、返回新对象, 判断result，和原生new创建对象保持一致
  return result instanceof Object ? result : obj
}
