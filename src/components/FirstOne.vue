<template>
  <div>
    我是一级路由1
    <div class="blue-font" @click="handleJumpRouter">
      点击我切换到一级路由2
    </div>
    <div class="blue-font" @click="handleJumpRouter1">
      点击我切换到一级动态路由4(由1切入)
    </div>
    <div class="blue-font" @click="handleJumpRouter2">
      点击我切换到一级动态路由4(由2切入)
    </div>
    <div>
      <div @click="handleJumpRouter3" class="blue-font">子路由1</div>
      <div @click="handleJumpRouter4" class="blue-font">子路由2</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'FirstOne',
    data () {
      return {}
    },
    mounted () {

    },
//    beforeRouteUpdate (to, from, next) {
//      // react to route changes...
//      // don't forget to call next()
//      console.log('FirstOne中的路由更新')
//      next()
//    },
    methods: {
      handleJumpRouter () {
        this.$router.push('FirstTwo')
      },
      handleJumpRouter1 () {
        this.$router.push('FirstFour/1')
      },
      handleJumpRouter2 () {
        this.$router.push('/FirstFour/2')
      },
      handleJumpRouter3 () {
        this.$router.push('/Second/小1')
      },
      handleJumpRouter4 () {
        this.$router.push('/Second/2')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .blue-font {
    color: red;
  }
</style>
