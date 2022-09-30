const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: [],
});
// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.test.com",
        // target: "http://localhost:7001",
      },
      // "/static": {
      //   target: "http://localhost:7001",
      // },
    },
  },
};
