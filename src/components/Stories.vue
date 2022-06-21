<template>
  <div class="storbox">
    <div class="storie">
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
      <figure>
        <img class="round" src="../assets/storie.png" alt="Storie" />
        <figcaption>Item</figcaption>
      </figure>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 0.3em;
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
.storbox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10em;
}
.storie {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1em 0.5em;
  gap: 1em;

  overflow: auto;
}
.round {
  cursor: pointer;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.25em;
  background: linear-gradient(to bottom, var(--yellow), var(--red));
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
figcaption {
  text-transform: uppercase;
  font-weight: 900;
}
</style>

<script setup></script>
