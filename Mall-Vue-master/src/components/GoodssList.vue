<template>
  <div>
    <div class="containers">
      <el-backtop  :bottom="10" :right="0">
  <div
     class="qee"
    >
      返回顶部
    </div>
 </el-backtop>
    <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
    <!-- <el-select v-model="search" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" :value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select> -->
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    </div>
    <GoodsListNavs></GoodsListNavs>
    <div class="container">
      <div class="bread-crumb">
        <Breadcrumb>
          <BreadcrumbItem to="/Index">
            <Icon type="ios-home-outline"></Icon> 首页
          </BreadcrumbItem>
          <BreadcrumbItem to="/goodsList?sreachData=">
            <Icon type="bag"></Icon> {{searchItem}}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <!-- 商品标签导航 -->
      <GoodsClassNav></GoodsClassNav>
      <!-- 商品展示容器 -->
      <div class="goods-box">
        <div class="as-box">
          <div class="item-as-title">
            <span>商品精选</span>
            <span>广告</span>
          </div>
          <div v-show="admin.length<0"></div>


          <div class="item-as" v-for="(item,index) in admind.slice(10,20)" :key="index" @click="onSubmits(item)" >
            <router-link v-bind:to="'/goodsDetail/'+item.productId">
            <div class="item-as-img">
              <img :src="item.productImage" width="159px" height="120px" alt="">
            </div>
            <div class="item-as-price">
              <span>
                <Icon type="social-yen text-danger"></Icon>
                <span class="seckill-price text-danger">{{item.productPrice}}</span>
              </span>
            </div>
            <div class="item-as-intro">
              <span>{{item.productName.substring(0,45)}}...</span>
            </div>
            <div class="item-as-selled">

            </div>
            </router-link>

          </div>
        </div>
        <div class="goods-list-box">

          <div class="ff">

          <div v-show="admin.length>0">
            <div class="ghh"><div class="jjs"><el-input class="jjs" v-model="price1" placeholder="￥">
              </el-input></div>
              <div class="jjss1"><span class="sw">-</span></div>
             <div class="jjss"> <el-input class="jjss" v-model="price2" placeholder="￥"></el-input></div>
      <el-button
        class="li"
        @click="Onclicks"
          >筛 选</el-button></div>
            <!-- 价格排序 -->
            <div class="box_top">
       <el-button class="el-icon-top" @click="index1s">价格升序</el-button>
      <el-button class="el-icon-bottom"  @click="indexs">价格降序</el-button>
          </div>
            <div v-for="admin in filteredBlogs" :key="admin"  border class="ss"  style="width: 100%" @click="onSubmits(admin)">
    <!-- <router-link v-bind:to="'/blog/'+admin.productId"> -->
     <router-link v-bind:to="'/goodsDetail/'+admin.productId">
   <div class="sss">
    <v-card
        class="mx-auto"
        max-width="344"

      >

         <div class="ee">
         <img :src="admin.productImage" width="300" height="250" />
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
  </div>


 <div v-show="admins.length>0">
   <div class="ghh"><div class="jjs"><el-input class="jjs" v-model="price1" placeholder="￥">
              </el-input></div>
              <div class="jjss1"><span class="sw">-</span></div>
             <div class="jjss"> <el-input class="jjss" v-model="price2" placeholder="￥"></el-input></div>
      <el-button
        class="li"
        @click="Onclick"
          >筛 选</el-button></div>
            <!-- 价格排序 -->
            <div class="box_top">
       <el-button class="el-icon-top" @click="index1">价格升序</el-button>
      <el-button class="el-icon-bottom"  @click="index">价格降序</el-button>
          </div>
            <div v-for="admins in admins"  :key="admins" border class="ss"  style="width: 100%" @click="onSubmits(admins)">
    <!-- <router-link v-bind:to="'/blog/'+admin.productId"> -->
     <router-link v-bind:to="'/goodsDetail/'+admins.productId">
   <div class="sss">
    <v-card
        class="mx-auto"
        max-width="344"

      >

         <div class="ee">
         <img :src="admins.productImage" width="300" height="250" />
         <router-link v-bind:to="'/goodsList/'+admins.twoCategoryId"><div class="more"><span class="kkw1">找 相 似</span></div></router-link>
      </div>


        <v-card-text>
          <p class="swq" style="font-size:23px;font-weight:bold;margin-left:7px;margin-top:4px;">
            ￥{{admins.productPrice}}.00
          </p>
         <p style="color: rgb(46, 46, 46);font-size:13px;margin-left:13px;margin-top:4px;word-wrap:break-word;word-break:break-all;width:273px;height:40px;">{{admins.productName}}</p>
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
      <div class="gt"><img src="@/assets/ym.png" ><img src="@/assets/cf.png" height="19"><div class="qf"><span>{{admins.productHome}}</span></div> </div>
<div class="rt"><router-link v-bind:to="'/promptly/'+admins.productId">
      <div class="bv"><img src="@/assets/mm.png"></div>
      <el-button  size="mini" style="width:70px; background: coral;color:#fff;margin-top:6px;margin-right:13px;"> <span style=" float:right; margin-left: 20px;" >立即购买</span></el-button>
</router-link><router-link v-bind:to="'/goodsDetail/'+admins.productId">
      <el-button  size="mini" style="width:85px; background: coral;color:#fff;margin-top:6px;margin-right:12px;"> <span style=" float:right; margin-left: 20px;" >加入购物车</span></el-button>
</router-link></div>
</div>

</router-link>
  </div>
  </div>






<div class="fy">


<el-row :gutter="20" class="userindex-list">
      <el-col :span="24" class="userindex-page-box">
         <el-pagination :currentPage="currentPage" :page-sizes="[16, 32, 48, 64]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
      </el-col>
    </el-row>
    </div>
        </div>
        </div>
      </div>

    </div>
    <Spin size="large" fix v-if="isLoading"></Spin>
    </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNavs from '@/components/nav/GoodsListNavs';
import GoodsClassNav from '@/components/nav/GoodsClassNav';
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'GoodsList',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data () {
    return {
      product:[],
      admins:[],
      admind:[],
      price1:"",
      price2:"",
         list1:[],
         list2:[],
       sort: true, //排序
      inject:['reload'],
      id: this.$route.params.id,
      ids: this.$route.params.ids,
      search: "",
      currentPage: 1,
      pageSize: 16,
idss:this.$store.state.userInfo.id,
      total: 0,
      totals:0,
      admin: [],
      searchItem: '',
      isAction: [ true, false, false ],
      icon: [ 'arrow-up-a', 'arrow-down-a', 'arrow-down-a' ],
      goodsTool: [
        {title: '综合', en: 'sale'},
        {title: '评论数', en: 'remarks'},
        {title: '价格', en: 'price'}
      ]
    };
  },
  computed: {
    ...mapState(['userInfo', 'shoppingCart']),
     filteredBlogs: function () {
      return this.admin.filter((admin) => {
        return admin.productName.match(this.search);
      });
    },


  },
  methods: {

onSubmits(admin) {
  admin.customerId=this.idss
      this.product=admin;


          let _this = this;
          axios
            .post("http://localhost:8888/img/add", this.product)
            .then(function (response) {
              console.log(this.product)
            });

      },

Onclick() {
      this.admins = [];
        if(!this.price1 && !this.price2){
        location.reload()
      }else{
      this.list2.forEach((ele) => {
        if (this.price1 <= ele.productPrice && ele.productPrice <= this.price2) {
          this.admins.push(ele);
        }
      });
      }
    },
    index() {
      //排序
      this.sort = !this.sort;
      if (this.sort) {
        this.admins.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
      }
      else {
        this.admins.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
      }
    },
    index1() {
      this.sort = !this.sort;
      if (this.sort) {
        this.admins.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
      } else {
        this.admins.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
      }
    },
    Onclicks() {
      this.admin = [];
        if(!this.price1 && !this.price2){
        location.reload()
      }else{
      this.list1.forEach((ele) => {
        if (this.price1 <= ele.productPrice && ele.productPrice <= this.price2) {
          this.admin.push(ele);
        }
      });
      }
    },
    indexs() {
      //排序
      this.sort = !this.sort;
      if (this.sort) {
        this.admin.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
      }
      else {
        this.admin.sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
      }
    },
    index1s() {
      this.sort = !this.sort;
      if (this.sort) {
        this.admin.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
      } else {
        this.admin.sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
      }
    },



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







     lode() {

      axios
        .get("http://localhost:8888/info/"+this.id+"/"+this.ids,
        {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })


        .then((res) => {
          console.log(res);
          this.admin = res.data.data.records;
         this.list1 = res.data.data.records;
          this.total = res.data.data.total;
        });

    },

    loded() {
      axios
        .get("http://localhost:8888/info/page",{
           params: {

            pageSize: this.pageSize,

          },
        }

        )
        .then((res) => {
          console.log(res);
          this.admind = res.data.data.records;
          this.totals = res.data.data.total;
        });
    },

    lodes() {

      axios
        .get("http://localhost:8888/info/find/"+this.id+"/"+this.ids,
        {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search,
          },
        })

        .then((res) => {
          console.log(res);
          this.admins = res.data.data.records;
           this.list2 = res.data.data.records;
           this.total = res.data.data.total;

        });

    },

    orderBy (data, index) {
      console.log(data);
      this.icon = [ 'arrow-down-a', 'arrow-down-a', 'arrow-down-a' ];
      this.isAction = [ false, false, false ];
      this.isAction[index] = true;
      this.icon[index] = 'arrow-up-a';
      this.SET_GOODS_ORDER_BY(data);
    }
  },
  created () {
    // if(!this.admins){
    //   this.admin=this.admins
    // }else{
    //   this.admins=this.admins
    // }


// if
//     (this.lode()==null){
//       this.lodes();
//     }else{
//       this.lode();
//     }


    if
    (this.lodes()==null){
      this.lode();
    }else{
      this.lodes();
    }

this.loded();

  },
  mounted () {

    this.searchItem = this.$route.query.sreachData;
  },
  components: {

    Search,
    GoodsListNavs,
    GoodsClassNav
  },

};
</script>

<style scoped>
.container {
  margin: 15px auto;
  width: 93%;
  min-width: 1000px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
.goods-box {
  display: flex;
}
/* ---------------侧边广告栏开始------------------- */
.as-box {
  width: 200px;
  border: 1px solid #ccc;
}
.item-as-title{
  width: 100%;
  height: 36px;
  color: #B1191A;
  line-height: 36px;
  font-size: 18px;
}
.item-as-title span:first-child{
  margin-left: 20px;
}
.item-as-title span:last-child{
  float: right;
  margin-right: 15px;
  font-size: 10px;
  color: #ccc;
}
.item-as{
  width: 160px;
  margin: 18px auto;
}
.item-as-img{
  width: 160px;
  height: 160px;
  margin: 0px auto;
}
.item-as-price span{
  font-size: 18px;
}
.item-as-intro{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled span{
  color: #005AA0;
}
/* ---------------侧边广告栏结束------------------- */

/* ---------------商品栏开始------------------- */
.goods-list-box {
  margin-left: 15px;
  width: calc(100% - 215px);
}
.goods-list-tool{
  width: 100%;
  height: 38px;
  border: 1px solid #ccc;
  background-color: #F1F1F1;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
}
.goods-list-tool li{
  cursor: pointer;
  float: left;
}
.goods-list-tool span{
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{
  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.goods-list-tool-active {
  color: #fff;
  border-left: 1px solid #ccc;
  background-color: #E4393C !important;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #ccc;
  box-shadow: 0px 0px 15px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.ff {
  width: 100%;
  height: 100%;
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
  padding-top: 2000px;
}
.te {
  margin-top: 80px;
}
.ii {
  width: 1800px;
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


.kkw1{
  font-size: 15px;
  margin-left: 120px;
  color: #fff;
   font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif;
   font-weight: bold;
}

.sss:hover{
  border: 2px solid #ee7546;
 box-shadow: 0 4px 8px #ee7546, 0 0 12px #ee7546
}
.box_top{

 margin-left: 1280px;

}

.ghh{
  float: left;
  margin-left: 900px;
}

.ghh .li{
  float: right;
  margin-left: 30px;

}
.ghh .jjs{
  float: left;
  width: 80px;

}
.ghh .jjss{
  float: left;
  width: 80px;
  margin-left: 8px;
}
.jjss1{
  margin-top: 10px;
  padding-left: 15px;
  float: left;
}
.item-as-intro:hover{
  color: #ee7546;


}
.el-icon-top{
  font-weight: bold;
}
.el-icon-bottom{
  font-weight: bold;
}
.li{
  font-weight: bold;
}
.qee{

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
/* ---------------商品栏结束------------------- */
</style>
