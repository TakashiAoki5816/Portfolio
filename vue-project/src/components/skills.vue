<template>
  <div class="skills-wrapper">
    <div class="title-header">
      <div class="title">
        <h2>Skills</h2>
      </div>
    </div>
    <div class="skills-charts">
      <div class="skills-sentences">
        <p>今までに学習してきた言語・スキルです。広く浅くではありますが、最近は様々な言語についての知見を深めることを意識しています。</p>
        <p>今後は、様々な言語についての知見を深めながら、少しずつ専門性を高めていきたいです。</p>
      </div>
      <div class="radar-charts">
        <div class="frontend">
          <frontend></frontend>
        </div>
        <div class="backend">
          <backend></backend>
        </div>
        <div class="depops">
          <depops></depops>
        </div>
      </div>
      <div class="skills-explanation">
        <p>チャートの見方としては「1：軽く触ったことがある、学習した程度」、「2：数ヶ月以上学習しているがもう少し習熟が必要」、「3：簡単なCRUDアプリを制作できる、基本的なサービスは扱うことができる」という感じです。</p>
      </div>
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
  height: 105vh;
  margin: 10px auto;
}

.skills-charts {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);
}

.skills-sentences {
  text-align: left;
  margin-bottom: 40px;
  line-height: 1.5em;
  padding: 20px;
}

.radar-charts {
  display: flex;
  height: auto;
  margin: 20px 0;
}

.frontend {
  margin: 0 30px 0 15px;
}

.backend {
  margin-right: 30px;
}

.skills-explanation {
  height: 70px;
  text-align: left;
  margin-top: 40px;
  padding: 20px;
}

@media (max-width: 480px) {
  .skills-wrapper {
    width: 90%;
    height: auto;
  }

  .skills-charts {
    height: 205vh;
  }

  .radar-charts {
    width: 50vw;
    display: block;
  }

  .frontend {
    margin: 0;
  }

  .backend {
    margin: 0;
  }
}

</style>
