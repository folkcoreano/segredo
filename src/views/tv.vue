<template>
  <div>
    <h1>TV</h1>
  </div>
</template>
<script setup>
import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("TV");
</script>
