<template>
  <div class="main">
    <router-view></router-view>
    <x-header title="TODO列表" :left-options="{showBack: false}">
      <div slot="right" link="">
        <router-link to="/createTodo">添加</router-link>
      </div>
    </x-header>
    <div class="content">
      <div class="todo-item" v-for="(todoItem,index) in todos" :key="index">
        <span class="title" :class="[{finish:todoItem.state == 0},{unfinish:todoItem.state != 0 }]">{{todoItem.title}}</span>
        <div class="decs">
          <span class="deadline" :class="[{finish:todoItem.state == 0}]">7月28日 18:00</span>
          <span class="rate" v-if="todoItem.state != 0">
            <span v-if="todoItem.priority == 4">!!!</span>
            <span v-if="todoItem.priority == 3">!!</span>
            <span v-if="todoItem.priority == 2">!</span>
            <span v-if="todoItem.priority == 1"></span>
          </span>
        </div>
        <x-button class="done" @click.native="finish" :mini=true v-if="todoItem.state != 0">{{statuText}}</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader,XButton } from 'vux'
import { getTodo } from '../../service/getData'
export default {
  name: 'TodoList',
  components: {
    XHeader,
    XButton
  },
  data () {
    return {
      todos: [],
      statuText:'完成'
    }
  },
  mounted () {
    let self = this;
    console.log(this.$router);
    getTodo().then(res => {
      console.log(res);
      this.todos = res.dataList;
    })
  },
  methods: {
    subEvent (value) {
      console.log('子组件发消息来了' + value)
    },
    finish(){
      console.log('完成')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .main{
    .weui-btn:after{
      border: none;
    }
    height: 100%;
    .content{
      padding: 20px 10px;
      height: 100%;
      .todo-item{
        height: 60px;
        width: 100%;
        background-color: white;
        border-radius: 8px;
        box-shadow:-1px -1px 1px #cccccc inset;
        padding: 10px;
        position: relative;
        margin-bottom: 10px;
        .title{
          display: block;
          text-align: left;
        }
        .unfinish{
          color: #000;
        }
        .finish{
          color: #cccccc!important;
        }
        .done{
          position: absolute;
          top: 5px;
          right: 5px;
          background-color: transparent;
        }
        .decs{
          display: flex;
          align-content: space-between;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 5px;
          .deadline{
            color: red;
            font-size: 12px;
          }
          .rate{
            color: red;
          }
        }
      }
    }
  }
</style>
