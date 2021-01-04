<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
    <span class="iconfont place">&#xe632;</span>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    position: relative
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .3rem 0 .5rem
      line-height: .62rem
      text-align: center
      border-radius: .1rem
      color: #666
    .place
      position: absolute
      top: .2rem
      left: .2rem
      color: #666
</style>
