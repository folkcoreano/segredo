<template>
  <nav>
    <router-link to="/tv">
      <div class="itembot">
        <Icon class="iconbot" icon="mdi:television-classic" />
        <span class="textbot">TV</span>
      </div>
    </router-link>
    <router-link to="/audios">
      <div class="itembot">
        <Icon class="iconbot" icon="ic:sharp-library-music" />
        <span class="textbot">Audios</span>
      </div>
    </router-link>
    <router-link to="/">
      <div class="itembot">
        <Icon class="iconbot" icon="gridicons:house" />
        <span class="textbot">Home</span>
      </div>
    </router-link>
    <router-link to="/books">
      <div class="itembot">
        <Icon class="iconbot" icon="ph:books-fill" />
        <span class="textbot">Books</span>
      </div>
    </router-link>
    <router-link to="/comics">
      <div class="itembot">
        <Icon class="iconbot" icon="bx:book-bookmark" />
        <span class="textbot">Comics</span>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style>
nav {
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: space-around;
  gap: 0.5em;
  align-items: center;
}

.itembot {
  background-color: blueviolet;
  display: flex;

  border-radius: 100vh;

  padding: 0.2em;
  gap: 0em;
}

.textbot {
  display: none;
}

.iconbot {
  font-size: 2em;
}

a,
a:visited {
  text-decoration: none;
  color: var(--white);
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
    font-size: 0.8em;
  }
  .iconbot {
    font-size: 1.5em;
  }
  a:hover {
    transform: translateY(-0.3em);
  }
  a.router-link-active {
    transform: translateY(-0.2em) scale(1.1);
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
    font-size: 2em;
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
    display: flex;
  }
  .iconbot {
    font-size: 1.5em;
  }
}
</style>
