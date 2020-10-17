import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstPage'
import secondPage from './components/pages/secondPage'
import hooksPage from './components/pages/basic/hooks'
import methodsPage from './components/pages/basic/methodss'

const routes = [
    {
        path: '/first-vue',
        component: firstPage
    },
    {
        path: '/second-vue',
        component: secondPage
    },

    //vue hooks
    {
        path: '/hooks',
        component: hooksPage
    },
    {
        path: '/methods',
        component: methodsPage
    },

]

export default new Router({
    mode: 'history',
    routes
})
