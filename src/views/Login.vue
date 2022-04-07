<template>
  <div class="login">
    <div class="box w">
      <img :src="backImg" alt />
      <div class="title">登录</div>
      <div class="phone info">
        <input type="text" placeholder="手机号" />
      </div>
      <div class="password info">
        <input type="text" placeholder="密码" />
      </div>
      <!-- 账号密码 -->
      <div class="subbox">
        <div class="remenber">
          <el-checkbox size="50px">记住密码</el-checkbox>
        </div>
        <div class="register" @click="showPop">
          <span>没有账号,</span>
          <span>马上注册>></span>
        </div>
      </div>
      <!-- 登录 -->
      <div class="commit">登录</div>
    </div>
   
  </div>
   <register :show="show" @close="clousePop"/>
   <success/>
</template>

<script>
  import register from '../components/Login/register.vue'
  import success from 'components/Login/success'
  import {
    useShowPop,
  }from '@/Hooks'
export default {
  components: {
    register,
    success
  },
  setup() {
    const backImg = require('assets/imgs/loginBack.png')
    const {show, showPop,clousePop} = useShowPop()
    
    return {
      backImg,
      
      show,
      showPop,
      clousePop
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 642px;
  margin-top: 149px;
  margin-bottom: 169px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .title {
    font-size: 36px;
    color: #2a364e;
    text-align: center;
    margin-top: 62px;
    margin-bottom: 41px;
  }
  .info {
    width: 806px;
    height: 83px;
    display: flex;
    align-items: center;
    padding-left: 55px;
    background-color: #fff;
    border-radius: 7px;
    margin: auto;
    
    input {
      font-size: 36px;
    }
  }
  .phone {
    margin-bottom: 60px;
  }
  .subbox {
    width: 806px;
    margin: auto;
    font-size: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 21px;

    .register {
      cursor: pointer;
      span:last-child {
        color: @color;
      }
    }
  }
  .commit {
    width: 806px;
    height: 83px;
    line-height: 83px;
    text-align: center;
    border-radius: calc(83px / 2);
    background-color: @color;
    font-size: 36px;
    color: #fff;
    margin: auto;
    margin-top: 42px;
  }
}
</style>