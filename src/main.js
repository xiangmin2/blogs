// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./assets/fonts/iconfont/iconfont.css";
import "./styles/global.less";
import router from "./router/index";
import showMessage from "./utils/showMessage";
import "./eventBus";
import store from "./store";
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// // 随便测试一下
// import * as blogApi from "./api/blog";

// blogApi.getBlogTypes().then((r) => {
//   console.log("博客分类", r);
// });

// blogApi.getBlogs(2, 10, 3).then((r) => {
//   console.log("博客", r);
// });

// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });
