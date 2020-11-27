<template>
  <header>
    <div class= "header">
      <div class= "left-header">
        <router-link to="/Home">Aoki Takashi's Portfolio</router-link>
      </div>
      <ul class="right-header">
        <li class="About">
          <router-link to="/About">About</router-link>
        </li>
        <li class="Works">
          <router-link to="/Works">Works</router-link>
        </li>
        <li class="Skill">
          <router-link to="/Skill">Skill</router-link>
        </li>
        <li class="Contact">
          <router-link to="/Contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style>
header {
  font-size: 30px;
}
.header {
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.right-header {
  display: flex;
}
ul {
  list-style: none;
}
li {
  width: 140px;
  padding: 12px;
}
li:hover {
  background-color: rgb(211, 211, 211);
}
a {
  text-decoration: none;
  color: #585858;
}
</style>
