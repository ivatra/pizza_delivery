import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/CartView.vue";
import IndexView from "../views/IndexView.vue";
import CustomPizzaView from "../views/CustomPizzaView.vue";
import OrderPlacedView from "../views/OrderPlacedView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/cart/:id",
    name: "cart",
    component: CartView,
    props: true,
  },
  {
    path: "/customize/:id",
    name: "customize",
    component: CustomPizzaView,
    props: true,
  },
  {
    path: "/orderplaced/:id",
    name: "orderplaced",
    component: OrderPlacedView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
