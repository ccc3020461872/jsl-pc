<template>
  <div class="footer">
    <div class="top">
       <div class="textlist">
          <ul>
            <li>车辆年检</li>
            <li class="line">|</li>
            <li>我的订单</li>
            <li class="line">|</li>
            <li>问题与答案</li>
          </ul>
       </div>
       <div class="conduct">
         <ul>
           <li class="iconfont icon-facebook"></li>
           <li class="iconfont icon-twitter"></li>
           <li class="iconfont icon-youtubeyoutube7"></li>
          </ul>
       </div>
    </div>
    <div class="bottom">
      <span>@ 2021-2022</span>
      <a href="javascript:;">junselukuaijian.com</a>
    </div>
  </div>
</template>

<script>
  export default {
    setup(){
     
    }
  }
</script>

<style lang="less" scoped>
  li {
    cursor: pointer;
  }
  .iconfont {
    margin-right: 27px;
  }
  .footer {
      color: #fff;
      
    .top {
      background-color: #31353e;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 40px 0 55px 0;
      font-size: 16px;
    .textlist ul,
    .conduct ul{
      display: flex;
      align-items: center;
      margin-top: 27px;
    }
   
      .line {
        margin: 0 6px;
      }
    }
    .bottom {
       background-color: #181b22;
       text-align: center;
       padding: 19px 0 21px 0;
      a {
        color: #fff;
        font-size: 22px;
        margin-left: 10px
      }
    }
  }
</style>