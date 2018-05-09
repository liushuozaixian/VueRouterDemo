<template>
  <div>
    我是一级路由5
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'FirstFive',
    data () {
      return {}
    },
    beforeRouteEnter (to, from, next) {
      if (to.matched.some(record => console.log('dsg:', record.meta.dsg2))) {
//        console.log(record.meta.dsg)
      }
      next()
    },
    mounted () {
      console.log('route:', this.$route.matched[0].meta)
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blue-font {
    color: blue;
  }
</style>

