<template>
  <div style="padding: 10px;">
    <div style="margin: 10px 0;display: flex;">
      <el-input v-model="search" placeholder="请输入" style="width: 20%;" clearable/>
      <el-button type="primary" style="margin-left: 5px" @click="lode">查询</el-button>
      <el-button type="primary" style="margin-right: 10px;" @click="add">新增</el-button>
      <el-popconfirm title="确认删除吗?" @confirm="deleteBatch">
        <template #reference>
          <el-button type="danger">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>

    <el-table :data="tableData" border stripe style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="categoryId" label="分类ID" sortable/>
      <el-table-column prop="categoryName" label="分类名称"/>
      <el-table-column label="分类级别">
        <template #default="scope">
          <span v-if="scope.row.categoryLevel === 1">一级</span>
          <span v-if="scope.row.categoryLevel === 2">二级</span>
        </template>
      </el-table-column>
      <el-table-column prop="parentId" label="父ID"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="updateTime" label="修改时间"/>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button icon="el-icon-edit" type="primary" circle @click="handleEdit(scope.row)"></el-button>
          <el-popconfirm title="确认删除吗?" @confirm="handleDelete(scope.row.categoryId)">
            <template #reference>
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 20px 0;text-align: center">
      <el-pagination v-model:currentPage="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>

      <el-dialog v-model="dialogVisible" title="" width="30%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="分类名称">
            <el-input v-model="form.categoryName"></el-input>
          </el-form-item>
          <el-form-item label="分类级别">
            <el-radio v-model="form.categoryLevel" label="1" style="padding-left: 50px">一级</el-radio>
            <el-radio v-model="form.categoryLevel" label="2">二级</el-radio>
          </el-form-item>
          <el-form-item label="父ID">
            <el-input v-model="form.parentId"></el-input>
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
  </div>
</template>

<script>

import request from "@/utils/request.js"
import {ElMessage} from 'element-plus'

export default {
  name: 'Category',

  components: {},
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
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
      request.post("/productCategory/deleteBatch",this.ids).then(res => {
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
      this.ids = val.map(v => v.categoryId)
    },
    lode() {
      request.get("/productCategory/page", {
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

    },
    save() {
      if (this.form.categoryId) {
        request.put("/productCategory", this.form).then(res => {
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
        request.post("/productCategory", this.form).then(res => {
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

    },
    handleDelete(categoryId) {
      request.delete("/productCategory/" + categoryId).then(res => {
        console.log(categoryId);
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
  watch:{
    'form.categoryLevel':function (value) {
      debugger
       if(value==1){
         this.form.parentId=0;
       }
    }
  }
}
</script>
