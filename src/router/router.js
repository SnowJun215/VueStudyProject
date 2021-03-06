import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home_index',
        component: Home
      },
      {
        path: 'table',
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder-tree',
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'upload',
        component: () => import('@/views/upload.vue')
      },
      {
        path: 'form',
        component: () => import('@/views/form.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      // food: 'banana'
    },
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue'),
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue'),
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue'),
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue'),
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    redirect: '/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  }
];

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
];
