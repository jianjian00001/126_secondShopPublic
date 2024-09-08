<template>

  <div class="userindex">
      <div style="margin: 10px 0;display: flex;">
        <el-input v-model="search" placeholder="请输入" style="width: 20%;" clearable/>
        <el-button type="primary" style="margin-left: 5px" @click="lode">查询</el-button>
        <el-popconfirm title="确认删除吗?" @confirm="deleteBatch">
          <template #reference>
            <el-button type="danger">批量删除</el-button>
          </template>
        </el-popconfirm>
      </div>

    <el-dialog v-model="dialogVisible" title="修改" width="30%">
      <el-form :model="form" label-width="120px">
        <el-form-item label="商品颜色" prop="productColor">
          <el-input v-model="form.productColor"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="productPrice">
          <el-input v-model="form.productPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="productNum">
          <el-input v-model="form.productNum"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="edit()">确定</el-button>
          </span>
      </template>
    </el-dialog>
    <!-- 检索结果 -->
    <el-row :gutter="0" class="userindex-list">
      <el-col :span="21">
        <el-table :data="admin" border stripe style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"/>
          <el-table-column  prop="orderDetailId" label="购物车ID" width="100" sortable/>
          <el-table-column  prop="productId" label="商品ID" width="65"/>
          <el-table-column prop="customerId" label="用户ID"/>
          <el-table-column prop="productImage" label="商品图片" width="180">
            <template #default="scope">
             <el-image style="width: 100px; height: 100px" :src="scope.row.productImage" :preview-src-list="[scope.row.productImage]">
              <div solt="error" class="image-slot">
               <i class="el-icon-picture-outline"></i>
              </div>
             </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" width="220"/>
          <el-table-column prop="productColor" label="商品颜色" width="100"/>
          <el-table-column prop="productPrice" label="商品价格" width="100"/>
          <el-table-column prop="productNum" label="商品数量" width="100"/>
          <el-table-column prop="createTime" label="创建时间" width="180"/>
          <el-table-column prop="updateTime" label="最后修改时间" width="180"/>
          <el-table-column fixed="right" label="操作" align="center" width="140">
            <template #default="scope">
              <el-button
                type="primary"
                icon="el-icon-edit"
                circle
                @click="update(scope.row)">
              </el-button>
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="del(scope.row.orderDetailId)">
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <!-- 分页 -->
    <el-row :gutter="20" class="userindex-list">
      <el-col :span="22" class="userindex-page-box">
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
      request.get("/shopping/page", {
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
    update(row){
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
      //修改
    edit() {
      request.put("/shopping/update", this.form).then(res => {
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
    //删除
    del(orderDetailId) {
      this.$confirm("是否确定要删除" , {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          request.delete("/shopping/delete/" + orderDetailId).then(res => {
            console.log(orderDetailId);
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
        })
        .catch(() => {});
    },
    deleteBatch(){
      if (!this.ids.length){
        ElMessage({
          type:"warning",
          message:"请先进行选择"
        })
        return
      }
      request.post("/shopping/deleteBatch",this.ids).then(res => {
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
    handleSelectionChange(val){
      this.ids = val.map(v => v.orderDetailId)
    },
  },

  data() {
    return {
      admins:{},
      search: '',
      dialogVisible: false,
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
