import { createApp } from "vue";
import App from "./App";
import router from "./router/router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/less/index.less";

createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
