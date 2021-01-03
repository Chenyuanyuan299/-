<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
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
  name: 'HomeWeekend',
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
