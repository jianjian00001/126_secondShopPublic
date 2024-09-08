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
    <!-- 检索结果 -->
    <el-row :gutter="0">
      <el-col :span="21">
        <el-table :data="admin" border stripe style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50"/>
          <el-table-column prop="orderId" label="ID" width="40">
          </el-table-column>
          <el-table-column prop="customerId" label="用户ID"/>
          <el-table-column prop="productId" label="商品ID" width="70">
          </el-table-column>
          <el-table-column prop="productImage" label="商品图片" width="150">
            <template #default="scope">
              <el-image style="width: 100px; height: 100px" :src="scope.row.productImage"
                        :preview-src-list="[scope.row.productImage]">
                <div solt="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="productName" label="商品名称" width="200">
          </el-table-column>
          <el-table-column prop="productColor" label="商品颜色" width="75">
          </el-table-column>
          <el-table-column prop="productPrice" label="商品价格" width="90">
          </el-table-column>
          <el-table-column prop="productNum" label="商品数量" width="75">
          </el-table-column>
          <el-table-column prop="paymentMethod" label="付款方式" width="90">
          </el-table-column>
          <el-table-column prop="shippingUser" label="收货人" width="90">
          </el-table-column>
          <el-table-column prop="address" label="收货人地址" width="90">
          </el-table-column>
          <el-table-column prop="productPhones" label="收货人电话" width="90">
          </el-table-column>
          <el-table-column prop="shippingCompName" label="快递公司" width="90">
          </el-table-column>
          <el-table-column prop="productMessage" label="订单备注" width="90">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="150">
          </el-table-column>
          <el-table-column prop="updateTime" label="最后修改时间" width="150">
          </el-table-column>
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
              <el-button
                  type="danger"
                  circle
                  @click="send(scope.row)">
                发货
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog v-model="dialogVisible" title="修改" width="40%">
      <el-form :model="form" label-width="80px" center>
        <el-form-item label="商品名称">
          <el-input v-model="form.productName"/>
        </el-form-item>
        <el-form-item label="收货人">
          <el-radio-group v-model="form.shippingUser" v-for="item in admins" :key="item.goodId">
            <el-radio-button :label="item.goodDescribe" style="float: left"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地址">
          <el-radio-group v-model="form.address" v-for="item in admins" :key="item.goodId">
            <el-radio-button :label="item.goodName" style="float: left"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="电话号码" style="width: 550px;">
          <el-radio-group v-model="form.productPhones" v-for="item in admins" :key="item.goodId">
            <el-radio-button :label="item.goodPhone" style="float: left"/>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="form.productColor" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.productNum" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.productPrice" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-radio-group v-model="form.paymentMethod" size="medium">
            <el-radio label="朋友代付"></el-radio>
            <el-radio label="匿名付款"></el-radio>
            <el-radio label="花呗分期"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="快递公司">
          <el-radio-group v-model="form.shippingCompName" size="medium">
            <el-radio-button border label="天天快递"></el-radio-button>
            <el-radio-button border label="顺丰快递"></el-radio-button>
            <el-radio-button border label="申通快递"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="订单备注">
          <el-input v-model="form.productMessage"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="onSubmit()">确定</el-button>
          </span>
      </template>
    </el-dialog>

    <el-dialog v-model="dialogVisible1" title="发货" width="40%">
      <el-form :model="form" label-width="80px" center>
        <el-form-item label="商品名称">
          <el-input v-model="form.productName" :disabled="true"/>
        </el-form-item>
        <el-form-item label="收货人">
          <el-input v-model="form.shippingUser" :disabled="true"/>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" :disabled="true"/>
        </el-form-item>
        <el-form-item label="电话号码" style="width: 550px;">
          <el-input v-model="form.productPhones" :disabled="true"/>
        </el-form-item>
        <el-form-item label="颜色">
          <el-input v-model="form.productColor" :disabled="true" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.productNum" :disabled="true" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.productPrice" :disabled="true" style="width: 100px;"/>
        </el-form-item>
        <el-form-item label="付款方式">
          <el-input v-model="form.paymentMethod" :disabled="true"/>
        </el-form-item>
        <el-form-item label="快递公司">
          <el-input v-model="form.shippingCompName" :disabled="true"/>
        </el-form-item>
        <el-form-item label="订单备注">
          <el-input v-model="form.productMessage" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible1 = false">取消</el-button>
            <el-button type="primary" @click="add();dele()">确定</el-button>
          </span>
      </template>
    </el-dialog>
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
      request.get("/master/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res => {
        console.log(res);
        this.admin = res.data.records
        this.total = res.data.total
      })

    },
    //添加
    add() {
      request.post("/confirm/add", this.form).then(res => {
        console.log(res);
        if (res.code === 200) {
          ElMessage({
            type: 'success',
            message: '发货成功',
          })
        } else {
          ElMessage({
            type: 'error',
            message: res.msg
          })
        }
        this.lode()
        this.dialogVisible1 = false
      })
    },
    //修改
    edit(row) {
      const _this = this
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      request.get('/good/findAll').then(function (resp) {
        _this.admins = resp
        console.log(resp);
      })
    },
    send(row){
      const _this = this
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible1 = true
      request.get('/good/findAll').then(function (resp) {
        _this.admins = resp
        console.log(resp);
      })
    },
    onSubmit() {
      request.put("/master/update", this.form).then(res => {
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
    del(row) {
      this.$confirm("是否确定要删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
          .then(() => {
            request.delete("/master/delete/" + row.orderId).then(res => {
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
    dele(){
      request.delete("/master/delete/" + this.form.orderId).then(res => {
        if (!res.code === 200) {
          ElMessage({
            type: 'error',
            message: res.msg
          })
        }
        this.lode()
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
      request.post("/master/deleteBatch", this.ids).then(res => {
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
      this.ids = val.map(v => v.orderId)
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
      admins: [],
      dialogVisible: false,
      dialogVisible1: false,
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

/* 列表 */
.userindex-list {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

/* 分页 */
.userindex-page-box {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>
