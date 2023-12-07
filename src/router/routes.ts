import { RouteRecordRaw } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import ToDoListPage from "../pages/ToDoListPage.vue";
import ToDoItemPage from "../pages/ToDoItemPage.vue";

const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
    redirect: "/todo-list",
    children: [
      { path: "/todo-list", name: "ToDo List", component: ToDoListPage },
      {
        path: "/todo-detailed/:id",
        name: "ToDo Detailed",
        component: ToDoItemPage,
      },
    ],
  },
];

export default routes;
