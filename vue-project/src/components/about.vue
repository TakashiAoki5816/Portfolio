<template>
<div class="about-wrapper">
  <div class="title-header">
    <div class="title">
      <h2>
        {{title}}
      </h2>
    </div>
  </div>
  <div class="Content">
    <div class="left-content">
      <div class="profile">
        <div class="top-profile">
          <h4 class="profile-title">Profile</h4>
          <img src="../assets/profile-img.png" class="profile-img">
        </div>
        <div class="content-profile">
          <p>はじめまして、青木 貴志と申します。</p>
          <p>今年、3月に東京農業大学 地域環境科学部 造園科学科を卒業しました。</p><br>
          <p>4年生の時にプログラミングの面白さにハマり、造園ではなくエンジニアを目指すことに決意しました。</p><br>
          <p>趣味は、サッカー・フットサル・サッカー観戦・ランニング・自転車・プログラミング・音楽</p>
          <p>休日は、サッカーの大会やランニングなど、基本的に体を動かしています。</p><br>
          <p>去年もIT業界を中心に就職活動を行ってい<br>ましたが、納得がいく就職活動ができなかったため、もう一度やり直しています。<br>（2020年11月30日現在）</p><br>
          <p>現在は日々、ポートフォリオのブラッシュアップ・技術力向上に励んでいます。</p>
          <p>最近は、Vue.jsでSPAのポートフォリオサイトを制作しています。</p><br>
          <p>- Twitter:<a href="https://twitter.com/arfaben__5816" class="bluelink" target="_blank" rel="noopener noreferrer"> https://twitter.com/arfaben__5816</a></p>
          <p>- GitHub:<a href="https://github.com/TakashiAoki5816" class="bluelink" target="_blank" rel="noopener noreferrer"> https://github.com/TakashiAoki5816</a></p>
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
            <p><span class="Niwaai-content">東京農業大学 地域環境科学部 造園科学科</span>に入学</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2016年5月</p>
          <div class="timeline-content">
            <a href="https://www.instagram.com/isfjapan/?hl=ja" target="_blank" rel="noopener noreferrer"><span>世界学生フォーラム（ISF）</span></a>に所属
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
            <p>「<span class="sentense">横浜神奈川地域における明治初期からのスポーツフィールド<br>ならびに公共緑地の変遷</span>」</p>
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
            <p>友人の影響でプログラミングの面白さに惹かれ、<br>エンジニアを目指すことに決める</p>
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
            スクールに入って１からプログラミングを学び直したい、<br>チーム開発を経験したいと思うようになる<br>
            6月からスクールに通うことが決まる</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年3月</p>
          <div class="timeline-content">
            <p><span class="Niwaai-content">東京農業大学 地域環境科学部 造園科学科</span>を卒業</p>
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
            <p><span class="sentense">プログラミングスクール</span>に入学（2ヶ月半）</p>
            <p>HTML・CSS・Rubyの基礎文法、CLI操作、Linuxコマンド、<br>Git・Githubの使い方、<br>
            DB設計、Railsを使った簡単なアプリケーションの作成<br>
            チーム開発でフリマアプリの制作</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年8月</p>
          <div class="timeline-content">
            <p><span class="sentense">プログラミングスクール</span>を卒業</p>
            <p>ポートフォリオの制作に取り掛かる</p>
            <p>Docker・AWS・CircleCIについて学習する</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年10月</p>
          <div class="timeline-content">
            <p>ポートフォリオが完成</p>
            <a href="https://www.niwaai.com/" target="_blank" rel="noopener noreferrer"><span class="Niwaai-title">Niwaai</span></a>
          （<a href="https://github.com/TakashiAoki5816/niwaai" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a>）
            <p>『<span class="Niwaai-content">あなたのお気に入りの日本庭園に出会おうを<br>コンセプトにした庭園写真共有サイト</span>』<br>
            <p>2度目の就職活動をスタート</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年11月</p>
          <div class="timeline-content">
            <p>Vue.jsでSPAのポートフォリオサイトを制作開始</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2021年1月</p>
          <div class="timeline-content">
            <p><span class="Niwaai-content">ポートフォリオサイト</span>が完成</p><br>
            <p>PHPの学習を開始</p>
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
      user_id: 'arfaben__5816',
      title: 'About'
    }
  }
}
</script>

<style>
a, span {
  color: rgb(29, 29, 29);
}

.sentense {
  font-weight: bold;
}

.Niwaai-title {
  color: #398a36;
  font-weight: bold;
}

.Niwaai-content {
  color: #398a36;
  font-weight: bold;
}

.about-wrapper {
  width: 90vw;
  height: 280vh;
  margin: 10px auto;
}

.Content {
  height: 100vh;
  display: flex;
}

.left-content {
  width: 40%;
  height: 190%;
  margin-right: 20px;
}

.profile {
  height: 53%;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.top-profile {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}

.profile-img {
  width: 200px;
  height: 180px;
  margin-top: 20px;
  margin-right: 30px;
}

.content-profile {
  text-align: left;
  height: 100%;
  padding: 20px;
}

.profile-title {
  font-size: 3.2em;
  margin: 10px 20px;
  color: #585858;
}

.mytwitter {
  height: 60%;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.right-content {
  width: 60%;
  height: 260vh;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.History {
  font-size: 3.2em;
  text-align: left;
  margin: 10px 0 10px 50px;
  color: #4a4a4a;
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

@media (max-width: 480px) {
  .about-wrapper {
    width: 100vw;
    height: auto;
  }

  .Content {
    height: auto;
    display: block;
  }

  .left-content {
    width: 100%;
  }

  .profile-title {
    margin: 5px 5px 5px 20px;
  }

  .right-content {
    width: 100%;
    height: auto;
    padding-bottom: 50px;
  }

  .mytwitter {
    margin-bottom: 20px;
  }

  .History {
    margin: 10px 0 10px 20px;
    color: #4a4a4a;
  }

  .timeline {
    padding: 10px;
  }

  .timeline-content {
    width: 62%;
  }
}
</style>
