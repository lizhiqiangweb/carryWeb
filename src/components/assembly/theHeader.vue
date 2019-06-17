<!--  -->
<template>
  <header>
    <div class="top">
      <div class="logo">
        <h3>腾青工坊家居设计图纸库</h3>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item, index) in navList" :key="index">
            <router-link :to="{path: item.path}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import router from '../../router/router'

export default {
  data() {
    return {
      navList: [
        {
          name: "首页",
          path: "../home"
        },
        {
          name: "整木品牌家具图纸库",
          path: "../zhengmu"
        },
        {
          name: "完整版家具图纸库",
          path: "../home"
        },
        {
          name: "所有家居图纸库",
          path: "../home"
        }
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
};
</script>
<style>
@import "../../assets/css/common.css";
header {
  background: #00bb80;
}
.top {
  display: flex;
  height: 100px;
  line-height: 100px;
  width: 90%;
  justify-content: center;
  margin: 0 auto;
}
.logo {
  color: #fff;
}
.nav {
  margin-left: 24%;
}
.nav ul {
  display: flex;
  flex-wrap: wrap;
}
.nav ul li {
  margin: 0 2em;
}
.nav ul li a {
  color: #fff;
}
</style>