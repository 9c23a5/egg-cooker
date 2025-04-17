import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { initSounds } from "./audioContext";

await initSounds();
const app = createApp(App);
app.use(router);
app.mount("#app");
