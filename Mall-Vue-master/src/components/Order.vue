<template>
  <div>

    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        小提示
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">确认商品是否完整，请点击商品前的确认收货按钮，确认收货即可。</template>
      </Alert>

     <table  class="kn">
       <div class="bb">
  <div class="ff">
<span style="margin-left: 98px;">图片</span>
<span style="margin-left: 152px;">名称</span>
<span style="margin-left: 163px;">颜色</span>
<span style="margin-left: 146px;">单价</span>
<span style="margin-left: 131px;">数量</span>
<span style="margin-left: 119px;">实付款</span>
<span style="margin-left: 138px;">交易状态</span>
<span style="margin-left: 124px;">交易操作</span>
</div>
</div>
       <tbody >



      <tr >

        <td style="border: 1px solid red;height:100px" @click="onSubmitss(admin)">
          <router-link v-bind:to="'/goodsDetail/'+admin.productId" style="color: #495060;">
          <div class="l0">
          <span>
            <img :src="admin.productImage" width="80px" height="83">
          </span>
          </div>
          <div class="l1"><span>{{admin.productName.substring(0, 42)}}...</span></div>
          <div class="l2"><span style="margin-left: 32px;">{{admin.productColor}}</span></div>
          <div class="l3"><span style="color:red">￥{{admin.productPrice}}</span></div>
          <div class="l4"><span>{{admin.productNum}}</span></div>
          <div class="l5"><span style="color:red">￥{{admin.productNum * admin.productPrice}}</span></div>
          <div class="l6"><span>{{admin.paymentMethod}}</span></div>
          <div class="l7"><span>等待确认收货</span></div>
          </router-link>
        </td>

        </tr>

      </tbody>
     </table>

      <div class="address-container">
        <h3>收货人信息</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{admin.shippingUser}}</span>
            </div>
            <div class="address-detail">
              <p>{{admin.address}}</p>

            </div>
          </div>
        <div class="address-detail">收货人电话：{{admin.productPhones}}</div>
        </div>
      </div>
      <div class="remarks-container">
        <h3>备注</h3>
        <div  size="large"  class="remarks-input">{{admin.productMessage}}</div>
      </div>
      <div class="invoices-container">
        <h3>快递公司</h3>
        <p style="font-size: 15px;">{{admin.shippingCompName}}</p>
      </div>
      <div class="invoices-containers">
        <h3>发票信息</h3>
        <p>该商品不支持开发票</p>
      </div>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>已交订单总额：</span> <span class="money"><Icon type="social-yen"></Icon> {{admin.productNum * admin.productPrice}}</span></p>
          <div class="pay-btn">
            <Button type="error"  @click="del();onSubmit('form')" size="large">确认收货</Button>
          </div>
        </div>
      </div>、
    </div>

    <el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-form ref="form" :rules="rules" :model="admin" label-width="300px" style="width: 1000px" center>
        <!-- <el-form-item label="购物车ID" prop="orderDetailId">
            <span v-model="wantbuy.orderDetailId" readonly></span>
        </el-form-item>
        <el-form-item label="商品ID" prop="productId">
            <span v-model="wantbuy.productId"></span>
        </el-form-item> -->
       <el-form-item
      label="商品图片"
      prop="productImage"
    >
      <img  :src="admin.productImage" width="300" height="200" />
    </el-form-item>



    <el-form-item
      label="商品名称"
      prop="productName"
    >
      <el-input v-model="admin.productName">{{admin.productName}}</el-input>
    </el-form-item>
    <el-form-item
      label="收货人"
      prop="shippingUser"
    >
      <el-radio-group v-model="admin.shippingUser" v-for="item in admins" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodDescribe"></el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      label="地址"
      prop="address"
    >
     <el-radio-group v-model="admin.address" v-for="item in admins" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodName"></el-radio-button>
</el-radio-group>
    </el-form-item>
<el-form-item
      label="电话号码"
      prop="productPhones"
    >
     <el-radio-group v-model="admin.productPhones" v-for="item in admins" :key="item.goodId" @click="toggleTab(item.goodId)">
    <el-radio-button :label="item.goodPhone"></el-radio-button>
</el-radio-group>
    </el-form-item>
    <el-form-item
      label="颜色"
      prop="productColor"
    >
      <el-input v-model="admin.productColor"></el-input>
    </el-form-item>
 <el-form-item
      label="数量"
      prop="productNum"
    >
      <el-input v-model="admin.productNum"></el-input>
    </el-form-item>
    <el-form-item
      label="价格"
      prop="productPrice"
    >
      <el-input v-model="admin.productPrice"></el-input>
    </el-form-item>
<el-form-item
      label="付款方式"
      prop="paymentMethod"
    >
      <el-radio-group v-model="admin.paymentMethod" size="medium">
      <el-radio  label="朋友代付"></el-radio>
      <el-radio label="匿名付款"></el-radio>
      <el-radio  label="花呗分期"></el-radio>
    </el-radio-group>
    </el-form-item>
<el-form-item
      label="快递公司"
      prop="shippingCompName"
    >
      <el-radio-group v-model="admin.shippingCompName" size="medium">
      <el-radio-button border label="天天快递" v-model="gender"></el-radio-button>
      <el-radio-button border label="顺丰快递" v-model="gender"></el-radio-button>
      <el-radio-button border label="申通快递" v-model="gender"></el-radio-button>

    </el-radio-group>

    </el-form-item>



    <el-form-item
      label="订单备注"
      prop="productMessage"
    >
      <el-input v-model="admin.productMessage"></el-input>
    </el-form-item>


        <el-form-item>

            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
 <!-- <el-button slot="reference">click 激活</el-button> -->
</el-popover>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
 const  _this = this
    this.$axios.get('http://localhost:8888/good/findAll').then(function (resp) {
        _this.admins = resp.data

        console.log(resp);
      })


    this.$axios.get('http://localhost:8888/receipt/find/'+this.id).then(function (resp) {
        _this.admin = resp.data


        console.log(resp);
      })
    this.loadAddress();
  },
  data () {
    return {
      product:[],
      goodsCheckList: [],
      admin:[],
      id:this.$route.params.id,
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '套餐',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
          key: 'price',
          align: 'center'
        }
      ],
      checkAddress: {
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    };
  },
  computed: {
    ...mapState(['address', 'shoppingCart']),
    totalPrice () {
      let price = 0;
      this.goodsCheckList.forEach(item => {
        price += item.price * item.count;
      });
      return price;
    }
  },
  methods: {
onSubmitss(admin) {
       admin.customerId=this.ids
      this.product=admin;


          let _this = this;
          axios
            .post("http://localhost:8888/img/add", this.product)
            .then(function (response) {
              console.log(this.product)
            });

      },

del() {
      let _this = this;
      this.

          axios
            .delete("http://localhost:8888/receipt/delete/" + this.admin.receiptId)
            .then(function (response) {
              if (response.data) {
                _this.$alert(notice.productName + "删除成功!", "删除数据", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到 /table
                    location.reload();
                  },
                });
              }
            })

        .catch(() => {});
    },


    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          axios
            .post("http://localhost:8888/assess/add", this.admin)
            .then(function (response) {
              if (response.data) {
                _this.$alert( "确认收货成功！", "添加数据", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到/table
                    _this.$router.push('/Assess');
                  },
                });
              }
            });
        }
      });
    },










    ...mapActions(['loadAddress']),
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      const father = this;
      this.address.forEach(item => {
        if (item.addressId === data) {
          father.checkAddress.name = item.name;
          father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
        }
      });
    }
  },
  mounted () {

    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
  },
  components: {
    Search,
    GoodsListNav
  },
  store
};
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;

}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;


}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.invoices-container{
  float: left;
}
.invoices-containers p{
  font-size: 12px;
  line-height: 30px;
  color: #999;

}
.invoices-containers {
  margin-top: 1px;
  float: right;
  margin-right: 1240px;
}
.pay-container {
  margin-top: 150px;

  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;


}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
.kn{
  width: 100%;

 margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;


}
.vs{
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ccc;

}
.ff{
  height: 50px;
  padding-top: 17px;
}
.l0{
  padding-top: 8px;
  margin-left: 70px;
  float: left;
}
.l1{
  padding-top: 6px;
  margin-left: 92px;
  width: 100px;
  float: left;
}
.l2{
   padding-top: 6px;
  margin-left: 92px;
  float: left;
}
.l3{
  padding-top: 6px;
  margin-left: 142px;
  float: left;
}
.l4{
  padding-top: 6px;
  margin-left: 135px;
  float: left;
}
.l5{
  padding-top: 6px;
  margin-left: 127px;
  float: left;
}
.l6{
  padding-top: 6px;
  margin-left: 142px;
  float: left;
}
.l7{
  padding-top: 6px;
  margin-left: 117px;
  float: left;
}
.remarks-input{
  height: 50px;
  border: 1px solid rgb(226, 225, 225);
}
</style>
