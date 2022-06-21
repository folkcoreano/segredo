<template>
  <!-- <h6>
    {{ store.pageTitle.title }}
  </h6> -->

  <div class="headnav">
    <router-link to="/profile">
      <div class="itemtop">
        <Icon class="icontop" icon="ic:baseline-person" />
        <span class="nametop">Profile</span>
      </div>
    </router-link>
    <div class="itemtop">
      <img class="logo" src="../assets/logo.svg" alt="Logo" />
    </div>
    <div class="itemtop">
      <div class="group">
        <div class="groupitem">
          <router-link to="/search">
            <div class="itemtop">
              <Icon class="icontop" icon="ic:baseline-search" />
              <span class="nametop">Search</span>
            </div>
          </router-link>
        </div>
        <div class="groupitem">
          <Icon class="icontop" icon="ic:baseline-menu" color="#626262" />
          <span class="nametop">Menu</span>
        </div>
      </div>
    </div>
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
  display: none;
  font-size: 1.1em;
}
.logo {
  height: 2em;
}

.group {
  display: flex;
  gap: 0.5em;
}

a,
a:visited {
  text-decoration: none;
  color: #626262;
  cursor: pointer;
  transition: all 150ms linear;
}

a:hover {
  transform: scale(1.1);
  color: var(--red);
}

a.router-link-active {
  transform: scale(1.1);

  color: var(--yellow);
}
</style>
