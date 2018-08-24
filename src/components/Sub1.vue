<template>
    <div v-on:click="$emit('myevent',1)">{{title}}</div>
</template>

<script>
export default {
  name: 'sub1',
  props: ['title'],
  data () {
    return {
    //   title: '这是sub1'
    }
  }
}
</script>
>
