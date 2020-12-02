<template>
  <header>
    <div class= "header">
      <div class= "left-header">
        <router-link to="/Home">HOME</router-link>
      </div>
      <ul class="right-header">
        <router-link to="/About">
          <li class="header-link">
            About
          </li>
        </router-link>
        <router-link to="/Works">
          <li class="header-link">
            Works
          </li>
        </router-link>
        <router-link to="/Skill">
          <li class="header-link">
            Skill
          </li>
        </router-link>
        <router-link to="/Contact">
          <li class="header-link">
            Contact
          </li>
        </router-link>
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
  height: 66px;
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
.header-link {
  width: 140px;
  padding: 12px;
}
.header-link:hover {
  background-color: rgb(211, 211, 211);
}
a {
  text-decoration: none;
  color: #585858;
}
</style>
