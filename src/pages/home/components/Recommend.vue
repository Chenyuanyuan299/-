<template>
  <div>
    <div class="title">特惠门票</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    font-weight: bold
    font-size: .44rem
  .item
    overflow: hidden
    display: flex
    height: 1.8rem
    .item-img
      width: 3rem
      height: 1.8rem
      padding: .1rem
    .item-info
      flex: 1
      min-width: 0
      padding: .1rem
      .item-title
        line-height: .7rem
        font-size: .32rem
        ellipsis ()
      .item-desc
        line-height: .3rem
        width: 4rem
        color: #ccc
        ellipsis ()
      .item-button
        background: #ff9300
        margin-top: .25rem
        float:right
        padding: 0 .2rem
        border-radius: .1rem
        color: #fff
</style>
