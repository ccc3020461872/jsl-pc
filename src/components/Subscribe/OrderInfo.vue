<template>
  <div class="info">
    <div class="title">购买信息填写：</div>
    <div class="code">
      <span>订单号</span>
      <span>9753975957935395</span>
    </div>
    <div class="form">
      <div class="left">
        <img :src="carCardImg" alt />
        <el-upload>
          <div class="uploadFile">
          <i class="iconfont icon-shangchuan"></i>
          <span>上传行驶证照片</span>
        </div>
        </el-upload>
      </div>
      <div class="right">
        <el-form :model="form" label-width="120px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="车主姓名">
                <el-input v-model="form.pName" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="车牌号码">
                <el-input v-model="form.cNum" />
              </el-form-item>
            </el-col>
          </el-row>
         
          <el-row>
            <el-col :span="12">
              <el-form-item label="车架号码">
                <el-input v-model="form.cjNum" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发动机号码">
                <el-input v-model="form.LEDnum" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="是否运营车辆">
                <el-input v-model="form.runCar" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="车辆类型">
                <el-input v-model="form.carType" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="注册日期">
                <el-date-picker
                  v-model="form.loginTime"
                  clear-icon="CircleClose"
                  type="date"
                  placeholder="2022-2-22"
                  :editable="false"
                  value-format="YYYY-MM-DD"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发证日期">
                <el-date-picker
                  v-model="form.certificateTime"
                  clear-icon="CircleClose"
                  type="date"
                  placeholder="2022-2-22"
                  :editable="false"
                  value-format="YYYY-MM-DD"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!-- <ul class="box">
          <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
          <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
          <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
          <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
           <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
           <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
           <li class="item">
            <div class="sub-title">车主姓名</div>
            <div class="input">
              <input type="text" />
            </div>
          </li>
        </ul>-->
      </div>
    </div>
    <div class="note">
      可上传照片识别信息，也可以不上传照片手动输入信息
    </div>
    <!-- 提交 -->
    <div class="btn">
       <el-button>提交</el-button>
    </div>
  </div>
</template>

<script>import { reactive, ref } from 'vue';

export default {
  setup() {
    const carCardImg = require('assets/imgs/carCard.png');
    const form = reactive({
      pName: '', //车主姓名
      cNum: '', //车牌号码
      cjNum: '',//车架号码
      LDENum: '', //发动机号码
      runCar: '', //是否运营车辆
      carType: '', //车辆类型
      loginTime: '', //注册日期
      certificateTime: '', //发证日期 
    })

    return {
      carCardImg,
      form
    }
  },
};
</script>

<style lang="less" scoped>
/deep/.el-icon {
  display: none !important;
}
/deep/.el-input__inner {
  padding-left: 10px;
}
/deep/.el-button {
  padding: 0 16px !important;
  background-color: @color;
  color: #fff;
}
.info {
  padding: 16px 21px 58px;
  .title {
    font-size: 16px;
    color: #333;
    margin-bottom: 42px;
  }
  .code {
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    width: 100%;
    span:first-child {
      color: #666;
      margin-right: 40px;
    }
  }
  .form {
    margin-top: 37px;
    display: flex;
    align-items: center;
    width: 100%;
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .item {
      display: flex;
      align-items: center;
      width: 48%;
      margin-bottom: 10px;
    }
    .left {
      width: 175px;
      margin-right: 22px;
      .uploadFile {
        width: 140px;
        line-height: 32px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        text-align: center;
        cursor: default;
        margin-top: 20px;
        .iconfont {
          margin-right: 8px;
        }
      }
    }
    .right {
      .sub-title {
        font-size: 14px;
        color: #585858;
        white-space: nowrap;
      }
      .input {
        width: 160px;
        height: 35px;
        border-radius: 2px;
        border: 1px solid #cccccc;
        margin-left: 5px;
        line-height: 35px;
        padding: 0 10px;
        input {
          width: 100%;
          font-size: 14px;
        }
      }
    }
  }
  .note {
    font-size: 14px;
    color: @color;
    margin-top: 8px;
  }
  .el-col {
    margin-bottom: 10px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
  }
}
</style>
