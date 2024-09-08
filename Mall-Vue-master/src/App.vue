<template>
  <div id="app">
    <Header v-if="excludeRoutess.indexOf($route.name) == -1"></Header>

    <router-view   v-if="isReload" ></router-view>
    <!-- 部分路由不应该包含这个Footer -->
    <Footer v-if="excludeRoutes.indexOf($route.name) == -1"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
export default {
  name: 'App',
  provide(){
    return{
        reload: this.reload
    }
  },
  data () {
    return {
      isReload:true,
      excludeRoutes: ['HomeIndex', 'MyAddress', 'AddAddress', 'MyOrder', 'MyShoppingCart','Orders','Login','SignUp'],
       excludeRoutess: ['Login','SignUp']


    };
  },
  methods:{
        reload(){
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isReload = true
        });
    }
  },
  components: {
    Header,
    Footer,

  }
};
</script>
