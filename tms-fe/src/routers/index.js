import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/general/Dashboard.vue';
import Map from '../views/general/Map.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';
import Test from '../views/Test.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import Orders from '../views/operational/Orders.vue';
import Customers from '../views/operational/Customers.vue';
import Coordination from '../views/operational/Coordination.vue';
import Supervision from '../views/operational/Supervision.vue';
import Documents from '../views/operational/Documents.vue';
import KPIManagement from '../views/operational/KPIManagement.vue';
import OperationalData from '../views/operational/OperationalData.vue';
import TransportCosts from '../views/payment/TransportCosts.vue';
import store from '../store';

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'Dashboard',
        component: DefaultLayout,
        meta: {requiresAuth: true},
        children: [
            {path: '/dashboard', name: 'Dashboard', component: Dashboard},
            {path: '/map', name: 'Map', component: Map},
            {path: '/orders', name: 'Orders', component: Orders},
            {path: '/customers', name: 'Customers', component: Customers},
            {path: '/coordination', name: 'Coordination', component: Coordination},
            {path: '/supervision', name: 'Supervision', component: Supervision},
            {path: '/documents', name: 'Documents', component: Documents},
            {path: '/kPIManagement', name: 'KPIManagement', component: KPIManagement},
            {path: '/operationalData', name: 'OperationalData', component: OperationalData},
            {path: '/transportCosts', name: 'TransportCosts', component: TransportCosts},

        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: "Auth",
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },    
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({name: "Login"})
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({name: "Dashboard"});
    } else {
        next()
    }
})

export default router;