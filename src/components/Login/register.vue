<template>
  <div class="register" @click.self="clouse" v-if="show">
    <div class="box">
       <div class="info">
           <div class="title">注册账号</div>
           <!-- 姓名 -->
           <div class="name item">
             <span class="left">姓名</span>
             <div class="right">
                 <input type="text" placeholder="请输入">
             </div>
           </div>
           <!-- 密码 -->
           <div class="name item">
             <span class="left">密码</span>
             <div class="right">
                 <input type="text" placeholder="请输入">
             </div>
           </div>
           <!-- 验证码 -->
           <div class="name item">
             <span class="left">手机号</span>
             <div class="right" style="border: none; padding-left: 0;">
                 <div class="phone">
                   <input type="text" placeholder="手机号">
                 </div>
                 <div class="writeCode">
                   <input type="text" placeholder="请输入验证码">
                 </div>
                 <div class="getCode pointer">
                   获取验证码
                 </div>
             </div>
           </div>
       </div>
    </div>
 
  </div>
  
</template>

<script>
  import ClPop from 'components/ClPop';
  
  export default {
  components: {
    ClPop,
  },
    props: {
      show: {
        type: Boolean,
        require: true,
      }
    },
    setup(props,{emit}){
      const clouse = () => {
       emit('close')
      } 
      return {
        clouse
      }
    }
  }
</script>

<style lang="less" scoped>
 .register {
   width: 100vw;
   height: 100vh;
   position: fixed;
   background-color: rgba(0, 0, 0, .3);
   z-index: 99;
   display: flex;
   align-items: center;
   justify-content: center;
   left: 0;
   top: 0;
   .box {
     width: 1200px;
     background-color: #fff;
     overflow: hidden;
     height: 400px;
     .info {
       width: 504px;
       margin: auto;
       .title {
          color: #2A364E ;
          font-size: 24px;
          margin: 40px 0;
          text-align: center;
       }
       .item {
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 24px;
         .right {
           width: 376px;
           height: 36px;
           border-radius: 4px;
           border: 1px solid #ddd;
           display: flex;
           align-items: center;
           padding-left: 12px;
           justify-content: space-between;
           input {
             font-size: 14px;
             width: 100%;
           }
           .phone {
             border: 1px solid #ddd;
             border-radius: 4px;
             height: 100%;
             display: flex;
             align-items: center;
             padding-left: 12px;
             width: 158px;
           }
           .writeCode {
             height: 100%;
             text-align: center;
             display: flex;
             align-items: center;
             justify-content: center;
             width: 114px;
             border: 1px solid #ddd;
             border-radius: 4px;
             input {
               text-align: center;
               font-size: 14px !;
             }
           }
           .getCode {
             height: 100%;
             text-align: center;
             display: flex;
             align-items: center;
             justify-content: center;
             width: 96px;
             color: @color;
             border: 1PX solid @color;
             border-radius: 4px;
             font-size: 14px;
             white-space: nowrap;
           }
         }
       }
     }
   }
 }

</style>