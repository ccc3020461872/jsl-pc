<template>
  <div :class="[subscribe,{noScroll:show}]">
    <div class="w">
      <div class="tips">首页>预约</div>
      <search />
      <div class="tips2">根据您的需求搜索出以下结果</div>
      <!-- 距离最近 最优惠的 -->
      <div class="chooseBtn pointer">
        <span
          v-for="(item, index) in typeList"
          @click="chooseType(index)"
          :class="{ selected: currentIndex === index }"
          >{{ item }}</span
        >
      </div>
      <div class="container">
        <!-- 左边站点列表 -->
        <div class="left">
          <stations @doBuy="showPop" />
        </div>
        <!-- 右边 地图 -->
        <div id="map"></div>
      </div>
      <!-- 分页器 -->
      <div class="page-count">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="6"
          :total="60"
        />
      </div>
    </div>
  </div>
  <cl-pop :show="show" @closePop="closePop">
    <PayPop />
  </cl-pop>
</template>

<script>
import search from '@/components/Search';
import { computed } from '@vue/reactivity';
import stations from '@/components/Subscribe/Stations';
import PayPop from 'components/Subscribe/PayPop';
import ClPop from 'components/ClPop'
import { onMounted, ref } from 'vue';
import {useClPop} from '@/Hooks'
export default {
  components: {
    search,
    stations,
    ClPop,
    PayPop,
  },

  setup() {
    const currentIndex = ref(0);
    const typeList = ['距离最近', '最优惠的'];
    const chooseType = index => (currentIndex.value = index);
    const {show, showPop, closePop}  = useClPop() 
    onMounted(() => {
      var map = new BMapGL.Map('map');
      map.centerAndZoom(new BMapGL.Point(116.331398, 39.897445), 12);
      //创建地址解析器实例
      var myGeo = new BMapGL.Geocoder();
      // 将地址解析结果显示在地图上，并调整地图视野
      myGeo.getPoint(
        '凤山县',
        function (point) {
          if (point) {
            map.centerAndZoom(point, 16);
            map.enableScrollWheelZoom(true); //开启鼠标缩放
            map.addOverlay(new BMapGL.Marker(point, { title: '凤山县' }));
          } else {
            alert('您选择的地址没有解析到结果！');
          }
        },
        '北京市'
      );
    });
    return {
      typeList,
      chooseType,
      currentIndex,
      
      show,
      showPop,
      closePop,
    };
  },
};
</script>

<style lang="less" scoped>
/deep/.is-active {
  background-color: @color !important;
}
/deep/.el-pagination.is-background .el-pager li:not(.is-disabled):hover {
  color: @color;
}
.noScroll {
  overflow: hidden;
  height: 100vh;
}
.tips {
  font-size: 21px;
  margin: 60px 0;
}
.tips2 {
  font-size: 21px;
  margin: 60px 0 40px;
}
.chooseBtn {
  width: 360px;
  height: 60px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #979797;
  margin-bottom: 60px;
  span {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #999;
  }
  .selected {
    background-color: @color;
    color: #fff;
  }
}
.page-count {
  padding-left: 113px;
  width: 100%;
  margin-bottom: 48px;
}
.container {
  display: flex;
  justify-content: space-between;
}
#map {
  width: 517px;
  height: 1023px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
</style>
