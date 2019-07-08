<template>
  <div id="app">
    <!-- {{counter}}
    <CA :handler="clickMe"/>
    <CB :handler="clickMe"/> -->
    <hr>
    <Coins :list="getCoins" :action="onClickCoin" :width="width"/>
    <Bags :list="getBags" :width="width"/>
  </div>
</template>

<script>
import CA from './components/componentA.vue'
import CB from './components/componentB.vue'
import Coins from './components/Coins.vue'
import Bags from './components/Bags.vue'
import coninsMixin from './mixins/Coins.mixin.js'
import Resolver from './services/Resolver.service.js'

export default {
  name: 'app',
  mixins: [coninsMixin],
  components: {
    CA,
    CB,
    Coins,
    Bags
  },
  data() {
    return {
      counter: 0,
      width: 150
    }
  },
  methods: {
    clickMe(value = 0){
      this.counter += value;
    },
    onClickCoin(coin){
      return Resolver.isBugFull(coin);
    }
  },
  computed: {
    getCoins(){
      return this.listOfCoins;
    },
    getExample(){
      return this.$parent.exampleX;
    },
    getBags(){
      return this.getCoins;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
