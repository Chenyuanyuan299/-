<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <!--下面的标签显示当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
