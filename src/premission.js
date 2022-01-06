import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

// router.beforeEach(async (to, from, next) => {
//   if (store.getters.token) {
//     // 用户已登录  不能进入login
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       if (!store.getters.hasUserInfo) {
//         await store.dispatch('user/getUserInfo')
//       }
//       next()
//     }
//   } else {
//     // 用户未登录 只能进login
//     if (whiteList.indexOf(to.path) > -1) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
