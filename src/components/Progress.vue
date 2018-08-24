<template>
  <div class="main">
    <x-header title="历程" :left-options="{showBack: false}"></x-header>
    <div class="content">
      <div class="todo-item"></div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: 'Progress',
  components: {
    XHeader
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main{
    height: 100%;
    .content{
      padding: 20px 10px;
      height: 100%;
      .todo-item{
        height: 80px;
        width: 100%;
        background-color: yellow;
        border-radius: 8px;
        box-shadow:-1px -1px 1px #cccccc inset;
      }
    }
  }
</style>
