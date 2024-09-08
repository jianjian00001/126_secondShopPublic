<template>
  <div class="userindex">
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

        <el-dialog title="收货地址" v-model="dialogVisible">
          <el-form :model="admins" label-width="100px">
            <el-form-item label="收货人地址">
              <el-input v-model="admins.goodName"></el-input>
            </el-form-item>
            <el-form-item label="收货人">
              <el-input v-model="admins.goodDescribe"></el-input>
            </el-form-item>
            <el-form-item label="收货人电话">
              <el-input v-model="admins.goodPhone"></el-input>
            </el-form-item>
            <el-form-item label="用户ID">
              <el-input v-model="admins.customerId"></el-input>
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
        <el-table :data="admin"
                  border stripe style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"/>
          <el-table-column prop="goodId" label="ID"/>
           <el-table-column prop="customerId" label="用户ID"/>
          <el-table-column prop="goodName" label="收货人地址"/>
          <el-table-column prop="goodDescribe" label="收货人名字"/>
          <el-table-column prop="goodPhone" label="收货人电话"/>
          <el-table-column prop="createTime" label="创建时间"/>
          <el-table-column prop="updateTime" label="最后修改时间"/>
          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row)"/>
              <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.goodId)"/>
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
  name: "Address",
  created() {
    this.lode()

  },
  methods: {

    add() {
      this.dialogVisible = true
      this.admins = {}
    },
    onSubmit() {
      if (this.admins.goodId){
        request.put('/good/update',this.admins).then(res => {
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

        request.post("/good/add", this.admins).then(res => {
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

        });
      };
    },

    lode() {
      request.get("/good/page", {
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

    //修改
    edit(row) {
      this.admins = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    //删除
    del(goodId) {
      this.$confirm("是否确定要删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
            request
                .delete("/good/delete/" + goodId)
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
    handleSelectionChange(val) {
      this.ids = val.map(v => v.goodId)
    },
    deleteBatch(){
      if (!this.ids.length){
        ElMessage({
          type:"warning",
          message:"请先进行选择"
        })
        return
      }
      request.post("/good/deleteBatch",this.ids).then(res => {
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
      dialogVisible: false,
      admins: {},
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
  padding: 10px;
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
