<template>
  <div class="contact-wrapper">
    <div class="title-header">
      <div class="title">
        <h2 class="Contact-title">
          {{title}}
        </h2>
      </div>
    </div>
    <div class="contacts">
      <img src="../assets/profile-img.png" class="contact-img">
      <div class="contact-content">
        <p>最後までポートフォリオサイトを見てくださり、ありがとうございました。</p>
        <p>もし、このポートフォリオサイトについてコメント、ご連絡等ありましたらTwitterのDMまでよろしくお願いします。</p>
        <p class="twitter-link">Twitter:<a href="https://twitter.com/arfaben__5816" class="bluelink" target="_blank" rel="noopener noreferrer"> https://twitter.com/arfaben__5816</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style>
.contact-wrapper {
  width: 90vw;
  height: 84vh;
  margin: 10px auto;
}

.contacts {
  background-color: #fff;
  height: 65vh;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.contact-img {
  margin-top: 50px;
  height: 250px;
  width: 250px;
}

.contact-content {
  margin-top: 40px;
  font-size: 18px;
}

.twitter-link {
  margin-top: 20px;
}

@media (max-width: 480px) {
  .contact-wrapper {
    width: 100vw;
    height: auto;
    margin: 10px auto 20px auto;
  }

  .contacts {
    height: auto;
    padding-bottom: 20px;
  }

  .Contact-title {
    font-size: 1.4em;
    line-height: 1.5em;
  }

  .contact-img {
    margin-top: 30px;
  }

  .contact-content {
    margin-top: 20px;
    padding: 8px;
    font-size: 16px;
  }
}
</style>
