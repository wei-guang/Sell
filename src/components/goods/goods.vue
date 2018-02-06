<template>
    <div class="goods">
      <div class="menu-wrapper"></div>
      <div class="foods-wrapper"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
      name: 'goods',
      props: {
        seller: {
          type: Object
        }
      },
      data: function () {
        return {
          goods: {}
        };
      },
      created: function() {
        this.$http.get('api/goods').then((response) => {
          response = response.data;
          if (response.errno === ERR_OK) {
            this.goods = response.data;
            console.log(this.goods);
          }
          });
      }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods
    display: flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px //等分，内容缩放，站位空间】
      width: 80px
      background: #f3f5f7
    .foods-wrapper
      flex: 0 0 80px
</style>
