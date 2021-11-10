/**
 * @description 字符串反转
 * @param {String} str
 * @returns
 */
export function reverseString(str) {
  // 将字符串转为数组
  return [...str].reverse().join('')
}
/**
 * @description 检查是否是回文
 * @param {String} str
 * @returns
 */
export function palindrome(str) {
  return reverseString(str) === str
}

export function subString(str, size = 1) {
  return str.slice(0, size) + '...'
}
