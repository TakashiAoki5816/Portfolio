<template>
  <div class="skills-wrapper">
    <div class="title-header">
      <div class="title">
        <h2>Skills</h2>
      </div>
    </div>
    <div class="skills-sentences">
      <p>今までに学習してきた言語・スキルについて公開します</p>
      <p>広く浅くではありますが、最近は様々な言語についての知見を深めることを意識しています</p>
      <p>今後は、様々な言語についての知見を深めながら、少しずつ専門性を高めていきたいです</p>
    </div>
    <div class="skills-charts">
      <div class="radar-chart">
       <frontend></frontend>
      </div>
    </div>
  </div>
</template>

<script>
import frontend from './front-end'

export default {
  components: {
    frontend
  }
}
</script>

<style>
.skills-wrapper {
  width: 90vw;
  height: 80vh;
  margin: 10px auto;
  background-color: darkorange;
}

.skills-charts {
  height: 50vh;
  background-color: #fff;
  margin: 10px auto;
}

.radar-chart {
  width: 25vw;
  height: 30vh;
  margin: 30px auto;
}

</style>
