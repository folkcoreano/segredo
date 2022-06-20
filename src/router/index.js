import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        },
        {
            path: '/tv',
            name: 'TV',
            component: () => import('../views/tv.vue')
        },
        {
            path: '/audios',
            name: 'Audios',
            component: () => import('../views/audios.vue'),
        },
        {
            path: '/books',
            name: 'Books',
            component: () => import('../views/books.vue'),
        },
        {
            path: '/comics',
            name: 'Comics',
            component: () => import('../views/comics.vue'),
        },
        {
            path: '/profile',
            name: 'Profile',
            component: () => import('../views/profile.vue'),
        },
        {
            path: '/search',
            name: 'Search',
            component: () => import('../views/search.vue'),
        },
    ],
});

export default router;