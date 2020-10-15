import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import firstPage from './components/pages/myFirstPage'

const routes = [
    {
        path: '/checkvue',
        component: firstPage
    }
]

export default new Router({
    mode: 'history',
    routes
})
