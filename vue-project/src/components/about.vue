<template>
<div class="content-wrapper">
  <div class="title-header">
    <div class="title">
      <h2>About</h2>
    </div>
  </div>
  <div class="content">
    <div class="left-content">
      <div class="profile">
        <div class="left-profile">
          <img src="../assets/profile-img.png" class="profile-img">
        </div>
        <div class="right-profile">
          <h4 class="profile-title">Profile</h4>
          <p>はじめまして、青木 貴志と申します。</p>
          <p>今年、3月に東京農業大学 地域環境科学部 造園科学科を卒業しました。</p>
          <p>大学4年の時にプログラミングの面白さにハマり、造園ではなくエンジニアを目指すことに決意</p>
          <p>趣味はサッカー・フットサル・ランニング・自転車・プログラミング・音楽</p>
          <p>休日はサッカーの大会やランニングなど、基本的に体を動かしています。</p>
          <p>去年もIT業界を中心に就職活動を行っていましたが、</p>
          <p>納得がいかなかったため、もう一度やり直しています。（2020年11月29日現在）</p>
        </div>
      </div>
      <div class="mytwitter">
        <h4 class="twitter">Twitter</h4>
      </div>
    </div>
    <div class="right-content">
      <h4 class="History">History</h4>
      <p>2016年3月</p>
      <p>東京農業大学に入学</p>
    </div>
  </div>
</div>
</template>

<script>
</script>

<style>
.content-wrapper {
  width: 90vw;
  margin: 10px auto;
}

.title-header {
  height: auto;
  display: flex;
  justify-content: start;
}

.title {
  font-size: 4em;
}

.content {
  height: 100vh;
  display: flex;
}

.left-content {
  width: 60%;
  height: 100%;
  background-color: chocolate;
}

.profile {
  height: 50%;
  display: flex;
  background: rgb(143, 237, 100);
}

.left-profile {
  width: 30%;
  height: 100%;
  background: crimson;
}

.profile-img {
  margin-top: 30px
}

.right-profile {
  width: 70%;
  height: 100%;
  text-align: left;
  background: rgb(192, 182, 40);
}

.profile-title {
  font-size: 3em;
}

.mytwitter {
  height: 50%;
  background: rgb(148, 66, 141);
}

.twitter {
  text-align: left;
  font-size: 3em;
}

.right-content {
  width: 40%;
  height: 100%;
  background-color: cornflowerblue;
}

.History {
  font-size: 3em;
  text-align: left;
}

</style>
