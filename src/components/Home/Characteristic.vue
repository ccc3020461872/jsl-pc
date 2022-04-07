<template>
  <div class="chara">
    <ul class="info-box">
      <li class="item" v-for="(item, index) in list">
        <div class="top">
          <img :src="item.img" alt />
          <div class="text">
            <div class="title">{{ item.title }}</div>
            <div class="subtitle" v-for="(subItem, subIndex) in item.info">
              <span class="sn">{{ subIndex + 1 }}</span>
              {{ subItem }}
            </div>
          </div>
        </div>
        <div class="state pointer">{{ item.state }}</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  setup() {
    const img1 = require('assets/imgs/c1.png');
    const img2 = require('assets/imgs/c2.png');
    const img3 = require('assets/imgs/c3.png');
    const list = [
      {
        img: img1,
        title: '559VIP会员',
        info: ['终身VIP车检服务', '送199元专属礼品', '400元商城抵扣券'],
        state: '立即购买',
      },
      {
        img: img2,
        title: '预约有折扣车检更无忧',
        info: [
          '前3个月预约车检7折',
          '前2个月预约车检8折',
          '前1个月预约车检9折',
        ],
        state: '立即预约',
      },
      {
        img: img3,
        title: '集团大客户VIP通道',
        info: ['物业公司', '网约车', '二手车、4s店等', '集团客户'],
        state: '立即进入',
      },
    ];
    return {
      list,
    };
  },
};
</script>

<style lang="less" scoped>
.chara {
  width: 100%;
  
  .info-box {
    width: 100%;
    display: flex;

    li {
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      img {
        width: 100%;
      }
    }
    .text {
      padding-left: 20px;
    }
    .title {
      font-size: 24px;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 16px;
      line-height: 30px;
    }
    .state {
      font-size: 18px;
      color: #fff;
      background-color: @color;
      width: 116px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      border-radius: 8px;
      margin-left: 20px;
    }
  }
  .sn {
    border: 1px solid #000;
    width: 18px;
    height: 18px;
    display: inline-block;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    font-size: 15px;
  }
}
</style>
