<template>
  <div>
    <div
      class="items"
      v-for="(items, index) of list"
      :key="index"
      @click=handleShowListClick(index)
    >
      <div class="items-title border-bottom">
        <span class="items-title-icon"></span>
          {{items.title}}
      </div>
      <div class="items-each" v-show=showList[0]>
        <detail-list :list="items.adult"></detail-list>
      </div>
      <div class="items-each" v-show=showList[1]>
        <detail-list :list="items.student"></detail-list>
      </div>
      <!-- <div class="items-each" v-for="(item, index) of items" v-show=showList[index] :key="index">
        <detail-list :list="items.adult"></detail-list>
      </div> -->
    </div>
  </div>
</template>

<script>
import Detail from '../Detail.vue'
export default {
  components: { Detail },
  name: 'DetailList',
  props: {
    list: Array
  },
  data () {
    return {
      showList: {0: false, 1: false}
    }
  },
  methods: {
    handleShowListClick (index) {
      console.log(index)
      // this.showList = !this.showList
      this.showList[index] = !this.showList[index]
      console.log(this.showList[index])
    }
  }
}
</script>

<style lang="stylus" scoped>
  .items-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .items-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .items-each
    padding: 0 .2rem
</style>
