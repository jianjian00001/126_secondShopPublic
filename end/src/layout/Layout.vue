<template>
  <div>
    <Header style="margin-bottom: -1px"/>
    <div style="display: flex;">
      <Aside />
      <router-view style="flex: 1;background-color: #fffffb"/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
  name: "layout",
  components: {
    Header,
    Aside,
  },

  methods: {

  },

}
</script>
<style>

</style>
