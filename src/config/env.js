/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 */

let baseUrl = ''
let routerMode = 'hash'
let imgBaseUrl = ''


if (process.env.NODE_ENV === 'development') {
  // baseUrl = 'https://api.bmob.cn/1/classes/'
  // baseUrl = '../mock/'

} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'https://api.bmob.cn/1/classes/'
  // baseUrl = '../mock/'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
