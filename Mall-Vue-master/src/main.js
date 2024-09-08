// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import "./axios"
 import './plugins/axios'
 import VDistpicker from 'v-distpicker'
 import BaiduMap from 'vue-baidu-map'
 Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'rq5oDC8X1qUcSwaL54YcplWNO4fpgvZg '
})

 Vue.component('v-distpicker', VDistpicker)
Vue.use(iView);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(store);
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="red"


    // +Math.random().toString(16).slice(2,8); //随机颜色
  }
})
/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
