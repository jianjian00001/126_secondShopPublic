<template>
<!-- 管理员管理 -->
  <div class="userindex">
    <!-- 搜索条件 -->
    <div style="margin: 10px 0;display: flex;">
      <el-input v-model="search" placeholder="请输入" style="width: 20%;" clearable/>
      <el-button type="primary" style="margin-left: 5px" @click="lode">查询</el-button>
      <el-popconfirm title="确认删除吗?" @confirm="deleteBatch">
        <template #reference>
          <el-button type="danger">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>

    <el-dialog title="修改" v-model="dialogVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="商品图片">
          <el-upload ref="uplode"
                     action="http://localhost:8888/files/uplode"
                     :on-success="filesUplodeSeccess">
            <el-button type="primary">上传</el-button>
            <template #tip>
              <div class="el-upload__tip">
                只能上传jpg/png文件且文件大小不超过1MB
              </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.productName"></el-input>
        </el-form-item>
        <el-form-item label="商品颜色">
          <el-input v-model="form.productColor"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.productPrice"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 检索结果 -->
    <el-row class="userindex-list">
      <el-col>
        <el-table :data="admin" border style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"/>
          <el-table-column  prop="collectionId" label="收藏ID" width="90" sortable/>
          <el-table-column prop="customerId" label="用户ID"/>
          <el-table-column  prop="productId" label="商品ID" width="80"/>
          <el-table-column prop="productImage" label="商品图片" width="200">
             <template #default="scope">
          <el-image style="width: 150px; height: 120px" :src="scope.row.productImage" :preview-src-list="[scope.row.productImage]">
            <div solt="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名称"/>
          <el-table-column prop="productColor" label="商品颜色"/>
          <el-table-column prop="productPrice" label="商品价格"/>
          <el-table-column prop="createTime" label="创建时间"/>
          <el-table-column prop="updateTime" label="最后修改时间"/>
          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="edit(scope.row)">
              </el-button>

              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="del(scope.row)">
              </el-button>

            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-row :gutter="20" class="userindex-list">
      <el-col :span="24" class="userindex-page-box">
         <el-pagination v-model:currentPage="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                     @current-change="handleCurrentChange">
      </el-pagination>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import request from "@/utils/request.js"
import {ElMessage} from 'element-plus'
export default {
  created() {
    this.lode()
  },
  methods: {
    lode() {
      request.get("/collection/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,
        }
      }).then(res => {
        console.log(res);
        this.admin = res.data.records
        this.total = res.data.total
      })

    },
    onSubmit(){
      request.put("/collection/update", this.form).then(res => {
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
    },
    filesUplodeSeccess(res){
      console.log(res)
      this.form.productImage = res.data

    },
    handleSelectionChange(val) {
      this.ids = val.map(v => v.collectionId)
    },

      //修改
    edit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.$nextTick(() =>{
        this.$refs['uplode'].clearFiles()
      })
    },
    //删除
    del(row) {
      this.$confirm("是否确定要删除" , {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          request.delete("/collection/delete/" + row.collectionId)
            .then(res => {
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
            });
        })
      ;
    },
    deleteBatch(){
      if (!this.ids.length){
        ElMessage({
          type:"warning",
          message:"请先进行选择"
        })
        return
      }
      request.post("/collection/deleteBatch",this.ids).then(res => {
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

     handleSizeChange(pageSize) {//改变每页的个数触发
      this.pageSize = pageSize
      this.lode()

    },
    handleCurrentChange(pageNum) {//改变当前页码触发
      this.currentPage = pageNum
      this.lode()
    },
  },

  data() {
    return {
      dialogVisible:false,
      search: '',
      currentPage: 1,
      pageSize: 5,
      total: 0,
      tableData: [],
      admin: [],
      form: {},
      ids: [],
    };
  },

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
  width: 100%;
  height: auto;
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
  justify-content: center;
}
</style>
