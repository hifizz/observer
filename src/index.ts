import Observer from './observer'

function observe(target: object, props: Array<keyof object>, callback: Function) {
  return new Observer(target, props, callback)
}
