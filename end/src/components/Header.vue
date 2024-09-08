<template>
  <div style="height: 50px;line-height: 50px;border-bottom: 1px solid #ccc;display: flex;background-color: rgba(16,78 ,139, 0.9 );">
    <div style="width: 500px;padding-left: 40px;font-weight: bold;font-size: larger;color: white">商城后台管理系统
    </div>
    <div style="flex: 1;"></div>
    <i class="el-icon-message-solid" style="color: white;margin:13px 30px;font-size: 30px"  @click="open"/>
    <div style="width: 100px;margin-right: 50px">

      <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar style="width: 45px;height: 45px;margin: 2px 5px" :src="avatars"/>
              <div style="color: white;margin-top: 20px;float: right;font-size: 18px">{{name}}</div>
            </span>
        <template #dropdown>
          <el-dropdown-menu >
            <div @click="onSubmitss"><el-dropdown-item @click="$router.push('/login')">退出系统</el-dropdown-item></div>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
import store from '@/store/index';
import request from "@/utils/request.js"
import { mapState, mapActions } from 'vuex';
export default {
  name: "Header",
  data() {
    return {
      avatars: '',
      name:'',

      recordNr:"退出后台",
      ruleForm:{},

    }
  },
  created() {
    this.avatars=JSON.parse(sessionStorage.getItem('userInfo')).avatar
    this.name=JSON.parse(sessionStorage.getItem('userInfo')).customerName
    this.username=JSON.parse(sessionStorage.getItem('userInfo')).username

  },
  methods:{

    open() {
      this.$notify({
        type:'info',
        title: '今日小目标',
        message: '先赚它一个亿',
        offset: 50,
        duration: 2000,
      });
    },
    onSubmitss() {
      this.ruleForm.username=this.username

this.ruleForm.recordNr=this.recordNr



          request
            .post("/record/add", this.ruleForm)

        },
  },
  computed:{
    ...mapState(['userInfo', 'shoppingCart'])
  },
  store

}
</script>

<style>

</style>
