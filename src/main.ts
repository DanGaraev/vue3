import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import router from "./router";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus).use(pinia).use(router);
app.mount("#app");
