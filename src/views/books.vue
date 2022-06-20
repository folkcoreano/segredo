<template>
  <div class="category">Books!</div>
</template>

<script setup>
import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("Books");
</script>

<style></style>
