<template>
  <div class="container">
    <el-backtop  :bottom="10" :right="0">
  <div
      class="t1t"
    >
      返回顶部
    </div>
 </el-backtop>
    <!-- <div class="containers">
    <el-input placeholder="请输入内容"  class="input-with-select">

    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </div> -->
    <Search><div></div></Search>    <!-- slot的作用 -->
    <HomeNav></HomeNav>
    <div class="fixed_div1"><img src="@/assets/hb.png" width="105px" height="120px"></div>
      <div  class ="fixed_div"  style ="box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14);border-radius: 15px;background: rgb(243, 197, 197);" >
        <router-link to="/orders" style="color: rgb(46, 46, 45);"  >
       <div class="oo" >
         <el-tooltip class="item" effect="dark" content="我的订单" placement="left" >
        <i class="el-icon-tickets" style="font-size:36px;"  ></i>

         </el-tooltip>

         </div>
</router-link>


          <div class="oo1" >
         <el-tooltip class="item" effect="dark" content="App联系15278504794" placement="left" >
        <i class="el-icon-mobile-phone
" style="font-size:36px;color: rgb(46, 46, 45);"  ></i>
         </el-tooltip>
         </div>
 <router-link to="/home/myShoppingCart" style="color: rgb(46, 46, 45);"  >
          <div class="oo2" >
         <el-tooltip class="item" effect="dark" content="我的收藏" placement="left" >
        <i class="el-icon-star-off" style="font-size:36px;"  ></i>
         </el-tooltip>
         </div>

 </router-link>

         <div class="oo3" >
         <!-- <el-tooltip class="item" effect="dark" content="erm.url" placement="left" >
        <i class="el-icon-copy-document" style="font-size:36px;color: rgb(46, 46, 45);"  ></i>
         </el-tooltip> -->
         <Dropdown  placement="left">
           <i class="el-icon-copy-document" style="font-size:36px;color: rgb(46, 46, 45);"  ></i>
           <DropdownMenu slot="list">
             <p style="font-size:16px;margin-left: 18px;font-weight: bold;">下载App</p>
             <img src="@/assets/jf.png" width="100px" height="90px">
           </DropdownMenu>
         </Dropdown>
         <!-- <el-popover
    placement="left"
    title="标题"
    width="200"
    trigger="hover"
    :content="erm.url">
     <i class="el-icon-copy-document" slot="reference" style="font-size:36px;color: rgb(46, 46, 45);"  ></i>
  </el-popover> -->
         </div>
          </div >
    <!-- 商品显示区域 -->
    <div class="content">
      <!-- 秒杀 -->
      <div class="seckill">
        <!-- 头部 -->
        <div class="seckill-head">
          <div class="seckill-icon">
            <img src="static/img/index/clock.png">
          </div>
          <div class="seckill-text">
            <span class="seckill-title">限时秒杀</span>
            <span class="seckill-remarks">总有你想不到的低价</span>
          </div>
          <!-- <div class="count-down">
            <span class="count-down-text">当前场次</span>
            <span class="count-down-num count-down-hour">{{ seckillsHours }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-minute">{{ seckillsMinutes }}</span>
            <span class="count-down-point">:</span>
            <span class="count-down-num count-down-seconds">{{ seckillsSeconds }}</span>
            <span class="count-down-text">后结束抢购</span>
          </div> -->

        </div>
        <!-- 内容 -->

<div class="ff">
  <div v-for="admin in filteredBlogs.slice(0,28)" :key="admin.productId"  border class="ss"  style="width: 100%" >
    <!-- <router-link v-bind:to="'/blog/'+admin.productId"> -->
     <router-link v-bind:to="'/goodsDetail/'+admin.productId" >
   <div class="sss" @click="onSubmits(admin)">
    <v-card
        class="mx-auto"
        max-width="344"

      >

      <div class="ee" >
         <img :src="admin.productImage" width="300" height="250"/>
         <router-link v-bind:to="'/goodsList/'+admin.twoCategoryId"><div class="more"><span class="kkw1">找 相 似</span></div></router-link>
      </div>

        <v-card-text>
          <p class="swq" style="font-size:23px;font-weight:bold;margin-left:7px;margin-top:4px;">
            ￥{{admin.productPrice}}.00
          </p>
         <p style="color: rgb(46, 46, 46);font-size:13px;margin-left:13px;margin-top:4px;word-wrap:break-word;word-break:break-all;width:273px;height:40px;">{{admin.productName}}</p>
        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>

        </v-card-title>


      </v-card>
      <div class="gt"><img src="@/assets/ym.png" ><img src="@/assets/cf.png" height="19"><div class="qf"><span>{{admin.productHome}}</span></div> </div>
<div class="rt"><router-link v-bind:to="'/promptly/'+admin.productId">
      <div class="bv"><img src="@/assets/mm.png"></div>
      <el-button  size="mini" style="width:70px; background: coral;color:#fff;margin-top:6px;margin-right:13px;"> <span style=" float:right; margin-left: 20px;" >立即购买</span></el-button>
</router-link><router-link v-bind:to="'/goodsDetail/'+admin.productId">
      <el-button  size="mini" style="width:85px; background: coral;color:#fff;margin-top:6px;margin-right:12px;"> <span style=" float:right; margin-left: 20px;" >加入购物车</span></el-button>
</router-link></div>
</div>

</router-link>
  </div>

<div class="fy">


<!-- <el-row :gutter="20" class="userindex-list">
      <el-col :span="24" class="userindex-page-box">
         <el-pagination v-model:currentPage="currentPage" :page-sizes="[28, 56, 84, 112]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
      </el-col>
    </el-row> -->
    </div>

    <div class="rf">
    <div class="llsss"><div class="wq">有好货</div><div class="qww"><img src="@/assets/vgs.png"></div></div>
    <div v-for="(item,index) in admin.slice(28,32)" :key="index"  class="llss">
    <router-link v-bind:to="'/goodsDetail/'+item.productId">
    <div class="ee">
   <img :src="item.productImage" width="300" height="250"/>
   <div class="more"><router-link v-bind:to="'/promptly/'+item.productId"><span class="kkw">立 刻 购 买 </span></router-link>
    <el-divider direction="vertical" class="ed"></el-divider>
    <router-link v-bind:to="'/goodsList/'+item.twoCategoryId">
<span class="kkws">找 相 似</span>
    </router-link>
   </div>
   </div>
   <div class="okss">{{item.productName}}</div>
   <div>
     <span class="sswws">￥</span>
   <span class="ssws">{{item.productPrice}}</span>
   </div>
    </router-link>
  </div>

    </div>

    <div class="rff">
       <div class="llsss"><div class="wq">品牌精选</div><div class="qww"><img src="@/assets/vg.png"></div></div>
       <div class="hhh">
       <div v-for="(item,index) in admin.slice(33,41)" :key="index"  class="llss">
        <router-link v-bind:to="'/goodsDetail/'+item.productId">
   <div class="ee">
     <img :src="item.productImage" width="300" height="250"/>
     <div class="more"><router-link v-bind:to="'/promptly/'+item.productId"><span class="kkw">立 刻 购 买</span></router-link>
      <el-divider direction="vertical" class="ed"></el-divider>
    <router-link v-bind:to="'/goodsList/'+item.twoCategoryId">
<span class="kkws">找 相 似</span>
    </router-link>

     </div>

   </div>
   <div class="okss">{{item.productName}}</div>
   <div>
     <span class="sswws">￥</span>
   <span class="ssws">{{item.productPrice}}</span>
   </div>
   </router-link>
   </div>
   </div>
    </div>

    <!-- <div class="llss">品牌精选</div>
    <div v-for="(item,index) in admin.slice(5,13)" :key="index"  class="lls">

   <img :src="item.productImage" width="300" height="250"></img>
   <div class="oks">{{item.productName}}</div>
   <div>
     <span class="ssww">￥</span>
   <span class="ssw">{{item.productPrice}}</span>
   </div>
  </div> -->


    <!-- <div v-for="(item,index) in admin.slice(5,13)" :key="index"  >

   <img :src="item.productImage" width="300" height="250"></img>
   <div class="oks">{{item.productName}}</div>
   <div>
     <span class="ssww">￥</span>
   <span class="ssw">{{item.productPrice}}</span>
   </div>
  </div> -->



    <div class="te">

    <span style="margin-left: 45px;"><img src="@/assets/sx.png" width="257" height="110"></span>
<span style="margin-left: 162px;"><img src="@/assets/sx1.png" ></span>
  <span style="margin-left: 162px;"><img src="@/assets/sx3.png" ></span>
  <span style="margin-left: 162px;"><img src="@/assets/sx2.png" width="257" height="110"></span>
  </div>

</div>

      </div>

    </div>

  </div>

</template>

<script>
import Search from "@/components/Search";
import HomeNav from "@/components/nav/HomeNav";
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
export default {
  name: "Index",
  // props:{
  //  sreachs:{
  //    type: String,
  //    default:''
  //  },
  // },

  created() {
    this.lode();
    //  const  _this = this
    // this.$axios.get('http://localhost:8888/info/findAll').then(function (resp) {
    //     _this.admin = resp.data

    //     console.log(resp);
    //   })
    // this.loadSeckillsInfo();
    // this.loadCarouselItems();
    // this.loadComputer();
    // this.loadEat();
    // this.loadShoppingCart();
  },
  // mounted() {
  //   const father = this;
  //   this.setIntervalObj = setInterval(function () {
  //     father.REDUCE_SECKILLS_TIME();
  //   }, 1000);
  // },
  data() {
    return {
     product:[],
      search: "",
      currentPage: 1,
      pageSize: 58,
      total: 0,
      admin: [],
      ids:this.$store.state.userInfo.id,
      erm:[
        {
          url:require("@/assets/f4.png"),
        }
      ],
      search: "",
      src: "https://cdn.vuetifyjs.com/images/cards/forest-art.jpg",

      setIntervalObj: null,
    };
  },
  methods: {

    onSubmits(admin) {
      admin.customerId=this.ids
      this.product=admin;


          let _this = this;
          axios
            .post("http://localhost:8888/img/add", this.product)
            .then(function (response) {
              console.log(this.product)
            });

      },




    lode() {
      axios
        .get("http://localhost:8888/info/page", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res);
          this.admin = res.data.data.records;
          this.total = res.data.data.total;
        });
    },

    // btn: function () {
    //   var search = this.search;
    //   if (search) {
    //     this.searchData = this.products.filter(function (product) {
    //       console.log(product);
    //       return Object.keys(product).some(function (key) {
    //         console.log(key);
    //         return String(product[key]).toLowerCase().indexOf(search) > -1;
    //       });
    //     });
    //   }
    // },
    // ...mapActions([
    //   "loadSeckillsInfo",
    //   "loadCarouselItems",
    //   "loadComputer",
    //   "loadEat",
    //   "loadShoppingCart",
    // ]),
    // ...mapMutations(["REDUCE_SECKILLS_TIME"]),

    handleSizeChange(pageSize) {
      //改变每页的个数触发
      this.pageSize = pageSize;
      this.lode();
    },
    handleCurrentChange(pageNum) {
      //改变当前页码触发
      this.currentPage = pageNum;
      this.lode();
    },
  },
  computed: {
    filteredBlogs: function () {
      return this.admin.filter((admin) => {
        return admin.productName.match(this.search);
      });
    },
    ...mapState(['userInfo', 'shoppingCart']),
    // ...mapState(["seckills", "computer", "eat"]),
    // ...mapGetters(["seckillsHours", "seckillsMinutes", "seckillsSeconds"]),
  },
  components: {
    Search,
    HomeNav,
  },

  // destroyed() {
  //   clearInterval(this.setIntervalObj);
  // },
store
};
</script>

<style scoped>
.container {
  background-color: #f6f6f6;
}
.content {
  width: 1600px;
  margin: 0px auto;
}
/*****************************秒杀专栏开始*****************************/
/*秒杀专栏*/
.seckill {
  width: 100%;
  height: 5200px;
  margin: 15px auto;
  background-color: #fff;
}
.seckill-head {

  width: 100%;
  height: 50px;
  background-color: #e01222;
}
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
.seckill-text {
  width: 300px;
  height: 100%;
  float: left;
}
.seckill-text .seckill-title {
  font-size: 22px;
  line-height: 50px;
  color: #fff;
}
.seckill-text .seckill-remarks {
  margin-left: 5px;
  font-size: 10px;
  color: #fff;
}
/*倒计时*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}

.seckill-content {
  width: 100%;
  height: 280px;
}
.seckill-item {
  width: 183px;
  height: 250px;
  margin-top: 15px;
  margin-left: 15px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
  float: left;
}
.seckill-item-img {
  width: 160px;
  height: 160px;
  margin: 0px auto;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}
.seckill-item-img img {
  width: 130px;
  height: 130px;
  margin-left: 15px;
  margin-top: 15px;
  transition: margin-top 0.3s;
}
.seckill-item-img:hover img {
  margin-top: 6px;
  transition: margin-top 0.3s;
}
.seckill-item-info {
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 12px;
  color: #009688;
}
.seckill-item-info i:first-child {
  font-size: 14px;
}
.seckill-price {
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
/*****************************秒杀专栏结束*****************************/

/*****************************商品专栏开始*****************************/
.item-class {
  width: 100%;
  height: 470px;
  margin-top: 15px;
  background-color: #fff;
}
.item-class-head {
  width: 100%;
  height: 50px;
  background-color: #4488a7;
}
.item-class-eat-head {
  background-color: #ecb226;
}
.item-class-head ul {
  list-style: none;
  float: right;
  margin-right: 30px;
  line-height: 50px;
}
.item-class-head a {
  padding: 6px;
  margin-left: 15px;
  font-size: 12px;
  background-color: #6da6be;
  border: 1px solid #6da6be;
  text-decoration: none;
  color: #fff;
}
.item-class-eat-head a {
  background-color: #eeb955;
  border: 1px solid #eeb955;
}
.item-class-head a:hover {
  border: 1px solid #fff;
}
.item-class-head li {
  float: left;
}
.item-class-title {
  font-size: 25px;
  line-height: 50px;
  color: #fff;
  margin-left: 15px;
}
.item-class-content {
  width: 49%;
  cursor: pointer;
  border-right: 1px solid #ccc;
  margin-left: 0.9%;
  /*background-color: #cff;*/
  float: left;
}
.item-class-content:nth-child(odd) {
  border: none;
}
.item-content-top {
  width: 100%;
  height: 260px;
}
.item-big-img {
  width: 180px;
  height: 260px;
  overflow: hidden;
  float: left;
}
.item-big-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-big-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.item-four-img {
  width: 303px;
  margin-left: 8px;
  float: left;
}
.item-four-detail img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-four-detail:hover img {
  margin-left: -6px;
  transition: margin-left 0.3s;
}
.item-four-detail {
  width: 152px;
  height: 130px;
  margin-left: -1px;

  float: left;
}
.item-four-detail:first-child {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.item-four-detail:last-child {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.item-four-detail-text {
  width: 50px;
  margin-left: 5px;
  margin-top: 15px;
  float: left;
}
.item-four-detail-img {
  width: 96px;
  margin-top: 15px;
  overflow: hidden;
  float: left;
}
.item-four-detail-img img {
  margin-left: 5px;
  width: 90px;
}
.pt_bi_tit {
  font-weight: bold;
  font-size: 12px;
  color: #4488a7;
}
.pt_bi_tit-eat {
  color: #ecb127;
}
.pt_bi_promo {
  color: #00695c;
}
.item-content-bottom {
  width: 100%;
  margin-top: 8px;
}
.item-content-bottom-img {
  width: 156px;
  margin-right: 8px;
  overflow: hidden;
  float: left;
}
.item-content-bottom-img img {
  margin-left: 0px;
  transition: margin-left 0.3s;
}
.item-content-bottom-img:hover img {
  margin-left: -15px;
  transition: margin-left 0.3s;
}
.ff {
  width: 100%;
  height: 3500px;
  margin: 0 auto;
}

.sss {
  width: 300px;
  height: 430px;
  margin-top: 40px;
  margin-left: 80px;
  float: left;
  /* border: 1px solid #d1cdcd; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14)
}

.ss {
  width: 1000%;
}
.containers {
  padding-top: 15px;
  margin: 0px auto;
  margin-bottom: 15px;
  width: 700px;
}
.sreach {
  margin: 5px 0px;
}
.input-with-select {
  width: 700px;
  background-color: #fff;
}
.swq {
  color: rgb(238, 82, 25);
}
.gt {
  margin-left: 13px;
  margin-top: 22px;
}
.rt {
  float: right;
}
.bv {
  float: left;
  margin-top: 11px;
  margin-right: 84px;
}
.qf {
  margin-right: 13px;
  float: right;
}
.fy {
  margin-left: 600px;
  padding-top: 3400px;
}
.te {
  margin-top: 500px;
}
.ii {
  width: 1800px;
}
  .fixed_div {
            position : fixed ;
            left : 1710px ;
             top: 500px;
            width : 40px ;
            height: 230px;
         }
          .fixed_div1 {
            position : fixed ;
            left : 1680px ;
             top: 400px;
            width : 50px ;
            height: 200px;
         }
         .oo{
           width: 50px;
           padding-top: 15px;
          margin-left: 2px;
           height: 5px;

         }
          .oo1{
           width: 50px;
padding-top: 55px;

          margin-left: 2px;
           height: 5px;

         }
          .oo2{
           width: 50px;
padding-top: 55px;
          margin-left: 2px;
           height: 5px;

         }
         .oo3{
           width: 50px;
padding-top: 55px;
          margin-left: 2px;
           height: 5px;

         }
         .xx{
           margin-right: 20px;

           /* background: rgb(243, 197, 197); */
           /* color: white; */
         }
       .lls{
         margin-top: 80px;
         margin-left: 70px;
         width: 300px;
        float: left;
       }
         /* .lls{
       margin-right: 50px;
  margin-left: 50px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14)
         }
         .llss{
            margin-right: 50px;
  margin-left: 50px;
           height: 50px;
           background: rgb(243, 241, 241);

         box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) */

  /* box-shadow: 0px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14) */
.llss{
  margin-left: 81px;
  font-size: 24px;
    color: #111;
    font-weight: bold;
    line-height: 24px;
    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
    float: left;

}
.oks{
  width: 100%;
  margin-top: 9px;

    height: 44px;
    font-size: 16px;
    color: #111111;
    font-weight: normal;
    transition: color 0.3s;
    overflow: hidden;
}

.lls img {
  display: block;
    border-radius: 12px;
}
.ssw{
  margin-top: 20px;
  float: left;
    color: #F40;
    font-size: 24px;
    height: 22px;
    line-height: 22px;
    font-weight: bold;
}
.ssww{
  margin-top: 20px;
  float: left;
    color: #F40;
    font-size: 15px;
    height: 22px;
    line-height: 32px;
    font-weight: bold;
}







.llss{
         margin-top: 40px;
         margin-left: 81px;
         width: 300px;
         float: left;
       }

.llsss{

  height: 24px;
  margin-left: 81px;
  font-size: 24px;
    color: #111;
    font-weight: bold;
    line-height: 24px;
    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;

}
.okss{
  width: 100%;
  margin-top: 9px;

    height: 44px;
    font-size: 16px;
    color: #111111;
    font-weight: normal;
    transition: color 0.3s;
    overflow: hidden;

}

.llss img {
  display: block;
    border-radius: 12px;
}
.ssws{
  margin-top: 20px;
  float: left;
    color: #F40;
    font-size: 24px;
    height: 22px;
    line-height: 22px;
    font-weight: bold;
}
.sswws{
  margin-top: 20px;
  float: left;
    color: #F40;
    font-size: 15px;
    height: 22px;
    line-height: 32px;
    font-weight: bold;
}


.rf{
  width: 100%;
  height: 500px;
}
.rff{
  width: 100%;
  height: 500px;
}
.qww{
  padding-top: 1px;
  margin-left: 5px;


}
.qww img{
  margin-left: 15px;
}
.wq{
  float: left;
}
/* .hhh :hover{
 border: 1px solid red;
} */
.rff .ee{
  position: relative;
  overflow: hidden;
}
.rff .ee:hover .more{
  top:215px;

}
.rff .ee .more{
  position: absolute;
  top: 250px;
  width: 300px;
  height: 35px;
  background: #ee7546;
  opacity: 0.8;
  transition: 0.3s;


}


.rf .ee{
  position: relative;
  overflow: hidden;
}
.rf .ee:hover .more{
  top:215px;

}
.rf .ee .more{
  position: absolute;
  top: 250px;
  width: 300px;
  height: 35px;
  background: #ee7546;
  opacity: 0.8;
  transition: 0.3s;


}


.sss .ee{
  position: relative;
  overflow: hidden;
}
.sss .ee:hover .more{
  top:215px;

}
.sss .ee .more{
  position: absolute;
  top: 256px;
  width: 300px;
  height: 35px;
  background: #ee7546;
  opacity: 0.8;
  transition: 0.3s;


}


.kkw{
  font-size: 15px;
  margin-left: 40px;
  color: #fff;
   font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
   font-weight: bold;
}
.kkws{
  font-size: 15px;
  margin-left: 35px;
  color: #fff;
   font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
   font-weight: bold;
}
.kkw1{
  font-size: 15px;
  margin-left: 120px;
  color: #fff;
   font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
   font-weight: bold;
}
.ed{
  margin-left: 30px;
  height: 100%;
  color: rgb(212, 211, 211);
}
.sss:hover{
  border: 2px solid #ee7546;
 box-shadow: 0 4px 8px #ee7546, 0 0 12px #ee7546
}





 .okss:hover{
  color: #ee7546;
  font-size: 17px;
/* box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14) */
}
.t1t{

      height: 100%;
      width: 100%;
      border-radius: 50%;
      font-size: 13px;
      background-color: #f2f5f6;
      box-shadow: 0 0 6px rgba(0,0,0, .12);
      text-align: center;

      color: #1989fa;
      padding: 4px;

}
/*****************************商品专栏结束*****************************/
</style>
