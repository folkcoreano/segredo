<template>
  <nav>
    <router-link to="/tv">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:baseline-ondemand-video" />
        <span class="textbot">TV</span>
      </div>
    </router-link>
    <router-link to="/audios">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:baseline-equalizer" />
        <span class="textbot">Audios</span>
      </div>
    </router-link>
    <router-link to="/">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:baseline-home" />
        <span class="textbot">Home</span>
      </div>
    </router-link>
    <router-link to="/books">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:baseline-collections-bookmark" />
        <span class="textbot">Books</span>
      </div>
    </router-link>
    <router-link to="/comics">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:baseline-collections" />
        <span class="textbot">Comics</span>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
nav {
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: space-around;
  gap: 0.5em;
  align-items: center;
}
.itembot {
  display: flex;

  border-radius: 100vh;

  padding: 0.2em;
  gap: 0em;
}
.textbot {
  display: none;
}
.iconbot {
  font-size: 2.5em;
}
a,
a:visited {
  text-decoration: none;
  color: #626262;
  cursor: pointer;
  transition: all 150ms linear;
}
a:hover {
  transform: translateX(0.5em);
  color: var(--red);
}
a.router-link-active {
  transform: scale(1.1);

  color: var(--yellow);
}
@media (min-width: 300px) {
  nav {
    justify-content: space-around;
    align-items: center;
    gap: 0.5em;
  }
  .itembot {
    align-items: center;
    justify-content: center;
    padding: 0.5em;
    flex-direction: column;
  }
  .textbot {
    display: flex;
    display: none;
    font-size: 0.8em;
  }
  .iconbot {
    font-size: 2.5em;
  }
  a:hover {
    transform: translateY(-0.3em);
  }
  a.router-link-active {
    transform: translateY(-0.2em);
  }
}
@media (min-width: 550px) {
  nav {
    justify-content: center;
    flex-direction: column;
    gap: 2.5em;
  }
  .itembot {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5em;
  }
  .textbot {
    display: none;
    font-size: 1em;
  }
  .iconbot {
    font-size: 2.5em;
  }
  a:hover {
    transform: translateX(0.3em);
  }
  a.router-link-active {
    transform: translateX(0.2em) scale(1.1);
  }
}
@media (min-width: 650px) {
  .itembot {
    padding: 0.8em;
    gap: 0.5em;
  }
  .textbot {
    /* display: flex; */
  }
  .iconbot {
    /* font-size: 1.5em; */
  }
}
</style>
