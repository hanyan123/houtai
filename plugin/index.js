//封装自定义全局方法
export default {
  install (Vue, options) {
    Vue.prototype.jumpTo = function (path) {
      console.log(Vue,options)
      console.log(1111)
      //options.router.push(path)
    }
    Vue.prototype.jumpNext = function (path) {
      console.log(Vue,options)
      console.log(path)
      console.log(1111)
      //options.router.push(path)
    }
  }
}