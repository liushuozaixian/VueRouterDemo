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
  </div>
</template>

<script>
  export default {
    name: 'FirstOne',
    data () {
      return {}
    },
    methods: {
      handleJumpRouter () {
        console.log(this.$router);
        this.$router.push('/FirstTwo')
      },
      handleJumpRouter1 () {
        this.$router.push('/FirstFour/1')
      },
      handleJumpRouter2 () {
        this.$router.push('/FirstFour/2')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blue-font {
    color: blue;
  }
</style>
