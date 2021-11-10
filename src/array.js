/**
 *
 * @param {Array} arr
 * @param {export function} callback
 * @returns
 */
export function map(arr, callback) {
  // 声明空数组
  let result = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i))
  }
  // 返回结果
  return result
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 * @param {*} initValue // 初始值
 * @returns
 */
export function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue

  // 遍历数组执行回调
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  // 返回最终结果
  return result
}
/**
 * @description 数组切片
 * @param {Array} arr
 * @param {*} begin
 * @param {*} end
 * @returns
 */
export function slice(arr, begin, end) {
  // 若arr的长度为0
  if (!arr.length) {
    return []
  }

  begin = begin || 0

  // 如果begin大于等于arr.length
  if (begin >= arr.length) {
    return []
  }

  end = end || arr.length

  if (end < begin) {
    end = arr.length
  }

  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      result.push(arr[i])
    }
  }

  return result
}
/**
 *
 * @param {Array} arr
 * @returns
 */
export function unique(arr) {
  const result = []
  // 声明空对象，把数组中的值作为属性存到obj中
  const obj = {}

  arr.forEach((item, index) => {
    if (obj[item] === undefined) {
      // 将item作为下标存储到obj中
      obj[item] = true
      result.push(item)
    }
  })

  return result
}

/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
export function pull(arr, ...args) {
  // 保存删掉的元素
  const result = []
  // 遍历
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否在args中
    if (args.includes(arr[i])) {
      // 将当前值存入result中
      result.push(arr[i])
      // 删除当前元素
      arr.splice(i, 1)
      // 下标自减
      i--
    }
  }

  return result
}

/**
 *
 * @param {Array} arr
 * @param  {...any} args
 */
export function pullAll(arr, values) {
  return pull(arr, ...values)
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 * @returns
 */
export function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    if (res) {
      return arr[i] // 返回当前正在遍历的值
    }
  }

  return undefined // 如果没有找到，返回undefined
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 * @returns
 */
export function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    if (res) {
      return i // 返回当前正在遍历的值的下标
    }
  }

  return -1 // 如果没有找到，返回undefined
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 */
export function filter(arr, callback) {
  // 声明空数组
  let result = []
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    let res = callback(arr[i], i)
    // 判断, 如果为真，则将数据插入到result中
    if (res) {
      result.push(arr[i])
    }
  }

  return result
}

/**
 *
 * @param {Array} arr
 */
export function flatten(arr) {
  // 声明空数组
  let result = [...arr]
  // 遍历判断
  while (result.some(item => Array.isArray(item))) {
    result = [].concat(...result)
  }

  return result
}

/**
 *
 * @param {Array} arr
 * @param {*} args
 */
export function concat(arr, ...args) {
  // 声明一个空数组
  const result = [...arr]
  // 遍历数组
  args.forEach((item, index) => {
    if (Array.isArray(item)) {
      result.push(...item)
    } else {
      result.push(item)
    }
  })

  return result
}

/**
 * @description 数组差集
 * @param {Array} arr1
 * @param {Array} arr2
 */
export function difference(arr1, arr2 = []) {
  if (arr1.length === 0) {
    return []
  }

  if (arr2.length === 0) {
    return arr1.slice()
  }
  const result = arr1.filter(item => !arr2.includes(item))

  return result
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 */
export function every(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调, 如果回调结果为false
    if (!callback(arr[i], i)) {
      return false
    }
  }
  // 如果都满足条件，返回true
  return true
}

/**
 *
 * @param {Array} arr
 * @param {export function} callback
 */
export function some(arr, callback) {
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调, 如果有一个满足
    if (callback(arr[i], i)) {
      return true
    }
  }
  // 如果都不满足条件，返回false
  return false
}

/**
 *
 * @param {Array} arr
 * @param {Number} size
 */
export function drop(arr, size) {
  // 过滤原数组
  return arr.filter((value, index) => index >= size)
}

/**
 *
 * @param {Array} arr
 * @param {Number} size
 */
export function dropRight(arr, size) {
  // 过滤原数组
  return arr.filter((value, index) => index < arr.length - size)
}
