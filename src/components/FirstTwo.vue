<template>
  <div class="blue-font">
    我是一级路由2
    <div>
      <router-link to="/FirstThree">点击我切换到一级路由3</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FirstTwo',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .blue-font{
    color: aquamarine;
  }

</style>
