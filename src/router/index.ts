import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddItem from "@/components/AddItem.vue";
import DeleteItem from "@/components/DeleteItem.vue";
import DoneItem from "@/components/DoneItem.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        redirect: {
          name: "add",
        },
      },
      {
        path: "/add",
        name: "add",
        component: AddItem,
      },
      {
        path: "/delete",
        name: "delete",
        component: DeleteItem,
      },
      {
        path: "/done",
        name: "done",
        component: DoneItem,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
