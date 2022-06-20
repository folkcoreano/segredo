<template>
  <!-- <h6>
    {{ store.pageTitle.title }}
  </h6> -->

  <div class="headnav">
    <router-link to="/profile">
      <div class="itemtop">
        <Icon class="icontop" icon="bi:person-circle" />
        <span class="nametop">Profile</span>
      </div>
    </router-link>

    <div class="itemtop">LetterWHO</div>
    <router-link to="/search">
      <div class="itemtop">
        <Icon
          class="icontop"
          icon="bi:search-heart-fill"
          :horizontalFlip="true"
        />
        <span class="nametop">Search</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import { changeTitle } from "../stores/title";
const store = changeTitle();
</script>

<style scoped>
.headnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  width: 100%;
  height: 100%;
}
.itemtop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icontop {
  font-size: 2em;
}
.nametop {
  /* display: none; */
  font-size: 1.1em;
}

a {
  color: var(--black);
}

a:hover {
  transform: scale(1.1);
  color: var(--yellow);
}

a.router-link-active {
  transform: scale(1.1);

  color: var(--red);
}
</style>
