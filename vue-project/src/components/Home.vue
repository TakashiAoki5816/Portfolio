<template>
  <div class="home-wrapper">
    <img src="../assets/mv.jpg" class="main-img">
      <div class="welcome">
        <h1>Welcome to Aoki Takashi's Portfolio Site</h1>
      </div>
  </div>
</template>

<script>
</script>

<style>
.home-wrapper {
  width: 100vw;
  height: 86vh;
}

.main-img {
  position: relative;
  width: 100vw;
  height: 100%;
}

.welcome {
  position: absolute;
  top: 18%;
  left: 50%;
  width: 100%;
  border-bottom: 3px solid #fff;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.welcome h1 {
  font-size: 3.0em;
  font-weight: bold;
  color: #fff;
}

@media (max-width: 480px) {
  .home-wrapper {
    height: 79vh;
    margin-top: 100px;
  }

  .main-img {
    height: 65vh;
  }

  .welcome {
    top: 50%;
    left: 50%;
  }

  .welcome h1 {
    font-size: 1.8em;
  }
}
</style>
