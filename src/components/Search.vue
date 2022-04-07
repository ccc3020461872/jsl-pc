<template>
  <div id="search" class="cl-shadow">
    <div class="posiiton">
      <i class="iconfont icon-weizhi"></i>
      <input type="text" placeholder="请输入地址" :value="$store.state.position" @blur="positionInput" />
    </div>
    <div class="posiiton date">
      <i class="iconfont icon-24gf-calendar"></i>
      <el-date-picker v-model="date"  value-format="YYYY-MM-DD" @change="changeDate"  type="date" placeholder="请选择日期" />
    </div>
    <div class="posiiton car">
      <i class="iconfont icon-iconfontzhizuobiaozhun02"></i>
      <el-select  v-model="carValue" placeholder="请选择车辆" @change="chooseCar">
       <el-option v-for="item in carList" :key="item" :value="item"></el-option>
      </el-select>
    </div>
    <div class="btn" @click="search">查询</div>
  </div>
</template>


<script>import { computed } from "@vue/reactivity";
import { ref } from "vue";
import {  useStore } from "vuex";

export default {
  setup(props,{emit}) {
    const store = useStore()
    const date = ref(store.state.date);
    const carValue = ref(store.state.carType);
    const search = () => {
      emit('searchClick')
    }
    const carList = ['小汽车','大汽车','中汽车']
    // 选择地址
    const positionInput = (e) => {
        store.commit('setPosition',e.target.value)
    }
    // 选择时间
    const changeDate = (date) => {
      console.log(date);
      store.commit('setDate',date)
    }
    // 选择车型
    const chooseCar = (v) => {
       store.commit('setCarType',v)
    }
    return {
      date,
      carValue,

      carList,

      search,
      positionInput,
      changeDate,
      chooseCar
    }
  }

} 
</script>

<style lang="less" >
 #search {
  background-color: #fff;
  padding: 34px 25px 26px;
  display: flex;
  align-items: center;

  // justify-content: space-around;
 
  .posiiton {
    width: 300px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #979797;
    display: flex;
    align-items: center;
    margin-right: 45px;
    .iconfont {
      color: #000000;
      font-size: 30px;
      margin-right: 14px;
      margin-left: 10px;
    }
  }
  .date {
    .el-input__inner {
      box-shadow: none !important;
      padding: 0 !important;
    }
    
    .el-input .el-input__icon {
      display: none;
    }
  }
  .car {
    .el-input__inner {
      box-shadow: none;
    }
    .el-select .el-input__inner:focus {
      box-shadow: none !important;
    }
  }
  .btn {
    width: 116px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 8px;
    background-color: @color;
    color: #fff;
  }
  
}
</style>