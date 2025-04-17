import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { initSounds } from "./audio_context";
import BaseButton from "./components/BaseButton.vue";

async function bootstrap() {
  await initSounds();

  const app = createApp(App);
  app.component("BaseButton", BaseButton);
  app.use(router);
  app.mount("#app");
}

bootstrap();
