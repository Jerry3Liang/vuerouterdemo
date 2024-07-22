<template>
  <h1>Test1:宣告式渲染及事件監聽</h1>
  <button @click="countNumber" value="0">
    {{ count }}
  </button>
</template>

<script setup>
import { ref } from 'vue';

// 組件邏輯
// 此處聲明一些響應式狀態
const count = ref(0);

function countNumber() {
  count.value++;
}
</script>

<style scoped></style>
