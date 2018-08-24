<template>
  <div class="main">
    <x-header title="创建待办"></x-header>
    <div class="content">
      <group>
        <x-input title="标题" placeholder="待办标题" v-model="todoTitle"></x-input>
        <datetime-range title="截止时间" start-date="2018-01-01" end-date="2020-02-02" :format="dateFormat" v-model="deadline" @on-change="dateOnChange"></datetime-range>
        <popup-picker title="优先级" :data="prorityList" v-model="prority" @on-show="pickerShow" @on-hide="pickerHide" @on-change="pickerChange" placeholder="选择优先级"></popup-picker>
      </group>
      <x-button type="primary" action-type="button" @click.native="addTodo">添加</x-button>
    </div>
  </div>
</template>

<script>
import { XHeader, DatetimeRange, Group, XInput, PopupPicker, XButton} from 'vux'
import { addTodo } from "../../../service/getData";
export default {
  name: 'createTodo',
  components: {
    XHeader,
    DatetimeRange,
    Group,
    XInput,
    PopupPicker,
    XButton
  },
  data () {
    return {
      todoTitle:'',
      dateFormat:'YYYY年MM月DD日',
      deadline:['2018-01-15', '03', '05'],
      prorityList:[['紧急', '重要', '一般', '无']],
      prority:['无'],
      prorityLevel:1
    }
  },
  mounted () {
  },
  methods: {
    subEvent (value) {
      console.log('子组件发消息来了' + value)
    },
    dateOnChange(value){
      console.log(value)
    },
    pickerShow(){
      console.log('显示了')
    },
    pickerHide(){
      console.log('隐藏了')
    },
    pickerChange(value){
      console.log('改变了')
      this.prority = value;
      console.log(this.prority);
      if (value == '紧急') {
        this.prorityLevel = 4;
      }else if(value == '重要'){
        this.prorityLevel = 3;
      }else if(value == '一般'){
        this.prorityLevel = 2;
      }else if(value == '无'){
        this.prorityLevel = 1;
      }
    },
    addTodo(){
      // let dateString = this.deadline[0] +' ' + this.deadline[1] + ':' + this.deadline[2];
      let yearArray = this.deadline[0].split('-');
     
      let date = new Date(yearArray[0],yearArray[1],yearArray[2],this.deadline[1],this.deadline[2]);
       console.log(date);
      let todoItem = {
        title:this.todoTitle,
        deadline:date,
        priority:this.prorityLevel
      }
      addTodo(todoItem);
    }
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
    }
  }
</style>
