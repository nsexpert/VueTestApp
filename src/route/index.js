import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    /* eslint-disable */
    redirect: to => ({ path: '/contact' })
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/ContactListView.vue"),
  },
  {
    path: "/contact/create",
    name: "contact_create",
    component: () => import("../components/ContactCreateView.vue"),
  },
  {
    path: "/contact/:id",
    name: "contact_detail",
    component: () => import("../components/ContactDetailView.vue"),
  },
  {
    path: "/contact/edit/:id",
    name: "contact_edit",
    component: () => import("../components/ContactCreateView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;