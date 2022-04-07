<template>
  <div class="reserve">
    <div class="w">
      <img :src="backImg" alt="" class="backimg">
      <div class="title">选择我们进行预订</div>
      <div class="subtitle">最优惠的价格和轻松的服务</div>

      <ul class="info">
        <li class="item" v-for="(item, index) in list">
           <div class="item-title"><span>{{item.title}}</span></div>
           <div class="light-height">{{item.lightHeigh}}</div>
           <div class="item-subtitle">{{item.subTitle}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
   setup(){
      const backImg = require('assets/imgs/sky.png')
      const list = [
        {
          title: '最近的车检服务站',
          lightHeigh: '全国10000+个车辆检测站',
          subTitle: '就近选择'
        },
        {
          title: '最优惠的价格活动',
          lightHeigh: '超35000种低价优惠',
          subTitle: '超值优惠 & 100%低价'
        },
        {
          title: '最快的车检时间',
          lightHeigh: '28分钟快检',
          subTitle: '预定节约时间高达48%'
        }
      ]
      return {
      backImg,
      list
    }
   }
  }
</script>

<style lang="less" scoped>
  .reserve {
    width: 100%;
    height: 614px;
    position: relative;
    text-align: center;
    color: #000;
    padding-top: 60px;
    .backimg{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }
    .title {
      font-size: 48px;

    }
     .subtitle {
       font-size: 21px;
       margin-top: 24px;
       margin-bottom: 60px;
     }
     .info {
       width: 100%;
       display: flex;
       justify-content: space-between;
     .item {
       background-color: #fff;
       flex: 1;
       margin-right: 15px;
       padding: 54px 0 53px 0;
     }
     .item:last-child {
       margin-right: 0;
     }
     .item-title {
       color: #000;
       font-size: 21px;
       margin-bottom: 30px;
       span {
         position: relative;
       }
       span::after {
       content: '';
       display: inline-block;
       width: 80%;
       height: 2px;
       background-color: #888888;
       position: absolute;
       left: 50%;
       bottom: -10px;
       transform: translateX(-50%);
     }
     }
    
     .light-height {
       font-size: 16px;
       color: @lightHeight;
     }
     .item-subtitle {
       font-size: 14px;
       color: #181B21;
       margin-top: 12px;
     }
     }
  }
</style>