<template>
  <div class="station" v-for="item in 6">
    <div class="left">
      <img :src="info.img" class="shopImg" alt />
      <div class="info">
        <!-- 站名 -->
        <div class="title">{{ info.title }}</div>
        <!-- 距离 -->
        <div class="distance ">{{ info.distance }}</div>
        <!-- 位置 -->
        <div class="position ">{{ info.position }}</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="right">
      <div class="ticket-info">
        <div class="name">
          <span>100元代金券</span>
          <span class="tips">?</span>
          </div>
      <div class="useTime "><span class="small">周一至周日全天可用·单次可用一张·仅限车检使用</span></div>
      <div class="save "><span class="small">共节省50元</span></div>
      </div>
      <div class="price">
         <div class="numb">￥50</div>
         <div class="buy pointer" @click="buyClick">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props,{emit}) {
    const info = {
      img: require('assets/imgs/state.png'),
      title: '梅岭安汽车摩托车年检站',
      distance: '1.1km',
      position: '福建省泉州市晋江市X318(梅岭路)'
    }
    const buyClick = () => {
      emit('doBuy')
    }
    return {
      info,
      buyClick
    }
  }
}
</script>

<style lang="less" scoped>
.station {
  width: 653px;
  height: 154px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  .left {
    display: flex;
    justify-content: space-between;
    .shopImg {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }

    .info {
      width: 197px;
      font-size: 14px;
      color: #181b21;

      .title {
        font-size: 16px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .distance {
        margin: 5px 0;
      }
      .position {
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .line {
    width: 1px;
    height: 80%;
    background-color: #c8c8c8;
    margin: 0 10px;
  }
  .right {
    width: 304px;
    height: 92px;
    background-color: #f8b500;
    color: #fff;
    font-size: 10px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-radius: 5px;
    justify-content: space-between;
    .ticket-info {
      width: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .price {
      width: 110px;
      height: 114px;
      background-color: @color;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .numb {
        font-size: 24px;
        margin-bottom: 6px;
      }
      .buy {
        width: 70px;
        line-height: 25px;
        background-color: #fff;
        color: #F08201;
        font-size: 12px;
        border-radius: 5px;
        text-align: center;
      }
    }
    .useTime {
      margin: 5px 0;
    }
    .name {
      font-size: 18px;
      display: flex;
      align-items: center;
      .tips {
        background-color: red;
        width: 14.5px;
        height: 14.5px;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    }
    .save {
      color: #181B21;
    }
  }
   .small {
      display: block;
      transform: scale(.8) translate(-11%);
    }
}
</style>