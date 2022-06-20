<template>
  <div class="warn">
    <h1>
      Parece que você se perdeu, não se preocupe, clique no grande botão
      vermelho e volte para onde você estava!
    </h1>
    <br />
    <GoBack />
  </div>
</template>
<script setup>
import GoBack from "../components/GoBack.vue";

import { changeTitle } from "../stores/title";

const store = changeTitle();

store.newPageTitle("404");
</script>
<style scoped>
.warn {
  line-height: 2;
  word-spacing: 0.2em;
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
