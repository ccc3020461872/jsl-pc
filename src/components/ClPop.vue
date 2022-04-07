<template>
  <div class="pop" v-if="show">
    <div class="container" :style="{width: width,height: height}">
      <div class="close" @click="closeClick">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { ref, toRefs } from "vue"

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    width: {
      type: String,
      defaulte: '1200px'
    },
    height: {
      type: String,
      default: '961px'
    }
  },
  setup(props, { emit }) {
    const { show, width, height } = toRefs(props)
    const closeClick = () => {

      emit('closePop')
    }
    return {
      closeClick,
      show,
      width,
      height
    }
  }
}
</script>

<style lang="less" scoped>
.pop {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  overflow: hidden;

  .container {
    width: 1200px;
    height: 961px;
    position: relative;
    margin: 120px auto;
    background-color: #fff;
      border-radius: 4px; 
  }
  .close {
    font-size: 12px;
    position: absolute;
    top: 10px;
    right: 12px;
    padding: 10px;
    transition: all 0.25;
  }
  .close:hover {
    color: @color;
  }
}
</style>