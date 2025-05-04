import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Timers from "./components/Timers.vue";
import WIPView from "./components/WIPView.vue";
import Countdown from "./components/Countdown.vue";
import CountdownDone from "./components/CountdownDone.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/timers", name: "timers", component: Timers },
  { path: "/wip_view", name: "wip_view", component: WIPView },
  { path: "/countdown/:egg_name", name: "countdown", component: Countdown },
  {
    path: "/countdown_done/:egg_name",
    name: "countdown_done",
    component: CountdownDone,
  },
];

export type AppRouteName = (typeof routes)[number]["name"];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
