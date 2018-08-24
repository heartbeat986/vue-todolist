import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/todolist/TodoList'
import CreateTodo from '@/components/todolist/children/CreateTodo'
import Focus from '@/components/Focus'
import Reward from '@/components/Reward'
import Progress from '@/components/Progress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
      children:[{
         path: 'createTodo', //创建待办
         component: CreateTodo
      }]
    },
    {
      path: '/focus',
      name: 'Focus',
      component: Focus
    },
    {
      path: '/reward',
      name: 'Reward',
      component: Reward
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    }
  ]
})
