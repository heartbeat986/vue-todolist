<template>
  <div id="app">
    <router-view>

    </router-view>
    <tabbar v-show="$route.path == '/' || $route.path == '/focus' || $route.path == '/reward' || $route.path == '/progress'">
      <tabbar-item link="/">
        <img slot="icon" src="">
        <span slot="label">列表</span>
      </tabbar-item>
      <tabbar-item show-dot  link="/focus">
        <img slot="icon" src="">
        <span slot="label">专注</span>
      </tabbar-item>
      <tabbar-item link="/reward">
        <img slot="icon" src="">
        <span slot="label">奖励</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/progress">
        <img slot="icon" src="">
        <span slot="label">历程</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
@import './style/common';
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

}
</style>
