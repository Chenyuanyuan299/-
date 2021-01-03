<template>
  <div class="twoIcons">
    <div class="tweIcon" v-for="item of list" :key="item.id">
      <div class="twoIcon-img">
        <img class="twoIcon-img-content" :src="item.imgUrl"/>
        <p class="twoIcon-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTwoIcons',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .twoIcons
    overflow: hidden
    height: 0
    padding-bottom: 20%
    .tweIcon
      position: relative
      overflow: hidden
      float: left
      width: 20%
      height: 0
      // 相对于icons的width: 100%
      padding-bottom: 25%
      .twoIcon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .3rem .4rem .5rem .4rem
        .twoIcon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .twoIcon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .55rem
        text-align: center
        font-size: .2rem
        color: $darkTextColor
</style>
