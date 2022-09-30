<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.text-container {
  width: 400px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
  background: red;
}
</style>
