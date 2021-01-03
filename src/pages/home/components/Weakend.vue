<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1605/58/5847560fd55ff6f590.water.jpg_256x160_13631f57.jpg',
        title: '凤凰古城',
        desc: '邂逅数个人，偶遇一座城'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/2011/1b/1b5e5d4a4003bbc3a3.img.jpg_256x160_2448993c.jpg',
        title: '张家界国家森林公园',
        desc: '三千奇峰，八百秀水'
      }, {
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1905/29/296e5659470d69bea3.img.jpg_256x160_0f20728d.jpg',
        title: '长沙世界之窗',
        desc: '将刺激的游乐项目和各国的历史遗迹融为一体'
      }, {
        id: '0004',
        imgUrl: '//img1.qunarzz.com/sight/p0/1901/1a/1a23a281559b846a3.img.jpg_256x160_235f4cf6.jpg',
        title: '华谊兄弟（长沙）电影小城',
        desc: '将自己置身于电影世界之中'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-weight: bold
    font-size: .44rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 45%
    .item-img
      width:100%
      object-fit: cover
  .item-info
    padding: .1rem
    .item-title
      line-height: .5rem
      font-weight: bold
      font-size: .32rem
      text-align: center
      ellipsis ()
    .item-desc
      line-height: .3rem
      font-size: .24rem
      text-align: center
      color: #ccc
      ellipsis ()
</style>
