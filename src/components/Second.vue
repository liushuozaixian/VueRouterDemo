<template>
  <div>
    我是二级路由！！！！！！！
    <div>
      我的参数是{{$route.params.id}}
    </div>
    <div @click="handleJumpPage" class="blue-font">点击我跳到一级路由2</div>
  </div>
</template>

<script>
  export default {
    name: 'Second',
    data () {
      return {}
    },
    mounted () {
    },
    methods: {
      handleJumpPage () {
        this.$router.push('/FirstTwo')
      }
    },
//    watch: {
//      '$route' (ne, old) {
//        console.log('watch', ne, old)
//      }
//    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blue-font {
    color: blue;
  }
</style>

