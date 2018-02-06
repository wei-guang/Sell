<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from './components/header/header';
  const ERR_OK = 0;
  export default {
    name: 'App',
    components: {
      'v-header': header
    },
    data () {
      return {
        seller: {}
      };
    },
    created() {
      // 使用=>函数没事，用function（response）{ }就会报错。。。。
      this.$http.get('/api/seller').then((response) => {
        response = response.data;
        console.log(response);
        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller);
        }
      });
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  #app
    .tab
      display: flex
      width:100%
      height: 40px
      line-height: 40px
      //border-bottom: 1px solid rgba(7,17,27,0.1)
      border-1px(rgba(7,17,27,0.1))
      .tab-item
        flex: 1
        text-align: center
        &  > a
          display: block //点击整个标签都区域有反应，而不是只有字部分
          text-decoration: none //去掉下划线
          font-size: 14px  //字体大小
          color rgb(77,85,93)  //颜色
          &.active
            color: rgb(240,20,20)
</style>
