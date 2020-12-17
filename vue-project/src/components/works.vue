<template>
<div class="works-wrapper">
  <div class="title-header">
    <div class="title">
      <h2>Works</h2>
    </div>
  </div>
  <div class="content-wrapper">
    <div class="content">
      <div class="content-image">
        <a href="https://www.niwaai.com/" target="_blank" rel="noopener noreferrer"><img src="../assets/portfolio.png"></a>
      </div>
      <div class="content-title">
        <h4>Aoki Takashi's Portfolio</h4>
      </div>
      <div class="content-explanation">
        <p>Vue.jsでSPAのポートフォリオサイト</p>
      </div>
      <div class="content-github">
        <a href="https://github.com/TakashiAoki5816/Portfolio" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
    <div class="content">
      <div class="content-image">
        <a href="https://www.niwaai.com/" target="_blank" rel="noopener noreferrer"><img src="../assets/niwaai.png"></a>
      </div>
      <div class="content-title">
        <h4>Niwaai</h4>
      </div>
      <div class="content-explanation">
        <p>「あなたのお気に入りの日本庭園に出会おう」<br>をコンセプトにした庭園写真共有サイト</p>
      </div>
      <div class="content-github">
        <a href="https://github.com/TakashiAoki5816/niwaai" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style>
.works-wrapper {
  width: 90vw;
  height: 84vh;
  margin: 10px auto;
}

.content-wrapper {
  width: 100%;
  height: 75%;
  display: flex;
}

.content {
  width: 50%;
  height: auto;
  margin: auto 0;
}

.content-image img {
  width: 70%;
  height: auto;
}

.content-title {
  margin: 10px 0 20px 0;
  font-size: 1.4em;
}

.content-explanation {
  margin-bottom: 10px;
}

</style>
