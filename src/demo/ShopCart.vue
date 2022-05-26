<template>
  <div class="cart" ref="cart" :class="{ active: props.isActive }">{{ props.rednum }}</div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  isActive: Boolean,
  rednum: Number,
})
</script>

<style scoped>
.cart {
  position: fixed;
  bottom: 22px;
  left: 32px;
  width: 30px;
  height: 30px;
  background-color: rgb(0, 160, 220);
  color: rgb(255, 255, 255);
}
.cart.active {
  animation: jump 100ms 1 ease-in;
}

@keyframes jump {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(2);
  }
}
</style>
