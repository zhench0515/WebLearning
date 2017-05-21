<template>
  <div>
    <!--<Headerbar></Headerbar>-->
    <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Footerbar from './components/details/Footer'

export default {
  // name: 'app'
  components: {
    Footerbar
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  width: 100%;
  background-color: #f2f2f2;
  position: relative;
  padding-bottom: 120px;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
