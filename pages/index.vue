<template>
<!-- 首页 -->
  <div class="container">
    <!-- 幻灯片 -->
    <!-- 使用Element-ui的幻灯片组件el-carousel实现轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key= "index">
        <!-- 在模板中使用$axios.defaults.baseURL替换图片地址 -->
        <div class="banners-image" 
        :style="`background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
                background-size:contain contain;`"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

export default {
  data(){
    return {
      //轮播图数据
      banners: [], //轮播图数据
    }
  },
  // 钩子函数
  // 使用this.$axios请求后台轮播图接口
  mounted () {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      console.log(res)
      const {data} = res.data;
      this.banners = data;
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  min-width: 1000px;
  margin:0 auto;
  position:relative;
  
  // 使用了scoped属性，如果要引用第三方的组件，需要修改组件中的class，墙面必须要加上/deep/
  /deep/ .el-carousel__container {
    height:700px;

    .banners-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

