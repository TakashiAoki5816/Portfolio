<template>
  <div class="home-wrapper">
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
  background: -moz-linear-gradient(65deg, #45f13f, #e6ff78);
  background: -webkit-linear-gradient(65deg, #45f13f, #e6ff78);
  background: linear-gradient(25deg, #45f13f, #e6ff78);
}

.welcome {
  text-align: center;
  padding-top: 270px;
  border-bottom: 3px solid #fff;
}

.welcome h1 {
  font-size: 3.0em;
  font-weight: bold;
  color: #fff;
}

@media (max-width: 480px) {
  .home-wrapper {
    height: 76vh;
    position: relative;
  }

  .main-img {
    height: 65vh;
  }

  .welcome {
    position: absolute;
    top: 40%;
    padding: 0;
  }

  .welcome h1 {
    font-size: 1.8em;
  }
}
</style>
