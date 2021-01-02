<template>
  <div class="twoIcons">
    <div class="tweIcon" v-for="item of tweIconList" :key="item.id">
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
  data () {
    return {
      tweIconList: [{
        id: '0001',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      }, {
        id: '0002',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: '低价机票'
      }, {
        id: '0003',
        imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        desc: '汽车票船票'
      }, {
        id: '0004',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      }, {
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
        desc: '攻略'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .twoIcons
    overflow: hidden
    height: 0
    padding-bottom: 25%
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
        padding: .4rem
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
        ellipsis ()
</style>
