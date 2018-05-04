<template>
  <div>
    我是一级路由1
    <div class="blue-font" @click="handleJumpRouter">
      点击我切换到一级路由2
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
