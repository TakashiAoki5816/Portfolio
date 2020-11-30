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
          <p>今年、3月に東京農業大学 地域環境科学部 造園科学科を卒業しました。</p><br>
          <p>4年生の時にプログラミングの面白さにハマり、<br>造園ではなくエンジニアを目指すことに決意しました。</p><br>
          <p>趣味は、サッカー・フットサル・ランニング・自転車・プログラミング・音楽</p>
          <p>休日は、サッカーの大会やランニングなど、基本的に体を動かしています。</p><br>
          <p>去年もIT業界を中心に就職活動を行っていましたが、</p>
          <p>納得がいく就職活動ができなかったため、もう一度やり直しています。<br>（2020年11月30日現在）</p><br>
          <p>現在は日々、ポートフォリオのブラッシュアップ・技術力向上に励んでいます。</p>
          <p>最近は、Vue.jsでポートフォリオサイトを作成しています。</p>
        </div>
      </div>
      <div class="mytwitter">
        <h4 class="twitter">Twitter</h4>
      </div>
    </div>
    <div class="right-content">
      <h4 class="History">History</h4>
      <ul class="timeline">
        <li>
          <p class="timeline-date">2016年3月</p>
          <div class="timeline-content">
            <h3>東京農業大学に入学</h3>
            <p></p>
          </div>
        </li>
      </ul>
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
  width: 50%;
  height: 100%;
}

.profile {
  height: 50%;
  display: flex;
  background: rgb(140, 235, 145);
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.left-profile {
  width: 25%;
  height: 100%;
}

.profile-img {
  margin-top: 30px
}

.right-profile {
  width: 75%;
  height: 100%;
  text-align: left;
}

.profile-title {
  font-size: 3em;
  margin-bottom: 10px;
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
  width: 50%;
  height: 100%;
  background-color: cornflowerblue;
}

.History {
  font-size: 3em;
  text-align: left;
}

</style>
