<template>
  <div class="w">
     <div class="title">首页>我的订单</div>
     <div class="navbar">
       <order-navbar></order-navbar>
     </div>
     <my-order-info></my-order-info>
  </div>
</template>

<script>
import OrderNavbar from 'components/MyOrder/navbar';
import MyOrderInfo from 'components/MyOrder/info'
export default {
  components: {
    OrderNavbar,
    MyOrderInfo
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .title {
    font-size: 21px;
    color: #1A1A1A;
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .navbar {
    margin-bottom: 30px;
  }
</style>