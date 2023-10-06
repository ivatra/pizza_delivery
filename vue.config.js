const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/web/pizza_delivery" : "/", //https://router.vuejs.org/guide/essentials/history-mode.html#Example-Server-Configurations
});
