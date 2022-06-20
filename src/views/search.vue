<template>
  <h1>Search!</h1>
</template>

<script setup>
import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("Search...");
</script>

<style></style>
