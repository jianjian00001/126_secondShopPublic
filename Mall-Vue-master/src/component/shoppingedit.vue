<template>
    <el-form ref="form" :rules="rules" :model="notice" label-width="300px" style="width: 600px" center >
        <el-form-item label="管理员ID" >
            <el-input v-model="notice.adminId" readonly class="ss">{{notice.adminId}}</el-input>
        </el-form-item>
        <el-form-item label="管理员名称" prop="adminName">
            <el-input v-model="notice.adminName">{{notice.adminName}}</el-input>
        </el-form-item>
        <el-form-item label="活动性质" prop="adminPwd">
    <el-radio-group v-model="notice.adminPwd" size="medium">
      <el-radio border label="红色"></el-radio>
      <el-radio border label="蓝色"></el-radio>
    </el-radio-group>
  </el-form-item>
        <el-form-item label="联系方式" prop="adminPhone">
            <el-input v-model="notice.adminPhone">{{notice.adminPhone * notice.adminState}}</el-input>
        </el-form-item>
        <el-form-item label="管理员状态" prop="adminState">
            <el-input-number v-model="notice.adminState" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即修改</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "shoppingedit",
        created() {
            let adminId = this.$route.query.adminId
            let _this = this
            axios.get('http://localhost:8888/notice/find/'+ adminId).then(function (response) {
                _this.notice = response.data
            })
        },
        data() {
            return {
                notice: {
                    // userName: '',
                    // userPwd: '',
                    // userSex: ''
                },
                // rules:{
                //     userName:[
                //         { required: true, message: '请输入用户名', trigger: 'blur' }
                //     ],
                //     userPwd:[
                //         { required: true, message: '请输入用户密码', trigger: 'blur' }
                //     ],
                //     // goodDescribe:[
                //     //     { required: true, message: '请输入销量', trigger: 'blur' },
                //     //     { type: 'number', message: '销量必须为数字值'}
                //     // ],
                //     userSex:[
                //         { required: true, message: '请输入用户性别', trigger: 'blur' }
                //     ]
                // }
            }
        },

        methods: {
           handleChange(value) {
        console.log(value);
        },
            onSubmit(notice) {
                this.$refs[notice].validate((valid) => {
                    if (valid) {
                        let _this = this
                        axios.put('http://localhost:8888/notice/update',this.notice).then(function (response) {
                            if(response.data){
                                _this.$alert(_this.notice.adminName +'修改成功！', '修改数据', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        //跳转到/table
                                        _this.$router.push('/notice')
                                    }
                                });
                            }
                        })
                    }
                });
            },
    //          onSubmit(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       let _this = this;
    //       axios
    //         .post("http://localhost:8888/admin/add", this.notice)
    //         .then(function (response) {
    //           if (response.data) {
    //             _this.$alert(_this.notice.adminName+ "添加成功！", "添加数据", {
    //               confirmButtonText: "确定",
    //               callback: (action) => {
    //                 //跳转到/table
    //                 _this.$router.push('/show');
    //               },
    //             });
    //           }
    //         });
    //     }
    //   });
    // },
        }
    }
</script>

<style scoped>

</style>
