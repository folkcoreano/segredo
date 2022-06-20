<template>
  <div>
    <h1>Home</h1>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";

import { changeTitle } from "../stores/title";

const store = changeTitle();

// store.newPageTitle("Home");

// const name = ref("");

// watch(name, (newVal) => {
//   localStorage.setItem("name", newVal);
// });

// onMounted(() => {
//   name.value = localStorage.getItem("name") || "";
// });
</script>
