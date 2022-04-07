<template>
  <div class="home">
    <div class="banner" :style="`background: url(${banner}) no-repeat top center; `">
      <div class="w">
        <div class="tips">
          <button class="btn">>超350000种低价优惠</button>
          <h2 class="big-text">预定有折扣 车险更无忧</h2>
          <h3 class="small-text">27分钟快速车检</h3>
          <search @searchClick="toPage"></search>
        </div>
        <!-- 星级车管家 -->
       <Star/>
       <!-- 三个特色服务 -->
       <Characteristic-v/>
      </div>
    </div>
    <Reserve />
  
  </div>
</template>

<script>
import Search from 'components/Search'
import Star from 'components/Home/Star'
import CharacteristicV from 'components/Home/Characteristic'
import Reserve from '../components/Home/Reserve'
import {useRouter } from 'vue-router'

export default {
  components: {
    Search,
    Star,
    CharacteristicV,
    Reserve,
  },
  setup() {
    const banner = require('assets/imgs/banner.png')
    const router = useRouter()
    const toPage = ()=>{
      router.push({
        path: '/subscribe'
      })
    }
    return {
      banner,
      toPage
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  background-size: 100% 960px;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  .tips {
    color: #fff;
    margin-top: 196px;
    font-size: 21px;
    .big-text {
      font-size: 60px;
      margin: 23px 0;
    }
    .small-text {
      font-size: 36px;
      margin-bottom: 41px;
    }
    .btn {
      width: 270px;
      height: 44px;
      border-radius: 8px;
      background-color: #fff;
      border: none;
    }
  }
 
}
</style>