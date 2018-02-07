<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food,index) in item.foods" class="food-item" :key="index">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div>
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span>￥{{food.price}}</span>
                  <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
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
  @import "../../common/stylus/mixin.styl"
  .goods
    display: flex
    position: absolute
    top: 174px
    width: 100%
    bottom: 46px
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px//等分，内容缩放，站位空间
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table//垂直居中
        width: 56px
        height: 54px
        padding: 0 12px
        line-height: 14px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7,17,27,0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        background: #f3f5f7
</style>
