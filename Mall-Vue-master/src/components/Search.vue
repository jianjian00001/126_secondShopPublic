<template>
  <div>
    <div class="container">
      <!-- <i-input v-model="searchs" size="large" class="sreach" placeholder="输入你想查找的商品">
        <Button slot="append" icon="ios-search" @click="sreach"></Button>
      </i-input> -->
      <el-autocomplete
        v-model="searchs"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入商品名称"
        :trigger-on-focus="false"
        @select="handleSelect"
      >
        <template v-slot="{ item }">
          <span>{{ item.productName }}</span>
        </template>
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="sreach"
        ></el-button>
      </el-autocomplete>

      <div class="rr">
        <Tag
          v-for="(item, index) in promotionTags"
          :key="item.name"
          closable
          @on-close="closeTags(index)"
          ><span @click="selectTags(item.name)">{{ item.name }}</span></Tag
        >
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      admin: [],
      searchs: "",
      currentPage: 1,
      pageSize: 101,
      total: 0,

      promotionTags: [
        { name: "手机" },
        { name: "电脑" },
        { name: "相机" },
        { name: "耳机" },
        { name: "智能" },
        { name: "办公本" },
        { name: "4G手机" },
        { name: "游戏本" },
        { name: "鼠标 " }
      ],
      keywords: "",
      list: [
        {
          name: "张三"
        },
        {
          name: "李四"
        }
      ]
    };
  },
  methods: {
    lode() {
      axios
        .get("http://localhost:8888/info/page", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
            search: this.search
          }
        })
        .then(res => {
          console.log(res);
          this.admin = res.data.data.records;
          this.list1 = res.data.data.records;
          this.total = res.data.data.total;
        });
    },

    querySearchAsync(queryString, cb) {
      let result = this.admin.filter(item => {
        if (item.productName.indexOf(queryString) > -1) {
          return true;
        }
      });

      cb(result);
    },

    handleSelect(item) {
      this.searchs = item.productName;
      console.log(item.productName);
    },

    closeTags(index) {
      this.promotionTags.splice(index, 1);
    },
    selectTags(name) {
      this.$router.push({ path: "/merchant", query: { sreachData: name } });
    },
    sreach() {
      if (!this.searchs) {
        location.reload();
      } else {
        this.$router.push({
          path: "/merchant",
          query: { sreachData: this.searchs }
        });
      }
    }
  },
  created() {
    this.lode();
  },
  components: {}
};
</script>

<style scoped>
.container {
  padding-top: 40px;
  margin: 0px auto;
  margin-bottom: 15px;
}
.container .el-autocomplete {
  width: 700px;
  margin-left: 535px;
}
.sreach {
  margin: 5px 0px;
}
.rr {
  margin-left: 535px;
}
</style>
