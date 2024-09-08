<template>
  <div>
    <div class="freeback-container">
      <div class="freeback-img-box">
        <img src="static/img/freeback.png">
      </div>
      <div class="freeback-box-border">
        <div class="freeback-box">
          <div class="freeback-title">
            <h1>意见反馈</h1>
            <h2>感谢你的反馈，我们会积极改善，做出更好的服务的</h2>
          </div>
          <div class="freeback-content">
            <div class="freeback-form">
              <Form :model="admin" :label-width="80" re>
                <FormItem label="标题">
                  <i-input v-model="admin.feedbackBt" placeholder="请输入标题"  :error-messages="errors"></i-input>
                </FormItem>
                <FormItem label="反馈信息">
                  <i-input v-model="admin.feedbackNy" type="textarea" :autosize="{minRows: 8,maxRows: 10}" placeholder="请输入反馈信息"></i-input>
                </FormItem>
                <FormItem>
                  <div class="qww">
                 <el-button type="primary" @click="onSubmit('fruitRules')"
        >立即创建</el-button
      >
</div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
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
      label="反馈标题"
      prop="productName"
    >
      <el-input v-model="admin.feedbackBt">{{admin.feedbackBt}}</el-input>
    </el-form-item>
    <el-form-item
      label="反馈内容"
      prop="productMnum"
    >
      <el-input v-model="admin.feedbackNy">{{admin.feedbackNy}}</el-input>
    </el-form-item>
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
</template>

<script>
import { Message } from 'element-ui';

export default {
  name: 'Freeback',
  data () {
    return {
      admin:{},
      formItem: {
        title: '',
        content: ''
      }


    };
  },
   methods: {


             onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this;
          axios
            .post("http://localhost:8888/feedback/add", this.admin)
            .then(function (response) {
              if (response.data) {
                _this.$alert("反馈成功！", "个人反馈", {
                  confirmButtonText: "确定",
                  callback: (action) => {
                    //跳转到/table
                    location.reload();
                  },
                });
              }
            });
        }
      });
    },
        }
};
</script>

<style scoped>
.freeback-container {
  margin: 15px auto;
  width: 80%;
  height: 600px;
  display: flex;
  align-items: center;
  /* background-color: #ccc; */
}
.freeback-img-box {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-img-box img {
  width: 80%;
}
.freeback-box-border {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.freeback-box {
  width: 480px;
}
.freeback-content {
  margin: 15px auto;
  border: 1px #ccc dotted;
}
.freeback-form {
  margin: 30px auto;
  width: 90%;
}
.qww{
  margin-left: 120px;
}
</style>
