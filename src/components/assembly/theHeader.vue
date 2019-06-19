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
            <router-link :to="{ path : item.path }">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      navList: [
        {
          name: "首页",
          path: "/home"
        },
        {
          name: "整木品牌家具图纸库",
          path: "/zhengmu"
        },
        {
          name: "完整版家具图纸库",
          path: "/completePics"
        },
        {
          name: "分类家居图纸库",
          path: "/classFy"
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
  height: 100px;
  line-height: 100px;
  width: 100%;
  position: fixed;
  
}
.top {
  display: flex;
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
  margin: 24px 0 0 0;
}
.nav ul li {
  margin: 0 2em;
  transition: all 0.5s ease;
  height: 36px;
  line-height: 36px;
  padding: 6px 0;
  position: relative;
}
.nav ul li a {
  color: #fff;
}

.nav li::before {
  content: '';
  position: absolute;
  left: 50%;
  width: 100%;
  height: 2px;
  top: 46px;
  background-color: #fff;
  transform-origin: center;
  transform: translate(-50%, 0) scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav li:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
</style>