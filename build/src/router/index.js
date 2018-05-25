import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/test' //引入组件

Vue.use(Router)
export default new Router({
  routes:[
    //填写路由参数：
    {
      path:'/test/:testId',
      name:'HelloWorld',
      component:Test
    }
  ]
})
