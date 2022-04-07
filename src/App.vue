<template>
  <tabbar v-show="$route.meta.showHeader"></tabbar>
  <router-view/>
   <v-foot v-show="$route.meta.showFooter"></v-foot>
</template>
  <script>
    import VFoot from 'components/Footer'
    import Tabbar from 'components/Tabbar'
    export default {
      components:{
        VFoot,
        Tabbar
      }
    }
  </script>
<style lang="less">
    
</style>
