<template>
  <div class="skills-wrapper">
    <div class="title-header">
      <div class="title">
        <h2>Skills</h2>
      </div>
    </div>
    <div class="skills-sentences">
      <p>今までに学習してきた言語・スキルです</p>
      <p>広く浅くではありますが、最近は様々な言語についての知見を深めることを意識しています</p>
      <p>今後は、様々な言語についての知見を深めながら、少しずつ専門性を高めていきたいです</p>
    </div>
    <div class="skills-charts">
       <frontend></frontend>
       <backend></backend>
       <depops></depops>
    </div>
    <div class="skills-explanation">
      <p>チャートの見方としては「1：軽く学習した程度」、「2：数ヶ月以上学習しているがもう少し習熟が必要」、「3：簡単なCRUDアプリを制作できる、基本的なサービスは扱うことができる」</p>
    </div>
  </div>
</template>

<script>
import frontend from './radar-charts/front-end'
import backend from './radar-charts/back-end'
import depops from './radar-charts/depops'

export default {
  components: {
    frontend,
    backend,
    depops
  }
}
</script>

<style>
.skills-wrapper {
  width: 90vw;
  height: auto;
  margin: 10px auto;
  background-color: darkorange;
}

.skills-charts {
  display: flex;
  height: 55vh;
  background-color: rgb(255, 255, 255);
  margin: 20px 50px;
}

.skills-explanation {
  height: 150px;
}

</style>
