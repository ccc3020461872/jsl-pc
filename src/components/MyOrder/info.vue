<template>
  <div class="info">
    <div class="title">梅岭斯安汽车摩托车年检站</div>
    <ul class="order-info">
      <li>
        <span>订单状态</span>
        <span>未使用</span>
      </li>
      <li>
        <span>订单类型</span>
        <span>优惠券购买</span>
      </li>
      <li>
        <span>金额</span>
        <span>50元</span>
      </li>
      <li>
        <span>购买时间</span>
        <span>2022-06-18 16:45:34</span>
      </li>
      <li>
        <span>订单号</span>
        <span>9753975957935395</span>
      </li>
      <li>
        <span>支付类型</span>
        <span>支付宝支付</span>
      </li>
      <li>
        <span>有效期</span>
        <span>2022.04.05-2034.04.05</span>
      </li>
    </ul>
    <!-- .已使用未使用图片 -->
    <div class="typeImg">
      <img :src="usedImg" alt="">
    </div>
    <!-- 小定单 -->
    <div class="little-form">
      <div class="title">梅岭斯安汽车摩托车年检站</div>
      <ul class="order-info">
        <li>
          <span>订单状态</span>
          <span>未使用</span>
        </li>
        <li>
          <span>订单类型</span>
          <span>优惠券购买</span>
        </li>
        <li>
          <span>金额</span>
          <span>50元</span>
        </li>
        <li>
          <span>购买时间</span>
          <span>2022-06-18 16:45:34</span>
        </li>
        <li>
          <span>订单号</span>
          <span>9753975957935395</span>
        </li>
        <li>
          <span>支付类型</span>
          <span>支付宝支付</span>
        </li>
        <li>
          <span>有效期</span>
          <span>2022.04.05-2034.04.05</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup(){
    const usedImg = require('assets/imgs/used.png');
    const cancelImg = require('assets/imgs/cancel.png');
    return{
      usedImg,
      cancelImg
    }
  }
}
</script>

<style lang="less" scoped>
.info {
  background-color: #fff;
  padding-bottom: 103px;
  position: relative;
  .typeImg {
    width: 150px;
    height: 150px;
    position: absolute;
    right: 15px;
    top: 34px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .little-form {
    // width: 100%;
    margin: 40px 16px 0 20px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid #eeeeee;
    
    .title {
      background-color: #eee;
    }
  }
  .title {
    color: #333;
    font-size: 16px;
    line-height: 60px;
    padding-left: 26px;
    border-bottom: 1px solid #eeeeee;
  }
  .order-info {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-left: 26px;
    li {
      width: 33.3%;
      display: flex;
      align-items: center;
      line-height: 46px;
      span:first-child {
        width: 94px;
      }
    }
  }
}
</style>