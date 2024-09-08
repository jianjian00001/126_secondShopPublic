<template>
  <div>
    <el-backtop  :bottom="10" :right="0">
  <div
     class="lkl"
    >
      返回顶部
    </div>
 </el-backtop>
    <div class="containers">
      <el-input placeholder="请输入内容" v-model="search"  class="input-with-select">

    <el-button slot="append" icon="el-icon-search" @click="lo"></el-button>
      </el-input>
    </div>
    <ShopHeader></ShopHeader>

    <div class="ff">
      <div class="ghh"><div class="jjs"><el-input class="jjs" v-model="price1" placeholder="￥">
              </el-input></div>
               <div class="jjss1"><span class="sw">-</span></div>
             <div class="jjss"> <el-input class="jjss" v-model="price2" placeholder="￥"></el-input></div>
      <el-button
        class="li"
        @click="Onclick"
          >筛 选{{jio}}</el-button></div>
          <div style="margin-top:57px;margin-left:1465px;">
      <!-- 价格排序 -->
       <el-button class="el-icon-top" @click="index1">价格升序</el-button>
      <el-button class="el-icon-bottom"  @click="index">价格降序</el-button>

    </div>
  <div v-for="admin in admin" :key="admin"  border class="ss"  style="width: 100%" @click="onSubmits(admin)">
    <!-- <router-link v-bind:to="'/blog/'+admin.productId"> -->
     <router-link v-bind:to="'/goodsDetail/'+admin.productId">
   <div class="sss" >
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
  <div class="fy">


<el-row :gutter="20" class="userindex-list">
      <el-col :span="24" class="userindex-page-box">
         <el-pagination :currentPage="currentPage" :page-sizes="[48, 96, 144, 192]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import ShopHeader from '@/components/header/ShopHeader';
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Merchant',
  data() {
    return {
      ids:this.$store.state.userInfo.id,
      product:[],
         sreachData:this.$route.query.sreachData,
       price1:"",
      price2:"",
       list1:[],
       sort: true, //排序
      search: "",
      currentPage: 1,
      pageSize: 48,
      total: 0,
      admin: [],
    }
  },
  created () {

    console.log(this.$route.query.sreachData)
    this.search=this.sreachData
    this.lode()
    this.loadGoodsList();
  },
  computed: {
    ...mapState(['userInfo', 'shoppingCart']),
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

    lo(){

      if(!this.search){
        this.$router.push("/merchant");
         location.reload()
      }else{
      this.$router.push({path: '/merchant', query: { sreachData: this.search }});
      location.reload()
      }

    },

  //价格筛选
    Onclick() {

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

 index() {
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
    index1() {
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
           this.list1 = res.data.data.records;
          this.total = res.data.data.total;



        });

    },

  },
  components: {
    ShopHeader
  },
  // computed :{
  //       jio() {
  //     let jio = 0;

  //     this.admin.map((item) => {
  //       if (item.oneCategoryId ==1) {
  //         jio++;
  //       }
  //     });
  //     return jio;
  //   },
  // },
store
};
</script>

<style scoped>
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
.goods-container {
  margin: 15px auto;
  width: 80%;
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
  height: 2500px;
  margin: 0 auto;
}

.sss {
  width: 300px;
  height: 430px;
  margin-top: 40px;
  margin-left: 145px;
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
  padding-top: 3250px;
  padding-bottom: 60px;
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
.containers {
  padding-top: 50px;
  margin: 0px auto;
  margin-bottom: 50px;
  width: 700px;
}

.ghh{
  float: left;
  margin-left: 1150px;
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
.lkl{

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
