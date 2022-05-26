<template>
  <button @click="handleBtnClick">按钮{{ props.item }}</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"
const props = defineProps({
  item: Number,
})

const emit = defineEmits(["additem"])

const handleBtnClick = (event) => {
  emit("additem", event)
}
</script>

<style scoped></style>
