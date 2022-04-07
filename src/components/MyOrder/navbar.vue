<template>
  <div class="navbar pointer">
    <template v-for="(item,index) in list" >
      <div :class="['item',{select: currentIndex === index}]" @click="changeTab($event,index)" >
        <span>{{ item }}</span>
        <!-- 三角 -->
        <div class="shape" v-show="currentIndex === index"></div>
      </div>
    </template>
  </div>
</template>

<script>
import { nextTick } from "process"
import { onMounted, ref } from "vue"
  document.body.style.background = '#f6f6f6'
export default {

  setup() {
    const list = [
      '全部订单',
      '未支付',
      '未使用',
      '已使用',
      '已取消'
    ]
    const currentIndex = ref(0)
    const el = ref(null)
    const changeTab = (e,i) => {
      console.log(e);
      currentIndex.value = i;
     
    }
    
    return {
      list,
      currentIndex,
      el,
      changeTab
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 48px;
  text-align: center;
  background-color: #FAFAFA;
  .item {
    flex: 1;
    color: #666666;
  }
  .select {
    background-color: @color;
    position: relative;
    border-top-right-radius: 2px;
    color: #Fff;
  }
  .shape {
    width: 0;
    height: 0;
    border-left:   33.3px solid transparent;
    border-right:  33.3px solid @color;
    border-bottom: 33.3px solid transparent;
    transform: rotate(45deg);
    position: absolute;
    right: -21px;
    top: -4px;
   
  }
}
</style>