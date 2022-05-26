<template>
  <div @click="handleClick" class="container">
    <button v-for="(item, index) of 3" :key="index" class="btn">{{ item }}</button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("阿梓今天吃什么?")
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.btn {
  width: 100px;
  margin-top: 100px;
}
</style>
