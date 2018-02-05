import Vue from 'vue';
import Router from 'vue-router';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // 问题：如何打开页面时默认进入/goods，即/goods为首页，但地址不是/而是/goods
    {path: '/goods', components: {default: goods}},
    {path: '/ratings', components: {default: ratings}},
    {path: '/seller', components: {default: seller}}
  ],
  mode: 'history'
});
