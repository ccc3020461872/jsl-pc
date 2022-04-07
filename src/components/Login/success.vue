<template>
  <div class="success">
    <cl-pop :show="show" width="285px" height="230px">
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-chenggong"></i>
        </div>
        <div class="text">注册成功！</div>
        <div class="realname pointer" @click="showRealname">立即去实名制认证>></div>
        <el-button @click="closePop">确定</el-button>
      </div>
    </cl-pop>
  </div>
</template>

<script>
import {
  ClPop
} from 'components/ClPop'
import {
  useClPop
} from '@/Hooks'
export default {
  components: {
    ClPop
  },
  setup(){
   const showRealname = () => {
     console.log(111);
   }
   const {
     show,
     showPop,
     closePop
   } = useClPop()
   show.value = true
   return {
     showRealname,
     show,
     showPop,
     closePop
   }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-button {
  padding: 0 16px;
  background-color: @color;
  color: #fff;
}
.info {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  .icon {
    margin: 20px 0;
  }
  .realname {
    color: @color;
    margin: 5px 0 28px;
  }
}

.iconfont {
  font-size: 64px;
  color: @color;
}
</style>