<template>
    <div class="menu">
      <router-link 
        v-for="item in menu" 
        :key="item.title"
        :to="item.to"
        >
          {{item.title}}
      </router-link>
    </div>
</template>

<script>
export default {
  data(){
    return {
      menu: [
        {title: 'Home', to: '/'},
        {title: 'Example', to: '/example'}
      ]
    }
  }
}
</script>

<style>

</style>
