<template>
  <div class="blue-font">
    我是一级路由2
    <div>
      <router-link to="/FirstThree">点击我切换到一级路由3</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'FirstTwo',
    data () {
      return {}
    },
    beforeRouteEnter (to, from, next) {
      console.log('FirstTwo组件内部守卫');
      next()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .blue-font{
    color: aquamarine;
  }

</style>
