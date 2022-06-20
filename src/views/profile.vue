<template>
  <h1>Your Profile!</h1>
</template>

<script setup>
import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("Profile");
</script>

<style></style>
