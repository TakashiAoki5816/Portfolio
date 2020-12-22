<template>
  <div class="contact-wrapper">
    <div class="title-header">
      <div class="title">
        <h2 class="Contact-title">Contact</h2>
      </div>
    </div>
    <img src="../assets/profile-img.png" class="contact-img">
    <div class="contact-content">
      <p>ここまでポートフォリオサイトを見てくださり、ありがとうございました。</p>
      <p>もし、私についてご連絡・コメント等ありましたらTwitterのDMまでよろしくお願いします。</p>
      <p class="twitter-link">Twitter:<a href="https://twitter.com/arfaben__5816" class="bluelink" target="_blank" rel="noopener noreferrer"> https://twitter.com/arfaben__5816</a></p>
    </div>
  </div>
</template>

<script>
</script>

<style>
.contact-wrapper {
  width: 90vw;
  height: 84vh;
  margin: 10px auto;
}

.contact-img {
  height: 250px;
  width: 250px;
}

.contact-content {
  margin-top: 30px;
  font-size: 18px;
}

.twitter-link {
  margin-top: 20px;
}

@media (max-width: 480px) {
  .Contact-title {
    font-size: 1.3em;
  }
}
</style>
