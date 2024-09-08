<template >
<div   class="ss" >
<div class="qw">
<div class="kk"><img  :src="admin.productImage" width="370px" height="400px"></div>
   <div :data="admin"   style="width: 100%" class="sss">

     <div class="k">

    <p style="font-size:20px;font-weight:bold;font-weight:bold;word-wrap:break-word;word-break:break-all;width:600px;">{{admin.productName}}5555555555555555555555555555555555555555555555555555555555555555555555</p>
    <p style="margin-top: 8px;margin-bottom:8px">追流行趋势 买风格新品</p>
<div class="ef">
    <div class="wq"><p><img src="@/assets/ww.png" width="600px" height="38px"></p>

      <div style="margin-top: 10px;margin-bottom:10px">

    <span style="color: rgb(155, 154, 154);margin-left:17px;">价格</span>
    <span style="margin-left:35px;font-size:27px;font-weight:bold;color: rgb(238, 82, 25);">￥</span>
    <span style="font-size:31px;font-weight:bold;color: rgb(238, 82, 25);">{{admin.productPrice * admin.productNum}}.00</span>

    </div>

</div>
    <div class="vc">
    <span style="color: rgb(155, 154, 154);margin-left:17px;">优惠</span>
    <span style="margin-left:43px">淘金币可抵
      <span style="font-weight:bold;">3.51</span>
       <span>元</span>
       </span>
       </div>
    <p style="margin-top: 21px;margin-bottom:10px;margin-left:86px">
    11/1-11/3每满199减25,上不封顶</p>
    </div>
    <p  style="margin-top: 21px;margin-bottom:10px">
     <span style="color: rgb(155, 154, 154);margin-left:17px;">配送</span>
      <span style="margin-left:43px">付款后15天内发货</span></p>
<div class="vx">
  <span style="color: rgb(155, 154, 154);margin-left:17px;">颜色</span>
 <el-radio-group v-model="admin.productColor"  style="margin-left:43px" size="medium"  >
      <el-radio-button   :label="admin.productCs"></el-radio-button>
      <el-radio-button style="margin-left:50px;" :label="admin.productCd"></el-radio-button>
      <el-radio-button  style="margin-left:50px"  :label="admin.productCf"></el-radio-button>
      <el-radio-button  style="margin-left:50px"  :label="admin.productCg"></el-radio-button>
    </el-radio-group>
</div>

    <p style="margin-top: 21px;"><span style="color: rgb(155, 154, 154);margin-left:17px;">数量</span>
    <sapn style="margin-left:43px">
    <el-input-number v-model="admin.productNum" @change="handleChange" :min="1" :max="admin.productMnum" ></el-input-number></sapn></p>
<!-- <el-radio-group v-model="admin.productImage">
    <el-radio  :label="admin.productIm"><img :src="admin.productIm" width="50px" height="40px"></el-radio>
    <el-radio-button :label="admin.productImd"></el-radio-button>
    <el-radio-button :label="admin.productImf"></el-radio-button>
    <el-radio-button :label="admin.productImg"></el-radio-button>
      </el-radio-group> -->

<el-button type="primary" @click="onSubmit('fruitRules')"
        >加入购物车</el-button
      >



</div>

  </div>

 <el-popover
  placement="top"
  width="1000"
  trigger="click"> -->

 <el-form
    ref="fruitRules"
    :model="admin"
    :rules="rules"
    label-width="300px"
    class="demo-ruleForm"
    style="width: 600px"
  >
  <el-form-item
      label="商品Id"
      prop="productId"
    >
      <el-input v-model="admin.productId">{{admin.productId}}</el-input>
    </el-form-item>
    <el-form-item
      label="商品名称"
      prop="productName"
    >
      <el-input v-model="admin.productName">{{admin.productName}}</el-input>
    </el-form-item>
    <el-form-item
      label="商品总数量"
      prop="productMnum"
    >
      <el-input v-model="admin.productMnum">{{admin.productMnum}}</el-input>
    </el-form-item>
<el-form-item label="颜色">
    <el-radio-group v-model="admin.productColor" size="medium">
      <el-radio border :label="admin.productCs"></el-radio>
      <el-radio border :label="admin.productCd"></el-radio>
      <el-radio border :label="admin.productCf"></el-radio>
      <el-radio border :label="admin.productCg"></el-radio>
    </el-radio-group>
  </el-form-item>

    <el-form-item
      label="价格"
      prop="productPrice"
    >
      <el-input v-model="admin.productPrice ">{{admin.productPrice * admin.PriceNum}}</el-input>
    </el-form-item>

    <el-form-item
      label="数量"
      prop="admin.productNum"
    >
      <el-input v-model="admin.productNum">{{admin.productNum}}</el-input>
    </el-form-item>
<el-input-number v-model="admin.adminState" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('fruitRules')"
        >立即创建</el-button
      >
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
 <!-- <el-button slot="reference">click 激活</el-button> -->

</el-popover>
</div>
</div>

</template>

<script>


export default {
  name:"sing-blogs",
  data() {
    return {
      admin: {
        name: "",
        sale: "",
        icon: "",

      },

      rules: {
          adminName: [
            { required: true, message: "管理员名称不能为空", trigger: "blur" },
          ],
          adminPwd: [
            { required: true, message: "密码不能为空", trigger: "blur" },
          ],
          adminPhone: [
            { required: true, message: "联系方式不能为空", trigger: "blur" },
          ],
          adminState: [
            { required: true, message: "管理员状态不能为空", trigger: "blur" },
            // { type:'number' , message:'请输入数字'}
            ],
        },
      baskets:[],

      search:"",
     id:this.$route.params.id,





    }

    },


   methods:{
     handleChange(value) {
        console.log(value);
        },

      onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          axios
            .post("http://localhost:8888/shopping/add", this.admin)
            .then(function (response) {
              if (response.data) {
                _this.$alert(_this.admin.productName+ "添加成功！", "添加数据", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到/table
                    _this.$router.push("/notice");
                  },
                });
              }
            });
        }
      });
    },

    //  onSubmits(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       let _this = this;
    //       axios
    //         .post("http://localhost:8888/promptly/add", this.admin)
    //         .then(function (response) {
    //           if (response.data) {
    //             _this.$alert(_this.admin.productName+ "添加成功！", "添加数据", {
    //               confirmButtonText: "确定",
    //               callback: (action) => {
    //                 //跳转到/table
    //                 _this.$router.push("/promptly");
    //               },
    //             });
    //           }
    //         });
    //     }
    //   });
    // },

  decrease(admin){
    admin.adminState--


  },
  increase(admin){
    admin.adminState++
  },
  removeFrom(admin){

  },



   },




     created(){


    const  _this = this

    this.$axios.get('http://localhost:8888/info/find/'+this.id).then(function (resp) {
        _this.admin = resp.data


        console.log(resp);
      })
  },



}



</script>
<style scoped>
.k{
  margin-left: 250px;

}
.kk{
float:left;
margin-left: 30px;
}
.sss{

 max-width: 800px;
 margin: 0 auto;


}

.ss{
  width: 1200px;
  border: 1px solid rgb(204, 200, 200);
  height: 1000px;
  padding: 20px;
  margin: 200px 0;
  margin-left: 300px;
  box-sizing: border-box;



}
.qw{
  margin-top: 30px;
}
.cd{
  background: red;
}
.da{
  margin: auto;
}
.wq{
  width: 600px;
  background:rgb(248, 226, 219)
}
.ef{
  width: 600px;
  background:rgb(252, 231, 226)
}
.vc{
  margin-top: 16px;
}
.vx{
  margin-top: 16px;

}
</style>
