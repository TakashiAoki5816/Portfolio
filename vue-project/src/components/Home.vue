<template>
  <div class="wrapper">
    <div class="main-image">
      <div class="welcome">
        <h1>Welcome to Aoki Takashi's Portfolio Site</h1>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.wrapper {
  width: 100vw;
  height: 87vh;
}

.main-image {
  position: relative;
  width: 100vw;
  min-height: 87vh;
  background: url("../assets/main_img.jpeg");
  background-size:cover;
  background-repeat: no-repeat;
}

.welcome {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.welcome h1 {
  font-size: 4em;
  color: rgb(243, 243, 243);
}
</style>
