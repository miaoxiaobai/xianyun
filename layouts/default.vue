<template>
  <div>
    <!-- 头部组件 -->
    <Header/>

    <!-- 相当于router-view -->
    <nuxt />

    <!-- 底部组件 -->
    <Footer/>

  </div>
</template>

<script>
//导入头部组件
import Header from '@/components/header.vue'

//导入底部组件
import Footer from '@/components/footer.vue'

export default {
  //注册头部
  components: {
    Header,
    Footer
  }
}
</script>


<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

ul, li, ol {
  list-style: none;
}

a {
  color: inherit;
  text-decoration:none;
}

em,i {
  font-style:normal;
}
</style>
