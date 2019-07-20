<template>
  <!-- 首页 -->
  <div class="container">
    <el-row type="flex" justify="space-between" class="main">
      <!-- logo -->
      <div class="logo">
        <!-- nuxt-link 相当于 rouder-link 点击可跳转 -->
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>

      <!-- 菜单 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登录信息 -->
      <div>
        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>

        <div v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              <!-- 头像 -->
              <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt="">
                <!-- 昵称 -->
                {{$store.state.user.userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted () {
    // store中的数据每个模块都是单独的数据，读取时候需要使用模块名字区分开
    // console.log(this.$store.state.user.userInfo.user.nickname)
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 60px;
  box-shadow: 0 3px 3px #ccc;
  // 相对定位
  position:relative;
  // 层级
  //z-index:999;
}

.main {
  width: 1000px;
  margin: 0 auto;
  line-height: 60px;
}

.logo {
  // 外边距
  margin-right: 20px;
  img {
    width: 165px;
    height: 42px;
    margin-top: 9px;
  }
}

.navs {
  flex: 1;
  a {
    height: 60px;
    display: block;
    padding: 0 20px;
    box-sizing: border-box;

    // 相当于在a标签里拼接一个hover  -- a:hover
    &:hover {
      color: #409eff;
      border-bottom: 5px #409eff solid;
    }
  }

  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
}

.el-dropdown-link {
    img {
        width: 36px;
        height: 36px;
        vertical-align: middle;
    }
}
</style>

