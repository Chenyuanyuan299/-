<!--template根下只能有一个标签，所以外层用div进行包裹-->
<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-one-icons :list="oneIconList"></home-one-icons>
    <home-two-icons :list="twoIconList"></home-two-icons>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeOneIcons from './components/OneIcons.vue'
import HomeTwoIcons from './components/TwoIcons.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
export default {
  name: 'Home',
  data () {
    return {
      newCity: '',
      swiperList: [],
      oneIconList: [],
      twoIconList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeOneIcons,
    HomeTwoIcons,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.oneIconList = data.oneIconList
        this.twoIconList = data.twoIconList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.newCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.newCity !== this.city) {
      this.newCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
