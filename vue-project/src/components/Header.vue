<template>
  <header>
    <div class= "header">
      <div class= "left-header">
        <router-link to="/"><img src="../assets/logo.png"></router-link>
      </div>
      <ul class="right-header">
        <div class="header-component">
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
        </div>
        <div class="header-component">
          <router-link to="/Skills">
            <li class="header-link">
              Skills
            </li>
          </router-link>
          <router-link to="/Contact">
            <li class="header-link">
              Contact
            </li>
          </router-link>
        </div>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style>
header {
  font-size: 30px;
  height: 66px;
  width: 100%;
}

.header {
  width: 100%;
  height: 66px;
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
}

.right-header {
  display: flex;
}

.header-component {
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
  background-color: rgba(52, 180, 58, 0.8);
}

a {
 text-decoration: none;
 color: #1d1d1d;
}

.right-header a:hover {
 color: #fff;
}

@media (max-width: 480px) {
  .header {
    display: block;
    height: auto;
    font-size: 2５px;
  }

  .right-header {
    width: 100%;
    height: auto;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .header-component {
    display: block;
    width: 100%;
  }

  .header-link {
    width: 100%;
    padding: 0;
  }
}
</style>
