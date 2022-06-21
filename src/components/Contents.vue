<template>
  <div>
    <h1>Últimos episódios</h1>
    <div class="contentbox">
      <div class="content">
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
        <figure>
          <img class="cover" src="../assets/cover.jpg" alt="Cover" />
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 0.5em;
}

::-webkit-scrollbar-track {
  background: #333;
}

::-webkit-scrollbar-thumb {
  background: #626262;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--red);
}
.contentbox {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 18em;
}
.content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0.5em 0.5em;
  gap: 1em;

  overflow: auto;
}
.cover {
  cursor: pointer;
  height: 16em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script setup></script>
