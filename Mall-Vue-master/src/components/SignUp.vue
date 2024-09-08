<template>
<div>
<div style="float:left" class="poii1"></div>
<div class="poii"><img src="@/assets/ggt.png" height="80px"></div>
   <div class="poo" style="width: 100%;height: 100%;overflow: hidden">
    <div class="po">
      <div class="poi"></div>
    <div class="ij" style="width: 400px;">
      <div style="text-align:center;font-size: 25px;color: #b3c0d1;margin: 14px 0">
        新用户注册

      </div>
      <div><el-divider></el-divider></div>
      <div class="hb">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
      >
      <!-- v-model双向绑定ruleForm.username -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="ruleForm.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="ruleForm.password"
            placeholder="密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirm">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="ruleForm.confirm"
            placeholder="确认密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register" style="width: 152px">注册</el-button>
          <el-button @click="resetForm('ruleForm')" style="width: 152px">重置</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
   </div>
   <div class="wee"><span ></span><span style="margin-left:10px"><img  :src="url.url" /></span></div>

   </div>
</template>
<script>
import request from "@/utils/request.js";
export default {
  name: "SignUp",
  data() {
    return {
      url: {url: require('../assets/pic.gif')},
      ruleForm: {},
      rules: {

        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirm: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {

    register() {
      if (this.ruleForm.password !== this.ruleForm.confirm) {
        this.$message.error("两次密码不一致");
        return;
      }
      this.$refs["ruleForm"].validate((valid) => {
        if (valid) {
          request.post("/register", this.ruleForm).then((res) => {
            console.log(res);
            if (res.code === 200) {
              this.$message.success("注册成功");
              this.$router.push("/");
            } else if(res.code == 400) {
              this.$message.error("用户不存在");
              this.$router.push("/SignUp");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {},
};
</script>
<style scoped>

.po{

  padding-top: 80px;
  padding-left: 400px;
  height: 660px;
  background-image: url('../assets/mo.png');
}
.ij{
  height: 500px;
   border-radius: 4px;
  float: right;
  margin-right: 754px;
  padding-left: 40px;
  padding-right: 40px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.poi{
  float: left;

}
.ij .el-input{
      border: 0.5px solid #b2b2b2;

  border-radius: 4px;

 margin-bottom: 10px;




}
.el-divider{
  width: 100%;
}
.hb{
  margin-top: 50px;
}
.el-button{
  background: #f10180;
  color: #fff;
  height: 50px;
  border-radius: 4px;

}
.poii{
  float: right;
  margin-right: 400px;


}
.poii .img{
  margin-top: 10px;
}
.poii{
  float: right;
  margin-right: 400px;
  padding-top: 12px;
  padding-bottom: 5px;
}
.poii1{
  float: right;
  margin-left: 370px;
  padding-top: 12px;
  padding-bottom: 5px;
}

.wee{
  color: #666;
    text-align: center;
    padding-top: 25px;
}
.wee span{

font-family: 微软雅黑;
}
</style>
