<template>
  <div>
    <h1>分页</h1>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      total: 320,
      current: 1,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
      console.log("加载页面");
    },
  },
};
</script>

<style></style>
