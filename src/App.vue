<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Hello</h1>
  <RouterLink to="/Home" style="margin-right: 10px">Home</RouterLink>

  <RouterLink to="/Test/TestOne">TestOne</RouterLink>
  <RouterView></RouterView>
</template>
