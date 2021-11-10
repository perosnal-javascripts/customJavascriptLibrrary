/**
 *
 * @param {*} target
 */
function simplyClone1(target) {
  // 类型判断
  if (typeof target === 'object' && target !== null) {
    // 判断是否是数组
    if (Array.isArray(target)) {
      return [...target]
    } else {
      return { ...target }
    }
  } else {
    return target
  }
}
/**
 *
 * @param {*} target
 */
export function simplyClone(target) {
  // 类型判断
  if (typeof target === 'object' && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {}
    // 遍历容器, for...of只能遍历带迭代器的
    for (let key in target) {
      // 判断当前对象是否包含该属性
      if (target.hasOwnProperty(key)) {
        // 将属性设置到result数据中
        result[key] = target[key]
      }
    }

    return result
  } else {
    return target
  }
}

/**
 * @description 循环引用会出错，函数属性会丢失,json不能克隆方法
 * @param {*} target
 */
function deepClone1(target) {
  // 通过数据创建JSON字符串
  return JSON.parse(JSON.stringify(target))
}

/**
 * @description 递归, 不能解决循环引用的问题
 * @param {*} target
 */
function deepClone2(target) {
  // 检查数据类型
  if (typeof target === 'object' && target !== null) {
    // 创建容器
    const result = Array.isArray(target) ? [] : {}
    // 遍历对象
    for (let key in target) {
      // 检查该对象是否是对象本身的属性，不能是原型上面的属性
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone2(target[key])
      }
    }
    return result
  } else {
    return target
  }
}

/**
 * @description 递归, map解决循环引用的问题
 * @param {*} target
 */
function deepClone3(target, map = new Map()) {
  // 检查数据类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前，进行判断, 判断数据之前是否克隆过
    let cache = map.get(target)
    if (cache) {
      return cache
    }

    // 创建容器
    const result = Array.isArray(target) ? [] : {}
    // 将新的结果存入到map容器中
    map.set(target, result)
    // 遍历对象
    for (let key in target) {
      // 检查该对象是否是对象本身的属性，不能是原型上面的属性
      if (target.hasOwnProperty(key)) {
        // 拷贝
        result[key] = deepClone3(target[key], map)
      }
    }
    return result
  } else {
    return target
  }
}

/**
 * @description 遍历优化
 * @param {*} target
 */
export function deepClone(target, map = new Map()) {
  // 检查数据类型
  if (typeof target === 'object' && target !== null) {
    // 克隆数据之前，进行判断, 判断数据之前是否克隆过
    let cache = map.get(target)
    if (cache) {
      return cache
    }
    // 判断目标数据的类型
    let isArray = Array.isArray(target)
    // 创建容器
    const result = isArray ? [] : {}
    // 将新的结果存入到map容器中
    map.set(target, result)
    // 遍历对象
    // 如果目标数据为数组
    if (isArray) {
      target.forEach((item, index) => {
        result[index] = deepClone4(item, map)
      })
    } else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key], map)
      })
    }
    return result
  } else {
    return target
  }
}
