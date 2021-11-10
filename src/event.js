/**
 *
 * @param { Node } el 元素节点
 * @param { String } type 事件类型
 * @param { Function} callback 注册的事件
 * @param { String } selector 子选择器
 */
export function addEventListener(el, type, callback, selector) {
  // 判断el的类型
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
  // 事件绑定,没有传子元素的选择器，则进行事件委托,给el绑定事件
  if (!selector) {
    el.addEventListener(type, callback)
  } else {
    el.addEventListener(type, function (e) {
      // 获取点击的目标事件源
      const target = e.target
      // 判断选择器与目标元素是否相符
      if (target.matches(selector)) {
        // 若符合，则调用回调
        callback.call(target, e)
      }
    })
  }
}
