<template>
  <div class="oneIcons">
    <div class="oneIcon" v-for="item of list" :key="item.id">
      <div class="oneIcon-img">
        <img class="oneIcon-img-content" :src="item.imgUrl"/>
        <p class="oneIcon-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeOneIcons',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .oneIcons
    overflow: hidden
    height: 0
    padding-bottom: 25%
    .oneIcon
      position: relative
      overflow: hidden
      float: left
      width: 20%
      height: 0
      // 相对于icons的width: 100%
      padding-bottom: 25%
      .oneIcon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .2rem
        .oneIcon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .oneIcon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .10rem
        line-height: .55rem
        text-align: center
        font-size: .3rem
        color: $darkTextColor
</style>
