<template>
  <div class="pay-pop">

      <div class="container">
        <div class="title">账号信息:</div>
        <div class="info">
          <span>账户名：刘芳</span>
          <span>车牌号：粤B34255</span>
          <span>订单号：9753975957935395</span>
        </div>
        <!-- 站名 -->
        <div class="station">梅岭斯安汽车摩托车年检站</div>
        <!-- 卡券 -->
        <div class="ticket">
          <img class="right-img" :src="right" alt />
          <div class="price">￥50</div>
          <div class="line"></div>
          <div class="tip">100元代金券，仅限车检可用</div>
        </div>
        <!-- 应付金额 -->
        <div class="sum-payable">
          应付金额：
          <span>50</span>元
        </div>
        <!-- 付款码 -->
        <div class="payCode">
          <div class="wechat code">
            <div class="img">
            </div>
            <div class="text">
              <i class="iconfont icon-weixinfukuan">
              </i>
              微信支付
            </div>
          </div>
          <div class="alipay code">
            <div class="img">
            </div>
            <div class="text">
              支付宝支付
            </div>
          </div>
           
        </div>
        <div class="note">
          购买成功后，10年内有效，车主可前往车检站报手机号码可使用。
        </div>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  setup() {
    const right = require('assets/imgs/right.png')
    return {
      right
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding-left: 24px;
  padding-top: 16px;
  .title {
    font-size: 16px;
    color: #333;
  }
  .info {
    padding-left: 36px;
    font-size: 14px;
    color: #666;
    margin-bottom: 26px;
    margin-top: 10px;
  }
  .station {
    padding-left: 36px;
    color: @color;
    font-size: 24px;
  }

  .ticket {
    position: relative;
    width: 282px;
    height: 156px;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid @color;
    box-shadow: 0px 1px 7px 0px rgba(240, 130, 1, 0.5);
    margin: 50px auto 34px;
    .right-img {
      position: absolute;
      right: -2px;
      bottom: -2px;
      width: 36px;
    }
    .price {
      font-size: 48px;
      color: @color;
      font-weight: 700;
      text-align: center;
      margin-top: 26px;
    }
    .line {
      width: 80%;
      height: 1px;
      border-top: 1px dashed red;
      margin: 16px auto;
    }
    .tip {
      font-size: 12px;
      color: @color;
      text-align: center;
    }
  }
  .sum-payable {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-bottom: 85px;
    span {
      color: @color;
    }
  }
  .payCode {
    display: flex;
    align-items: center;
    justify-content: center;

    .code {
      width: 242px;
      .img {
         width: 100%;
         height: 242px;
         border: 1px solid;
      }
        .text {
         font-size: 21px;
         text-align: center;
         margin-top: 23px;
        line-height: 36px;
        }
    }
    .wechat {
      margin-right: 110px;
      .img {
        border-color: #4CB414;
      }
      .iconfont {
        color: #4CB414;
        font-size: 32px;
        vertical-align: middle;
      }
    }
    .alipay {
      .img {
        border-color: #01AAEF;
      }
      .text {
        width: 100%;
        background-color: #01AAEF;
        color: #fff;
        letter-spacing: 5px;
      }
    }
  }
  .note {
    color: #666666;
    font-size: 21px;
    text-align: center;
    margin-top: 84px;
  }
}
</style>