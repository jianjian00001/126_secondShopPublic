<template>
<div>
 <el-menu
   style="width:1057px;margin-left: 349px;"

  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link to="orders">等待发货<el-badge :value="total" class="item"></el-badge></router-link></el-menu-item>

  <el-menu-item index="3" ><router-link to="consignment">发货中<el-badge :value="totals" class="item"></el-badge></router-link></el-menu-item>
  <el-menu-item index="4"><router-link to="Receipt">确认收货<el-badge :value="totalss" class="item"></el-badge></router-link></el-menu-item>
  <el-menu-item index="5"><router-link to="Assess">等待评价<el-badge :value="totalsss" class="item"></el-badge></router-link></el-menu-item>
   <el-menu-item index="6"><router-link to="Refund">等待退款/退货<el-badge :value="totalssss" class="item"></el-badge></router-link></el-menu-item>
</el-menu>
<router-view></router-view>
</div>
</template>
<script>
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
  export default {
    name:"BlogHeader",
    data() {
      return {
        id:this.$store.state.userInfo.id,
        activeIndex: '1',
        activeIndex2: '1',
        total: 0,
        totals: 0,
        totalss: 0,
        totalsss: 0,
        totalssss: 0,
      };
    },
    methods: {

      lode() {
      axios.get("http://localhost:8888/master/finds/" +this.id, {

      }).then(res => {
        console.log(res);

        this.total = res.data.data.total
      })

    },

lodess() {
      axios.get("http://localhost:8888/confirm/finds/" +this.id, {

      }).then(res => {
        console.log(res);

        this.totals = res.data.data.total
      })

    },

    lodes() {
      axios.get("http://localhost:8888/receipt/finds/" +this.id, {

      }).then(res => {
        console.log(res);

        this.totalss = res.data.data.total
      })

    },
    lodesss() {
      axios.get("http://localhost:8888/assess/finds/" +this.id, {

      }).then(res => {
        console.log(res);

        this.totalsss = res.data.data.total
      })

    },

     lodessss() {
      axios.get("http://localhost:8888/refund/finds/" +this.id, {

      }).then(res => {
        console.log(res);

        this.totalssss = res.data.data.total
      })

    },

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
     created() {
    this.lode()
    this.lodes()
    this.lodess()
    this.lodesss()
    this.lodessss()
     },
     computed:{
        ...mapState(['userInfo', 'shoppingCart']),
     },
     store
  }
</script>

<style scoped>

</style>
