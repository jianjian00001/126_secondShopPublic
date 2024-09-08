<template>
  <div style="padding: 10px;">
    <div style="margin: 10px 0;display: flex;">
      <el-input v-model="search" placeholder="请输入" style="width: 20%;" clearable/>
      <el-button type="primary" style="margin-left: 5px" @click="lode">查询</el-button>
<!--      <el-button type="primary" @click="add">新增</el-button>-->
      <el-popconfirm title="确认删除吗?" @confirm="deleteBatch">
        <template #reference>
          <el-button type="danger">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>

    <el-table :data="tableData" border stripe style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="customerId" label="ID" sortable  width="60"/>
      <el-table-column prop="customerName" label="昵称"/>
      <el-table-column label="头像">
        <template #default="scope">
          <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.avatar"
              :preview-src-list="[scope.row.avatar]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="60"/>
      <el-table-column prop="sex" label="性别" width="60"/>
      <el-table-column prop="signatures" label="签名"/>
      <el-table-column prop="phone" label="电话"/>
      <el-table-column prop="email" label="邮箱" width="140"/>
      <el-table-column prop="createTime" label="创建时间" width="150"/>
      <el-table-column prop="updateTime" label="修改时间" width="150"/>
      <el-table-column label="操作" width="150" align="center">
        <template #default="scope">
          <el-button icon="el-icon-edit" type="primary" circle @click="handleEdit(scope.row)"></el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.row.customerId)">
            <template #reference>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>

    <div style="text-align: center;margin: 20px 0">
      <el-pagination v-model:currentPage="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <el-dialog v-model="dialogVisible" title="修改" width="30%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="昵称">
          <el-input v-model="form.customerName"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload ref="uplode"
                     action="http://localhost:8888/files/uplode"
                     :on-success="filesUplodeSeccess"
          >
            <el-button size="small" type="primary">上传</el-button>
            <template #tip>
              <div class="el-upload__tip">
                只能上传jpg/png文件且文件大小不超过1MB
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="签名">
          <el-input v-model="form.signatures"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
      </el-form>

      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="save">确定</el-button>
          </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

import request from "@/utils/request.js"
import {ElMessage} from 'element-plus'

export default {
  name: 'User',

  components: {},
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 5,
      total: 0,
      tableData: [],
      ids: [],
    }
  },
  created() {
    this.lode()
  },
  methods: {
    deleteBatch(){
      if (!this.ids.length){
        ElMessage({
          type:"warning",
          message:"请先进行选择"
        })
        return
      }
      request.post("/customerInfo/deleteBatch",this.ids).then(res => {
        if (res.code === 200) {
          ElMessage({
            type: 'success',
            message: '批量删除成功',
          })
          this.lode()
        } else {
          ElMessage({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    handleSelectionChange(val){
      this.ids = val.map(v => v.customerId)
    },
    filesUplodeSeccess(res){
      console.log(res)
      this.form.avatar = res.data

    },
    lode() {
      request.get("/customerInfo/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,

        }
      }).then(res => {
        console.log(res);
        this.tableData = res.data.records
        this.total = res.data.total
      })

    },
    add() {
      this.dialogVisible = true
      this.form = {}
      if (this.$refs['upload']) {
        this.$refs['upload'].clearFiles()  // 清除历史文件列表
      }

    },
    save() {
      if (this.form.customerId) {
        request.put("/customerInfo/update", this.form).then(res => {
          console.log(res);
          if (res.code === 200) {
            ElMessage({
              type: 'success',
              message: '修改成功',
            })
          } else {
            ElMessage({
              type: 'error',
              message: res.msg
            })
          }
          this.lode()
          this.dialogVisible = false
        })
      } else {
        request.post("/customerInfo", this.form).then(res => {
          console.log(res);
          if (res.code === 200) {
            ElMessage({
              type: 'success',
              message: '添加成功',
            })
          } else {
            ElMessage({
              type: 'error',
              message: res.msg
            })
          }
          this.lode()
          this.dialogVisible = false
        })
      }

    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.$nextTick(() =>{
        this.$refs['uplode'].clearFiles()
      })


    },
    handleDelete(customerId) {

      request.delete("/customerInfo/" + customerId).then(res => {
        console.log(customerId);
        if (res.code === 200) {
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
        } else {
          ElMessage({
            type: 'error',
            message: res.msg
          })
        }
        this.lode()
      })

    },
    handleSizeChange(pageSize) {//改变每页的个数触发
      this.pageSize = pageSize
      this.lode()

    },
    handleCurrentChange(pageNum) {//改变当前页码触发
      this.currentPage = pageNum
      this.lode()

    },

  },
}
</script>
