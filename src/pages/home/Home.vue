<!--template根下只能有一个标签，所以外层用div进行包裹-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-one-icons></home-one-icons>
    <home-two-icons></home-two-icons>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weakend></home-weakend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeOneIcons from './components/OneIcons.vue'
import HomeTwoIcons from './components/TwoIcons.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeakend from './components/Weakend.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeOneIcons,
    HomeTwoIcons,
    HomeIcons,
    HomeRecommend,
    HomeWeakend
  }
}
</script>

<style>

</style>
