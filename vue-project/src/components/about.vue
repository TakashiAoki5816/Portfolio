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
      </div>
      <div class="mytwitter">
      </div>
    </div>
    <div class="right-content">
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
  background: rgb(143, 237, 100);
}

.right-content {
  width: 40%;
  height: 100%;
  background-color: cornflowerblue;
}

.mytwitter {
  height: 50%;
  background: rgb(148, 66, 141);
}

</style>
