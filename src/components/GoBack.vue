<template>
  <div>
    <div class="back" @click="$router.back()">voltar</div>
  </div>
</template>
<style>
.back {
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: var(--red);
  width: fit-content;
  padding: 0.3em 0.7em;
  border-radius: 0.2em;
  transition: all 150ms linear;
  cursor: pointer;
}

.back:hover {
  transform: translateX(-0.4em);
}
</style>
