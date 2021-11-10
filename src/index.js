// 引入其他文件，然后再暴露
// 1、目标文件中暴露数据 export数据
// import { chunk } from './chunk'
// // 暴露数据
// export { chunk }

export { chunk } from './chunk'
export {
  map,
  reduce,
  slice,
  unique,
  pull,
  pullAll,
  find,
  findIndex,
  filter,
  flatten,
  concat,
  difference,
  every,
  some,
  drop,
  dropRight
} from './array'
export { call, apply, bind } from './function'
export { reverseString, palindrome, subString } from './string'
export { newInstance, merageObject, instanceOf } from './object'
export { axios } from './axios'
export { debounce } from './debounce'
export { throttle } from './throttle'
export { eventBus } from './event-bus'
export { addEventListener } from './event'
export { simplyClone, deepClone } from './clone'
export { publishSub } from './subScribeAndPublish'

// console.log(chunk)
