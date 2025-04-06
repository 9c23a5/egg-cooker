import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Timers from "./components/Timers.vue";
import Countdown from "./components/Countdown.vue";
import CountdownDone from "./components/CountdownDone.vue";

const routes = [
  { path: "/", name: "home", component: Timers },
  { path: "/", name: "home", component: Home },
  { path: "/timers", name: "timers", component: Timers },
  { path: "/rice_cooker", name: "rice_cooker", component: null },
  { path: "/ratios", name: "ratios", component: null },
  { path: "/countdown/:name", name: "countdown", component: Countdown },
  { path: "/countdown_done", name: "countdown_done", component: CountdownDone },
];

export type AppRouteName = (typeof routes)[number]["name"];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
