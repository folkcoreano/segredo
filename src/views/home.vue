<template>
  <div>
    <Stories />
    <br />
    <br />
    <Contents />
    <br />
    <Contents />
    <br />
    <Contents />
    <br />
    <Contents />
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from "vue";

import { changeTitle } from "../stores/title";
import Stories from "../components/Stories.vue";
import Contents from "../components/Contents.vue";

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
