import { createRouter, createWebHashHistory } from "vue-router";
import Timers from "./components/Timers.vue";
import Countdown from "./components/Countdown.vue";
import CountdownDone from "./components/CountdownDone.vue";

const routes = [
  { path: "/", name: "home", component: Timers },
  { path: "/countdown/:name", name: "countdown", component: Countdown },
  { path: "/countdown_done", name: "countdown_done", component: CountdownDone },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
