<template>
  <div id="app">
    <Range @custom="onCustomHandler" :rangeValue="rangeValue"/> 
    <Block :title="text" :width="width"/>
    <Example />
  </div>
</template>

<script>
import Range from './components/Range.vue'
import Block from './components/Block.vue'
import Example from './components/ExampleModel.vue'

export default {
  name: 'app',
  components: {
    Range,
    Block,
    Example
  },
  data(){
    return {
      counter: 0,
      text: 'Inner title',
      width: 0,
      rangeValue: 0
    }
  },
  methods: {
    onCustomHandler(value){
      this.rangeValue = value;
      this.width = value;
      localStorage.width = value;
    }
  },
  created(){
    if(localStorage.width){
      this.width = this.rangeValue = localStorage.width;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
