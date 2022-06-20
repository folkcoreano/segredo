<template>
  <div class="category">Audios!</div>
</template>

<script setup>
import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("Audios");
</script>

<style></style>
