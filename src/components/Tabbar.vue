<template>
  <div class="tabbar">
     <ul class="tab-box">
       <li @click="toPage('/home')">
        <el-image style="width: 226px; height: 64px" :src="logo" :fit="fit" />
       </li>
       <li>车辆年检</li>
       <li @click="$router.push('/myorder')">我的订单</li>
       <li class="cc-center line-height">
          <i class="iconfont icon-jinggao"></i>
         <span>问题与答案</span>
         </li>
       <li class="cc-center line-height">
         <i class="iconfont icon-dianhuatianchong"></i>
         <div class="right">
           <div class="phone">400-152-5298</div>
           <div class="time">周一至周五 上午9点至下午5点</div>
         </div>
       </li>
       <li class="cc-center login" @click="toPage('/login')">
         <i class="iconfont icon-xiaoren"></i>
         <span>
           登录
         </span>
       </li>
     </ul>
  </div>
</template>

<script>import { useRouter } from 'vue-router'
  
  export default {
    setup(){
      const logo = require('assets/imgs/logo.png')
      const router = useRouter()
      const toPage = (path) => {
         router.push({
           path
         })
      }
    
      return {
         logo,
         toPage
      }
    }
  }
</script>

<style lang="less" scoped>
li {
  cursor: pointer;
}
  .tabbar .tab-box{
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    font-size: 18px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
   
    .login {
      color: #999999;
    }
  }
  .iconfont {
    font-size: 40px;
    margin-right: 5px;
  }
  .cc-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line-height {
    color: @lightHeight;
  }
</style>