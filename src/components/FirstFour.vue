<template>
  <div>
    我是一级路由4
    <div>此路由所带的参数为: {{first}}</div>
    <div class="blue-font" @click="handleJumpRouter">
      点击我切换到一级路由2
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FirstFour',
    props: ['first'],
    data () {
      return {}
    },
    mounted () {
      console.log(this.$route.params.first);
    },
    methods: {
      handleJumpRouter () {
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

