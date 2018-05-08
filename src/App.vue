<template>
  <div id="app">
    <router-view/>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
