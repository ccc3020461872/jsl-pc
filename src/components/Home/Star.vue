<template>
  <div class="star-serve">
    <img :src="star" alt class="backImg"/>
    <div class="info">
      <div class="title">星级车管家为您的服务</div>
      <ul>
        <li v-for="(item,index) in starList">
          <img :src="item.img" alt="">
          <span>{{item.name}}</span>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>import { setgroups } from 'process';

export default {
  setup() {
    const star = require('assets/imgs/star.png')
    const star1 = require('assets/imgs/star1.png')
    const star2 = require('assets/imgs/star2.png')
    const star3 = require('assets/imgs/star3.png')
    const star4 = require('assets/imgs/star4.png')
     
    const starList = [
      {
        img: star1,
        name: '快速'
      },
      {
        img: star2,
        name: '便捷'
      },
      {
        img: star3,
        name: '品质'
      },
      {
        img: star4,
        name: '省心'
      }
    ]
    return {
      star,
      starList
    }
  }
}
</script>

<style lang="less" scoped>
.star-serve {
  width: 1200px;
  height: 440px;
  margin-top: 300px;
  position: relative;

  .backImg {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .info {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;

    .title {
      font-size: 48px;
      color: #fff;
      text-align: center;
      margin-top: 55px;
    }
    ul {
      display: flex;
      align-items: center;
      padding: 0 216px;
      width: 100%;
      margin-top: 52px;
      color: #fff;
      li {
        margin-right: 75px;
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        font-size: 24px;
        img {
          width: 142px;
          margin-bottom: 12px;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }

  }
}
</style>