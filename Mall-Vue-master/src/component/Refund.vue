// 用户管理
<template>

  <div class="userindex">
    <el-backtop  :bottom="10" :right="0">
  <div
     class="kg2"
    >
      返回顶部
    </div>
 </el-backtop>
    <!-- <div class="ff"><input v-model="search" placeholder="请输入内容" /></div> -->
    <!-- 搜索条件 -->
    <el-row :gutter="20" class="userindex-queryInfo">
      <!-- 商品名称搜索 -->
      <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
        <el-input
          class="userindex-queryInfo-li"
          v-model="search"
          clearable
          size="small"
          placeholder="请输入用户名称"
        ></el-input>
      </el-col>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="2">
        <el-button type="primary" class="userindex-queryInfo-li" size="small" style="font-weight: bold;" @click="lode()"
          >搜 索</el-button
        >
      </el-col>
      <!-- 添加按钮 -->
    </el-row>

    <!-- 检索结果 -->
    <el-row :gutter="20" class="userindex-list" :search="search">
      <el-col :span="24">
        <!-- <el-table

      border
      stripe="true"
      :row-style="tableRowStyle"
      :header-cell-style="tableHeaderColor"

         :data="user.filter(data => !search || data.productName.toLowerCase().includes(search.toLowerCase()))"  size="small" style="width: 100%">
           <el-table-column type="index" prop="orderId" label="管理员ID" width="80">
          </el-table-column>
           <el-table-column
                    prop="good_id"
                    label="商品id"
                    width="180"></el-table-column>
          <el-table-column prop="productName" label="商品名称" width="150" >
          </el-table-column>
          <el-table-column prop="productColor" label="颜色" width="100">
          </el-table-column>
          <el-table-column prop="productPrice" label="价格" width="150">
          </el-table-column>
          <el-table-column prop="productNum" label="数量" width="100">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="200">
          </el-table-column>
           <el-table-column prop="productImage" label="商品图片" width="200">
         <template slot-scope="scope">
          <el-image style="width: 200px; height: 150px" :src="scope.row.adminImage" :preview-src-list="[scope.row.adminImage]">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="paymentMethod" label="付款方式" width="200">
          </el-table-column>
           <el-table-column prop="shippingCompName" label="快递公司" width="200">
          </el-table-column>
          <el-table-column prop="productMessage" label="留言" width="100">
          </el-table-column>
           <el-table-column prop="address" label="地址" width="100">
          </el-table-column>
           <el-table-column prop="shippingUser" label="收货人" width="100">
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                size="small"
                @click="edit(scope.row)"
              >
              </el-button>

              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                size="small"
                @click="del(scope.row)"
              >
              </el-button>
            </template>
          </el-table-column>
        </el-table> -->

<table style="margin-top:20px;" align="center"  >
<div class="bb">
  <div class="ff">
<span style="margin-left: 162px;">宝贝</span>
<span style="margin-left: 163px;">颜色</span>
<span style="margin-left: 106px;">单价</span>
<span style="margin-left: 131px;">数量</span>
<span style="margin-left: 116px;">实付款</span>
<span style="margin-left: 58px;">交易状态</span>
<span style="margin-left: 44px;">交易操作</span>
</div>
</div>

<div class="shopping-cart-null" v-show="user.length<0">
                <Icon type="ios-cart-outline" class="cart-null-icon"></Icon>
                <span>你的订单没有空空哦</span>
                <span>赶快去添加商品吧~</span>
              </div>
              <div class="shopping-cart-list" v-show="user.length > 0">
<tbody :data="user"  v-for="user in user" :key="user.refundId" @click="onSubmits(user)">
  <div class="vs">
 <tr >
<div class="sk" ><div class="rr"><span style="font-weight:bold;margin-left: 44px;margin-top: 3px; ">{{user.createTime}}</span></div></div>
</tr>
<router-link v-bind:to="'/goodsDetail/'+user.productId">
<tr  >
<td align="center" class="kk" style="border: 1px solid #ffff;"><img :src="user.productImage" width="100px" height="70px"></td>
<td   class="kk1" style="border: 1px solid #ffff;"><div style="float:left;margin-left: 12px;word-wrap:break-word;word-break:break-all; width:150px"><span >{{user.productName}}</span></div>
<div style="float:left;margin-left: 35px;word-wrap:break-word;word-break: break-all; width:60px"><span>{{user.productColor}}</span></div>
<div style="float:left;margin-left: 70px;word-wrap:break-word;word-break: break-all; width:85px;color:red;"><span >￥{{user.productPrice}}</span></div>
<div style="float:right;margin-right: 18px;word-wrap:break-word;word-break: break-all; width:85px"><span >{{user.productNum}}</span></div></td>
<td class="kk2"><p style="margin-left: 26px;font-weight:bold;color: red;">￥{{user.productPrice}}</p>
<p style="margin-left: 20px;margin-top: 5px;">({{user.paymentMethod}})</p>
</td>
<td class="kk2"><p style="margin-left: 26px;">充值成功</p>
<p style="margin-left: 26px;margin-top: 5px;">订单详情</p>
</td>
<td class="kk2"><p style="margin-left: 12px;margin-top: 27px;">
  <span style="color:red" v-show="!user.refundTx">等待退款/退货</span>
  <span style="color:red" v-show="!!user.refundTx">{{user.refundTx}}</span>

  </p></td>
</tr>
</router-link>

</div>

<div style="float:right;margin-top:65px" v-show="!!user.refundTx">
  <el-button style="color:red" @click="del(user.refundId)">删除</el-button>
  </div>
</tbody>

              </div>
</table>


      </el-col>
    </el-row>

    <!-- 分页 -->
    <div class="cfs">
    <el-row :gutter="20" class="userindex-list">
      <el-col :span="24" class="userindex-page-box">
         <el-pagination :currentPage="currentPage" :page-sizes="[7, 14, 21, 28]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import store from '@/store/index';
import { mapState, mapActions } from 'vuex';
export default {
  name:"Receipt",
  methods: {
onSubmits(admin) {
   admin.customerId=this.id
      this.product=admin;


          let _this = this;
          axios
            .post("http://localhost:8888/img/add", this.product)
            .then(function (response) {
              console.log(this.product)
            });

      },


    lode() {
      axios.get("http://localhost:8888/refund/finds/" +this.id, {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,
        }
      }).then(res => {
        console.log(res);
        this.user = res.data.data.records
        this.total = res.data.data.total
      })

    },


    //设置表格行的样式
      tableRowStyle({row,rowIndex}){
        return 'background-color:pink;font-size:15px;'
      },
      //设置表头行的样式
      tableHeaderColor({row,column,rowIndex,columnIndex}){
        return 'background-color:lightblue;color:#fff;font-wight:500;font-size:20px;text-align:center'

      },




    //添加
    add() {
      this.$router.push("/adduser");
    },
    //修改
    edit(row) {
      this.$router.push("/edituser?userId=" + row.userId);
    },
    //删除
    del(refundId) {
      let _this = this;
      this.$confirm("是否确定要删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios
            .delete("http://localhost:8888/refund/delete/" + refundId)
            .then(function (response) {
              if (response.data) {
                _this.$alert(  "删除成功!", "删除退款/退货记录", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到 /table
                    location.reload();
                  },
                });
              }
            });
        })
        .catch(() => {});
    },
    // page(currentPage){
    //         const _this=this;
    //         axios.get('http://localhost:8888/userinfo/findAll/'+(currentPage-1)+'/3').then(function (resp) {
    //             _this.tableData=resp.data.content;
    //             _this.pageSize=resp.data.size;
    //             _this.total=resp.data.totalElements;
    //         })
    //     }
    // page(currentPage) {
    //   switch (currentPage) {
    //     case 1:
    //       this.tableData = [
    //         {
    //           id: goodId,
    //           name: good_name,
    //         },
    //       ];
    //   }
    // },
    handleSizeChange(pageSize) {//改变每页的个数触发
      this.pageSize = pageSize
      this.lode()

    },
    handleCurrentChange(pageNum) {//改变当前页码触发
      this.currentPage = pageNum
      this.lode()

    },
  },
  computed:{
...mapState(['userInfo', 'shoppingCart']),
      filteredBlogs:function(){
        return this.user.filter((user) => {
          return user.productName.match(this.search);
        })
      }
  },
  created() {
    this.lode()
    // const _this = this;
    // axios.get("http://localhost:8888/master/findAll").then(function (resp) {
    //   _this.user = resp.data;
    //   console.log(resp);
    //   //   alert(resp);
    //   _this.tableData = resp.data.content;
    //   _this.pageSize = resp.data.size;
    //   _this.total = resp.data.totalElements;
    // });
  },
  data() {
    return {
      id:this.$store.state.userInfo.id,
      product:[],
search: '',
     currentPage: 1,
      pageSize: 7,
      total: 0,
      search:"",
      // queryInfo: {
      //   // name: "",
      //   // type: "",
      //   // page: 1,
      //   // pageSize: 10,
      // },
      options: [
        {
          label: 1,
          value: "安心蔬菜",
        },
        {
          label: 2,
          value: "新鲜牛奶",
        },
      ],
      tableData: [],
      user: [],
      dialogFormVisible: false,
      form: {
        // name: "",
        // region: "",
        // date1: "",
        // date2: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: "",
      },
      formLabelWidth: "120px",
    };
  },
store
};
</script>

<style scoped>
.userindex {
  width: 100%;
  min-height: 100%;
  padding: 15px;
  box-sizing: border-box;

}
/* 搜索 */
.userindex-queryInfo {
  margin-bottom: 10px;

}
.userindex-queryInfo-li {
  margin-left: 975px;
  width: 100%;
  height: auto;
  border: 3px solid rgb(192, 223, 238);
  background: rgb(192, 223, 238);
}
/* 列表 */
.userindex-list {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
/* 分页 */
.userindex-page-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;

}
td {
  padding: 10px 0;
  border: 1px solid #e5e5e5;
  vertical-align: top;
  width: 50px;
}
.kk{
  width: 150px;
}
.kk1{
  width: 600px;
}
.kk2{

  width: 100px;
}
.sk{


  width: 1057px;
  height: 40px;
  background:rgb(206, 232, 245);
}
.rr{
  padding-top: 11px;
}
.bb{
  width: 1057px;
  height: 40px;
  background:rgb(206, 232, 245);
  margin-bottom: 40px;
}
.ff{
  padding-top: 11px;
}
.sa{
  width: 50px;
}
.vs{
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .22), 0 0 12px rgba(0, 0, 0, .14);
  float: left;

}
.cfs{
  margin-right: 700px;
}
.shopping-cart-null {
  height: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cart-null-icon {
  font-size: 38px;
  margin-bottom: 15px;
}
.shopping-cart-null span {
  color: #999999;
  font-size: 12px;
  line-height: 16px;
}

.vs:hover{
  border: 2px solid #ee7546;
 box-shadow: 0 4px 8px #ee7546, 0 0 12px #ee7546
}
.kg2{

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
</style>
