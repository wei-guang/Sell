<template>
    <div class="cartcontrol">
      <transition name="fade">
        <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart"></div>
      </transition>
      <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    name: 'cartcontrol',
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        console.log('ck');
        if (!this.food.count) {
         // this.food.count = 1; // 给props中观测的值添加一个不存在的值是检测不到的，正确方法如下：
          Vue.set(this.food, 'count', 1);
        } else {
            this.food.count++;
        }
      },
      decreaseCart() {
        if (this.food.count > 0) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size: 0
  .cart-decrease, .cart-add
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0,160,220)
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height:24px
    text-align: center
    font-size: 10px
    color: rgb(147,153,159)
//.cart-add
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
    transform: translate3d(2px,0,0)
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
