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
          <p>今年、3月に東京農業大学 地域環境科学部 <br>造園科学科を卒業しました。</p><br>
          <p>4年生の時にプログラミングの面白さにハマり、造園ではなくエンジニアを目指すことに決意しました。</p><br>
          <p>趣味は、サッカー・フットサル・ランニング・自転車・プログラミング・音楽</p>
          <p>休日は、サッカーの大会やランニングなど、基本的に体を動かしています。</p><br>
          <p>去年もIT業界を中心に就職活動を行っていましたが、納得がいく就職活動ができなかったため、もう一度やり直しています。<br>（2020年11月30日現在）</p><br>
          <p>現在は日々、ポートフォリオのブラッシュアップ・技術力向上に励んでいます。</p>
          <p>最近は、Vue.jsでポートフォリオサイトを制作しています。</p>
        </div>
      </div>
      <div class="mytwitter">
        <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
      </div>
    </div>
    <div class="right-content">
      <h4 class="History">History</h4>
      <ul class="timeline">
        <li>
          <p class="timeline-date">2016年4月</p>
          <div class="timeline-content">
            <p>東京農業大学 地域環境科学部 造園科学科に入学</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2016年5月</p>
          <div class="timeline-content">
            <a href="https://www.instagram.com/isfjapan/?hl=ja">世界学生フォーラム（ISF）に所属</a>
          </div>
        </li>
        <li>
          <p class="timeline-date">2018年10月</p>
          <div class="timeline-content">
            <p>世界学生サミット（ISS）にて会場班のリーダーを務める</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年1月</p>
          <div class="timeline-content">
            <p>卒業論文の題目を決める</p>
            <p>「横浜神奈川地域における明治初期からのスポーツフィールドならびに公共緑地の変遷」</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年2月</p>
          <div class="timeline-content">
            <p>株式会社 湘南造園でグリーンキーパー（芝生整備）のアルバイトを始める</p>
            <p>友達と都内の日本庭園を巡ることにハマる</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年3月</p>
          <div class="timeline-content">
            <p>友人の影響でプログラミングの面白さに惹かれ、エンジニアを目指すことに決める</p>
            <p>IT業界を中心に就職活動を始める</p>
            <p>本格的にプログラミングを学び始める（Progate、Udemy）</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年6月</p>
          <div class="timeline-content">
            <p>2社から内定を頂き、内定を承諾する</p>
            <p>入社まで内定社研修・課題が出される</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2019年10月</p>
          <div class="timeline-content">
            <p>内定式が行われる</p>
            <p>しかし、説明会でお伺いしたお話とギャップを感じ内定を辞退<br>
            就職活動をやり直す</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年1月</p>
          <div class="timeline-content">
            <p>卒業論文発表</p>
            <p>今の自分は開発業務に携われるほどのスキルがないことを実感<br>
            スクールに入って１からプログラミングを学び直したい・チーム開発を経験したいと思うようになる<br>
            6月からスクールに通うことが決まる</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年3月</p>
          <div class="timeline-content">
            <p>東京農業大学 地域環境科学部 造園科学科を卒業</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年4月</p>
          <div class="timeline-content">
            <p>プログラミングの勉強（Progate、Udemy、Railsチュートリアル）だけでなく、<br>
            コンピューターサイエンス（基本情報技術者）、英語の勉強も始める</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年6月</p>
          <div class="timeline-content">
            <p>プログラミングスクールに入学（2ヶ月半）</p>
            <p>HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、Git・Githubの使い方、<br>
            データベースの設計、Railsを使って簡単なアプリケーションの作成<br>
            チーム開発でフリマアプリの制作</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年8月</p>
          <div class="timeline-content">
            <p>プログラミングスクールを卒業</p>
            <p>ポートフォリオの制作に取り掛かる</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年10月</p>
          <div class="timeline-content">
            <p>ポートフォリオが完成</p>
            <p>あなたのお気に入りの庭園写真共有サイト<br>
            「<a href="https://www.niwaai.com/">Niwaai</a>」</p>
            <p>2度目の就職活動をスタート</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年11月（現在）</p>
          <div class="timeline-content">
            <p>Vue.jsでSPAのポートフォリオサイトを制作開始</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  components: {
    Timeline
  },
  data: function () {
    return {
      user_id: 'arfaben__5816'
    }
  }
}
</script>

<style>
.content-wrapper {
  width: 90vw;
  height: 220vh;
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
  width: 40%;
  height: 201%;
  margin-right: 20px;
}

.profile {
  height: 40%;
  margin-bottom: 20px;
  display: flex;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.left-profile {
  width: 35%;
  height: 100%;
}

.profile-img {
  margin-top: 30px
}

.right-profile {
  width: 65%;
  height: 100%;
  text-align: left;
}

.profile-title {
  font-size: 3em;
  margin-bottom: 10px;
}

.mytwitter {
  height: 60%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.twitter {
  text-align: left;
  font-size: 3em;
}

.right-content {
  width: 60%;
  height: 203%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.History {
  font-size: 3em;
  text-align: left;
  margin-left: 50px;
}

.timeline > li {
  overflow: hidden;
  margin: 0px;
  position: relative;
}

.timeline-date {
  width: 110px;
  float: left;
  margin-top: 15px;
}

.timeline-content {
  width: 81%;
  float: left;
  border-left: 3px #e5e5d1 solid;
  padding: 10px;
}

.timeline-content:before {
  content: '';
  width: 12px;
  height: 12px;
  background: #6fc173;
  position: absolute;
  left: 106px;
  top: 20px;
  border-radius: 100%;
}
</style>
