export function isArray(obj: Object) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
