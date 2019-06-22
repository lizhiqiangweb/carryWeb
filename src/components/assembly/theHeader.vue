<!--  -->
<template>
  <header>
    <div class="top">
      <div class="logo">
        <h3>腾青工坊家居设计图纸库</h3>
      </div>
      <div class="nav">
        <ul>
          <li v-for="(item, index) in navList" :key="index" :class="{active2:curIndex==index}" @click="curIndex=index">
            <router-link :to="{ path : item.path }">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- banner -->
    <div class="banner">
      <div v-for="(item, index) in imgList" v-show="index===mark" :key="index" class="slideshow">
        <img :src="item.src">
      </div>
      <div class="bar">
        <span v-for="(item, index) in imgList" :class="{ 'active1':index===mark }" :key="index"></span>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      curIndex: 0,
      navList: [
        {
          name: "首页",
          path: "/"
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
      ],
      imgList: [
        {
          src: require("../../assets/images/banner1.jpg")
        },
        {
          src: require("../../assets/images/banner2.jpg")
        }
      ],
      mark: 0,
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    autoPlay () {  
      this.mark++;  
      if (this.mark === 2) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },  
    play () {  
      setInterval(this.autoPlay, 4000)
    },  
    change (i) {  
      this.mark = i  
    } 
  },
  created() {
    this.play() 
  },
};
</script>
<style>
@import "../../assets/css/common.css";
header {
  background: #00bb80;
  height: 100px;
  line-height: 100px;
  width: 100%;
  position: relative;
}
.top {
  display: flex;
  width: 100%;
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
  margin: 0 1.4em;
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
.active2 {
  border-bottom: 2px solid #fff;
}
.nav li:hover::before {
  transform: translate(-50%, 0) scaleX(1);
}
</style>