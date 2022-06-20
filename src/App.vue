<template>
  <header>
    <TheHeader />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>
<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 0.5em;
}

::-webkit-scrollbar-track {
  background: var(--blacka);
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--red);
}

:root {
  --blacka: hsla(72, 5%, 21%, 1);
  --blackb: hsla(0, 0%, 6%, 1);
  --yellow: hsla(40, 97%, 64%, 1);
  --blue: hsla(200, 52%, 41%, 1);
  --red: hsla(347, 100%, 61%, 1);
  --violet: hsla(276, 16%, 41%, 1);
  --white: hsla(0, 0%, 100%, 1);
}

body {
  background-color: var(--violet);
  color: var(--black);

  display: grid;

  grid-template-columns: 1fr;

  height: 100vh;

  font-size: 12px;
}

#app {
  display: grid;

  grid-column: 1;
  grid-row: 1;

  grid-template-rows: 3.5em 1fr 3.5em;
  grid-template-columns: 8em 1fr;

  overflow-y: auto;
}

header {
  grid-column: 1 / 3;
  grid-row: 1;

  background-color: aqua;
}

main {
  overflow-x: hidden;

  grid-column: 1 / 3;
  grid-row: 2 / 3;

  background-color: antiquewhite;

  overflow: auto;
}

footer {
  grid-column: 1 / 3;
  grid-row: 3;

  background-color: brown;
}

.route-enter-from {
  opacity: 0;
}

.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: all 200ms ease-out;
}

.route-leave-active {
  transition: all 200ms ease-in;
}
@media (min-width: 300px) {
  body {
    font-size: 13px;
  }
  #app {
    grid-template-columns: 8em 1fr;
    grid-template-rows: 4em 1fr 4em;
  }
  main {
    grid-column: 1 / 4;
    grid-row: 2;
  }
  footer {
    grid-column: 1 / 3;
    grid-row: 3;
  }
}
@media (min-width: 550px) {
  body {
    font-size: 14px;
  }
  #app {
    grid-column: 1;
    grid-template-columns: 4em 1fr;
  }
  main {
    grid-column: 2 / 4;
    grid-row: 2 / 4;
  }
  footer {
    grid-column: 1 / 1;
    grid-row: 2 / 4;
  }
}
@media (min-width: 650px) {
  body {
    font-size: 14px;
  }
  #app {
    grid-template-columns: 7.5em 1fr;
  }
}
@media (min-width: 992px) {
  body {
    grid-template-columns: 0.5fr 10fr 0.5fr;
    font-size: 14px;
  }
  #app {
    grid-column: 2;
  }
}
</style>
