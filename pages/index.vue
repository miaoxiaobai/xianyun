<template>
  <!-- 首页 -->
  <div class="container">
    <!-- 幻灯片 -->
    <!-- 使用Element-ui的幻灯片组件el-carousel实现轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <!-- 在模板中使用$axios.defaults.baseURL替换图片地址 -->
        <div
          class="banners-image"
          :style="`background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
                background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索框 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
          v-for="(item,index) in tabs" 
          :key="index" 
          @click="handleClick(index)"
          :class="{ active: current === index}">
            <i>{{item.title}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="tabs[current].placeholder"/>
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
    
  </div>
</template>

<script>
// 导入axios
import axios from "axios"

export default {
  data() {
    return {
      //轮播图数据
      banners: [], 
      
      //搜索栏数据
      tabs: [
        { title: '攻略', placeholder: "搜索城市" },
        { title: '酒店', placeholder: "请输入城市搜索酒店" },
        { title: '机票', placeholder: "" ,}
      ],
      // 显示当前的索引
      current:0
    }
  },
  //定义事件
  methods: {
    //切换tab栏时候触发
    handleClick(index){
      // 跳转air页面
      if(index === 2){
        this.$router.push("/air")
      }
      // console.log(this.current)
      this.current = index;
    }
  },
  // 钩子函数
  // 使用this.$axios请求后台轮播图接口
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    }).then(res => {
      console.log(res)
      const { data } = res.data
      this.banners = data
    })
  },

  // 定义方法
  // methods: {
  //   handleOption(index) {},
  //   handleSearch() {}
  // }
}
</script>

<style lang="less" scoped>
// 轮播图
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

// 搜索框
.banner-content{
        z-index:9;
        width:1000px;
        position:absolute;
        left:50%;
        top:45%;
        margin-left: -500px;
        border-top:1px transparent solid;

        .search-bar{
            width:552px;
            margin:0 auto;
        }

        .search-tab{
            .active{
                i{
                color:#333;
                }
                &::after{
                background: #eee;
                }
            }

            span{
                width:82px;
                height:36px;
                display:block;
                position: relative;
                margin-right:8px;
                cursor: pointer;

                i{
                position:absolute;
                z-index:2;
                display: block;
                width:100%;
                height:100%;
                line-height:30px;
                text-align:center;
                color:#fff;
                }

                &:after{
                position: absolute;
                left:0;
                top:0;
                display:block;
                content: "";
                width:100%;
                height:100%;
                border: 1px rgba(255,255,255,.2) solid;
                border-bottom: none;
                transform: scale(1.1,1.3) perspective(.7em) rotateX(2.2deg);
                transform-origin: bottom left;
                background: rgba(0,0,0,.5);
                border-radius:1px 2px 0 0;
                box-sizing:border-box;
                }
            }
        }

        .search-input{
            width:550px;
            height:46px;
            background:#fff;
            border-radius: 0 4px 4px 4px;
            border: 1px rgba(255,255,255,.2) solid;
            border-top:none;
            box-sizing: unset;

            input{
                flex:1;
                height:20px;
                padding: 13px 15px;
                outline: none;
                border:0;
                font-size:16px;
            }

            .el-icon-search{
                cursor :pointer;
                font-size:22px;
                padding:0 10px;
                font-weight:bold;
            }
        }
    }

</style>

