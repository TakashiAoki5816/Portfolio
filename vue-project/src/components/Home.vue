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
  height: 86vh;
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
  top: 17%;
  left: 50%;
  width: 100%;
  border-bottom: 1px solid #fff;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.welcome h1 {
  font-size: 2.5em;
  font-weight: bold;
  color: rgb(243, 243, 243);
}
</style>
