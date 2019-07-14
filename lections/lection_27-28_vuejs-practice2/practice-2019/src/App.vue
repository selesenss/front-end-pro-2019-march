<template>
  <div id="app">
    <!-- {{counter}}
    <CA :handler="clickMe"/>
    <CB :handler="clickMe"/> -->
    <hr>
    <Coins :list="getters.coins" :action="onClickCoin" :width="width"/>
    <Bags :list="getters.coins" :width="width"/>
    <hr>
    <button @click="onClickStore">Update Store</button>
    <hr>
    Positive: {{getters.getPositiveElems}}
    Negative: {{getters.getNegativeElems}}
    <hr>
    <button @click="storeUpdateList">Update sotre list</button>
  </div>
</template>

<script>
import CA from './components/componentA.vue'
import CB from './components/componentB.vue'
import Coins from './components/Coins.vue'
import Bags from './components/Bags.vue'
import Resolver from './services/Resolver.service.js'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  mixins: [],
  components: {
    CA,
    CB,
    Coins,
    Bags
  },
  data() {
    return {
      counter: 0,
      width: 150,
      getters: this.$store.getters
    }
  },
  methods: {
    clickMe(value = 0){
      this.counter += value;
    },
    onClickCoin(coin){
      return Resolver.isBugFull(coin);
    },
    onClickStore(){
      // this.$store.state.x += 600;
      // this.$store.commit('updateX', 600);
      // this.$store.commit({
      //   type: 'updateXSuper',
      //   value: 600
      // });

      // ------------

      // this.updateX(600);
      this.updateXSuper({value : 600});
    },
    storeUpdateList(){
      // this.$store.dispatch({
      //   type: 'generateRandomList',
      //   value: 600,
      //   example: 'asdkjasjldk'
      // });
      this.generateRandomList({example: 'asdkjasjldk'});
    },
    ...mapMutations(['updateX', 'updateXSuper']),
    ...mapActions(['generateRandomList', 'initCoins'])
  },
  computed: {
    getCoins(){
      return this.$store.state.coins;
    },
    // getPositiveElems(){
    //   // return this.$store.state.list.filter(item => item > 0);
    //   return this.getters.getPositiveElems;
    // },
    // getNegativeElems(){
    //   return this.getters.getNegativeElems;
    // }
    getExample(){
      return this.$parent.exampleX;
    },
    getBags(){
      return this.getCoins;
    },
    getState(){
      return this.$store.state;
    }
  },
  created(){
    this.initCoins();
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
