<template>
  <div>
      <el-menu
      style="min-height: calc(100vh - 50px);width: 200px;height:950px;font-weight: bold"
      background-color="#334960"
      text-color="white"
      :default-active="path"
      router
    >
      <el-menu-item index="/index">
        <i class="el-icon-house"></i>
        <span>系统主页</span>
      </el-menu-item>
       <el-menu-item index="/record">
        <i class="el-icon-notebook-1"></i>
        <span>访问记录</span>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-user"></i>
          <span >用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/userinfo">用户信息管理</el-menu-item>
          <el-menu-item index="/address">地址管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <i class="el-icon-box"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product">商品信息管理</el-menu-item>
          <el-menu-item index="/category">商品分类管理</el-menu-item>
          <el-menu-item index="/collections">收藏商品管理</el-menu-item>
          <el-menu-item index="/wantbuyinfor">购物车管理</el-menu-item>
          <el-menu-item index="/notice">商品描述管理</el-menu-item>
          <el-menu-item index="/footprints">足迹管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <i class="el-icon-shopping-cart-full"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/useraddr">等待发货管理</el-menu-item>
          <el-menu-item index="/userwallet">发货中管理</el-menu-item>
          <el-menu-item index="/collection">确认发货管理</el-menu-item>
          <el-menu-item index="/refund">退款管理</el-menu-item>
          <el-menu-item index="/order">等待评价</el-menu-item>
          <el-menu-item index="/comment">评价管理</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="/feedback">
        <i class="el-icon-chat-line-round"></i>
        <span>用户反馈</span>
      </el-menu-item>
        <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1808055811&site=qq&menu=yes" style="text-decoration: none;color: white">
      <el-menu-item>
          <i class="el-icon-phone"></i>
          <span>在线客服</span>
      </el-menu-item>
        </a>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {
      path: this.$route.path,
      isCollapse: false,

    }
  },
  methods: {
    handleOpen() {
      this.$parent.handleOpen();
    },
    handleClose() {
      this.$parent.handleClose();
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  }
}
</script>
<style>
/*.toggle-button {*/
/*  background-color: #c8bfe7;*/
/*  font-size: 25px;*/
/*  color: #fff;*/
/*  text-align: center;*/
/*  letter-spacing: 0.2em;*/
/*  cursor: pointer;*/
/*}*/

</style>
