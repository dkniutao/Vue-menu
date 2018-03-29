import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'

import Table from '@/views/table/index.vue'
import TableList1 from '@/views/table/tablelist1.vue'
import TableList2 from '@/views/table/tablelist2.vue'

import Form from '@/views/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/table',
          name: '表格',
          component: Table,
          children: [
            {
              path: '/table/tablelist1',
              name: '表格一',
              component: TableList1
            },
            {
              path: '/table/tablelist2',
              name: '表格二',
              component: TableList2
            }
          ]
        },
        {
          path: '/form',
          name: '表单',
          component: Form
        }
      ]
    }

  ]
})
