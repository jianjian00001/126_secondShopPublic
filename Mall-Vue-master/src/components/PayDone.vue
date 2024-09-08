<template>
  <div>
    <router-link to="/orders">
    <div class="pay-done-box">
      <img src="static/img/pay-success.png">
      <div class="ww">点击我 , 查看订单</div>
    </div>
</router-link>
  </div>
</template>

<script>
export default {
  name: 'PayDone'
};
</script>

<style scoped>
.pay-done-box {
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ww{
  padding-top: 50px;
}
</style>
