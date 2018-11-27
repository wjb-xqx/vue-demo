import Vue from 'vue'
import Router from 'vue-router'
//制作tab路由 跳转   先引入组件  再配置 再放坑router-view
import homeContainer from '@/components/tabbar/homeContainer.vue'
import memberContainer from '@/components/tabbar/memberContainer.vue'
import shopcarContainer from '@/components/tabbar/shopcarContainer.vue'
import searchContainer from '@/components/tabbar/searchContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:'/home'},
    {path:"/home",component:homeContainer},
    {path:"/member",component:memberContainer},
    {path:"/shopcar",component:shopcarContainer},
    {path:"/search",component:searchContainer}
  ],
  linkActiveClass : 'mui-active'
})
