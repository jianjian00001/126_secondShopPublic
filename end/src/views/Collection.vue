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
    <!-- 检索结果 -->
    <el-row :gutter="0" class="userindex-list">
      <el-col :span="21">
        <el-table :data="admin" border stripe style="width: 100%">
          <el-table-column type="selection" width="50"/>
          <el-table-column  prop="receiptId" label="ID" width="40"/>
          <el-table-column prop="customerId" label="用户ID"/>
          <el-table-column  prop="productId" label="商品ID" width="70"/>
          <el-table-column prop="productImage" label="商品图片" width="150">
             <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.productImage" :preview-src-list="[scope.row.productImage]">
            <div solt="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" width="200"/>
          <el-table-column prop="productColor" label="商品颜色" width="75"/>
          <el-table-column prop="productPrice" label="商品价格" width="80"/>
          <el-table-column prop="productNum" label="商品数量" width="75"/>
          <el-table-column prop="paymentMethod" label="付款方式" width="90"/>
           <el-table-column prop="shippingUser" label="收货人" width="90"/>
          <el-table-column prop="address" label="收货人地址" width="90"/>
           <el-table-column prop="productPhones" label="收货人电话" width="90"/>
            <el-table-column prop="shippingCompName" label="快递公司" width="90"/>
           <el-table-column prop="productMessage" label="订单备注" width="90"/>
          <el-table-column prop="createTime" label="创建时间" width="150"/>
          <el-table-column prop="updateTime" label="最后修改时间" width="150"/>
          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <p>等待买家确认收货</p>
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
      <el-col :span="20" class="userindex-page-box">
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
      request.get("/receipt/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,

        }
      }).then(res => {
        console.log(res);
        this.admin = res.data.records
        this.total = res.data.total
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
          request.delete("/receipt/delete/" + row.receiptId).then(res => {
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
    },
    deleteBatch() {
      if (!this.ids.length) {
        ElMessage({
          type: "warning",
          message: "请先进行选择"
        })
        return
      }
      request.post("/receipt/deleteBatch", this.ids).then(res => {
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
    handleSelectionChange(val) {
      this.ids = val.map(v => v.receiptId)
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
      admins:{},
      search: '',
      currentPage: 1,
      pageSize: 5,
      total: 0,
      tableData: [],
      admin: [],
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
