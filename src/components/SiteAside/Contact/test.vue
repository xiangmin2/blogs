<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style>
.test-container {
  width: 300px;
  height: 500px;
  background: black;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
