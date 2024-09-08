<template >

<div class="ff"><input v-model="search" placeholder="请输入内容" /><button @click="btn">搜索</button>

  <div v-for="admin in filteredBlogs" :key="admin"  border class="ss"  style="width: 100%">
    <!-- <router-link v-bind:to="'/blog/'+admin.adminId"> -->
     <router-link v-bind:to="'/goodsDetail/'+admin.adminId">
   <div class="sss">
    <v-card
        class="mx-auto"
        max-width="344"

      >
        <img :src="admin.adminImage" width="300" height="100" />

        <v-card-text>
          <h2 class="text-h6 primary--text">
            {{admin.adminPrice}}
          </h2>
         {{admin.adminName}}

        </v-card-text>

        <v-card-title>
          <v-rating
            :value="4"
            dense
            color="orange"
            background-color="orange"
            hover
            class="mr-2"
          ></v-rating>

        </v-card-title>


      </v-card>

</div>
</router-link>
  </div>

</div>

</template>

<script>


export default {
  name:"show-blogs",
  data() {
    return {
     admin:[],
      search:"",
      src:'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg'


    }

    },

 methods:{
  	btn:function(){

  		var search = this.search;
			if (search) {
			 this.searchData =  this.products.filter(function(product) {
			 	console.log(product)
				return Object.keys(product).some(function(key) {
					console.log(key)
			  	return String(product[key]).toLowerCase().indexOf(search) > -1
			})
			})
			}

  	}
 },

     created(){
    const  _this = this
    this.$axios.get('http://localhost:8888/admin/findAll').then(function (resp) {
        _this.admin = resp.data

        console.log(resp);
      })
  },

  computed:{
      filteredBlogs:function(){
        return this.admin.filter((admin) => {
          return admin.adminName.match(this.search);
        })
      }
  }
}



</script>
<style scoped>
.ff{
  width: 100%;
  height: 100%;
  margin: 0 auto;


}
.sss{
  width: 300px;
  height: 200px;
  margin-top: 40px;
 margin-left: 100px;
float:left;
 border:  6px solid #a12020;


}
.ss{
  width: 1000%;


}
</style>
