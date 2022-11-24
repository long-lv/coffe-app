import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueLazyload from "vue-lazyload";
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(Antd);
app.use(pinia);
app.use(VueLazyload);
app.mount("#app");