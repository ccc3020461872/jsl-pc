<template>
  <div class="real-name">
    <cl-pop :show="true" width="542px" height="485px">
      <div class="info">
        <div class="title">实名认证</div>
        <div class="form">
          <el-form label-position="right" style="max-width: 460px" label-width="100px">
            <el-form-item>
              <el-upload v-model="form.idCardImg">
                <div class="upload">
                  <img :src="idCardImg" alt />
                  <div class="loadbtn">
                    <i class="iconfont icon-shangchuan"></i>
                    <span>上传身份证照片</span>
                  </div>
                </div>
              </el-upload>
            </el-form-item>
            <div class="input">
              <div class="item">
                <el-form-item label="姓名">
                  <el-input v-model="form.name" />
                </el-form-item>
              </div>
              <div class="item">
                <el-form-item label="身份证号">
                  <el-input v-model="form.idCard" />
                </el-form-item>
              </div>
              <div class="item">
                <el-form-item label="性别">
                  <el-input v-model="form.gender" />
                </el-form-item>
              </div>
            </div>
          </el-form>
          <!-- 提交 -->
          <div class="btn">
            <el-button>
            提交
          </el-button>
          </div>
        </div>
      </div>
    </cl-pop>
  </div>
</template>

<script>
import {
  ClPop
} from 'components/ClPop'
import { reactive } from 'vue';
export default {
  components: {
    ClPop
  },
  setup() {
    const idCardImg = require('assets/imgs/idcardupload.png');
    const form = reactive({
      idCardImg: '',
      name: '',
      idCard: '',
      gender: '',
    })
    return {
      idCardImg,
      form
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-button {
  padding: 0 16px;
  background-color: @color;
  color: #fff;
  font-size: 14px;
}
// /deep/.el-form-item__content {
//   margin-left: 0 !important;
// }
.info {
  
  .title {
    padding-top: 16px;
    padding-left: 24px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .upload {
      margin-top: 15px;
      margin-bottom: 20px;
      transform: translateX(-20px);
      img {
        width: 177px;
        height: 121px;
      }
      .loadbtn {
        font-size: 14px;
        color: #666;
        text-align: center;
        margin: auto;
        margin-top: 20px;
        line-height: 32px;
        width: 140px;
        border-radius: 4px;
        border: 1px solid #dddddd;
      }
    }
    .input {
      .item {
        margin-bottom: 10px;
      }
    }
    .btn {
      
      margin-top: 35px;
    }
  }
}
</style>