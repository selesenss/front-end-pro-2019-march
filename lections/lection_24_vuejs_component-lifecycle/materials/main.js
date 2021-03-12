
var appData = {
  x: 60,
  y: 200,
  example: 'text',
  inner: {
    data: 120
  }
}

// console.log(appData)
// debugger;
var app = new Vue({
  el: '#app',
  data: appData,
  methods: {
    onClick(){},
    getCustomValue(){
      return this.x+this.y + this.inner.z;
    }
  },
  // create hooks

  beforeCreate(){
    console.log('before created');
    // debugger;
  },
  created(){
    console.log('created');
    // debugger;
  },
  beforeMount(){
    console.log('before mount')
    // debugger;
  },
  mounted(){
    console.log('mounted')
    // debugger;
  },
  beforeUpdate(){
    console.log('before updated')
    // debugger;
  },
  updated(){
    console.log('updated')
    // debugger;
  },
  beforeDestroy(){
    console.log('before destroy')
    // debugger;
  },
  destroyed(){
    console.log('destroy')
    // debugger;
  }
})

// console.log(appData);
// appData.inner.z = 1000;
Vue.set(appData.inner, 'z', 1000);
app.$destroy();
