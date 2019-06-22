<!--  -->
<template>
  <div class="container">
    <!-- 选项卡 -->
    <div class="tab-box">
      <ul>
        <li
          v-for="(item, index) in tabItems"
          :key="index"
          @click="goTo(index)"
          :class="{active:cur==index}"
        >{{item.tabTit}}</li>
      </ul>
      <p class="remarks">
        注：展示的都是部分内容；完整版家具图纸库共有18项内容，网站中会展示三项，想了解更多详情，
        <span>请加微信：tantan11220</span>
      </p>
    </div>
    <!-- 全国名师3DMAX视频定制教程 -->
    <div class="wzContent1 listshow0">
      <div class="wzContent-item">
        <div class="tit-box">
          <p class="tit">全国名师3DMAX视频定制教程</p>
        </div>
        <div class="main-content">
          <div class="wzContent-top">
            <p>{{wzContent1.wzContent1Tit}}</p>
            <p>{{wzContent1.wzContent1Dis}}</p>
            <img :src="wzContent1.wzContent1Img1">
            <img :src="wzContent1.wzContent1Img2">
          </div>
        </div>
      </div>
    </div>

    <!-- 各类内部风格 -->
    <div class="wzContent listshow1">
      <div class="wzContent-item" v-for="(item, index) in contents" :key="index" v-if="index==0">
        <div class="tit-box">
          <p class="wzTit1">{{item.tit}}</p>
        </div>
        <div class="main-content">
          <div class="zmDis">
            <p class="disTit">{{item.disTit}}</p>
            <div class="dis-content">
              <p class="disContent">{{item.disContent}}</p>
            </div>
          </div>
          <img src="../assets/images/wz_img3.jpg">
        </div>
      </div>
      <!-- 各类内部风格图组 -->
      <div class="imgBox">
        <div class="imgLeft">
          <img src="../assets/images/wz_img4.jpg" alt="腾青工坊">
        </div>
        <div class="imgList">
          <div class="imgList1">
            <img src="../assets/images/wz_img5.jpg" alt="腾青工坊">
            <img src="../assets/images/wz_img6.jpg" alt="腾青工坊">
          </div>
          <div class="imgList2">
            <img src="../assets/images/wz_img7.jpg" alt="腾青工坊">
            <img src="../assets/images/wz_img8.jpg" alt="腾青工坊">
          </div>
        </div>
      </div>
    </div>

    <!-- 600U盘图册原图 -->
    <div class="wzContent2 listshow2">
      <div class="wzContent-item" v-for="(item, index) in contents" :key="index" v-if="index==1">
        <div class="tit-box">
          <p class="tit">{{item.tit}}</p>
        </div>
        <div class="main-content main-content1">
          <div class="zmDis">
            <p class="disTit">{{item.disTit}}</p>
            <div class="dis-content">
              <p class="disContent">{{item.disContent}}</p>
            </div>
          </div>
          <img src="../assets/images/wz_img9.jpg">
        </div>
      </div>
      <div class="imgBox">
        <div class="imgList">
          <img src="../assets/images/wz_img10.jpg" alt="腾青工坊">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerUrl: require("../assets/images/banner2.jpg"),
      cur: 0,
      tabItems: [
        {
          tabTit: "全国名师3DMAX视频定制教程",
          content: ""
        },
        {
          tabTit: "各类内部风格",
          content: ""
        },
        {
          tabTit: "600U盘图册原图",
          content: ""
        }
      ],
      contents: [
        {
          tit: "各类内部风格",
          disTit: "各类内部风格：（6个文件夹）",
          disContent:
            "现代经典、欧式经典、东南亚风格、非洲风格、田园风格、新古典主义"
        },
        {
          tit: "600U盘图册原图",
          disTit: "600U盘图册原图：（618个文件夹）",
          disContent: "600U盘图册原图：包含家具设计各大小配件的全图合集"
        }
      ],
      wzContent1: {
        wzContent1Tit: "全国名师3DMAX视频定制教程：（1956个文件）",
        wzContent1Dis:
          "全国名师3DMAX视频定制教程：包含幕后工作室视频与建模教程、全球顶级案例",
        wzContent1Img1: require("../assets/images/wz_img1.jpg"),
        wzContent1Img2: require("../assets/images/wz_img2.jpg")
      }
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    goTo(num) {
      var el = document.getElementsByClassName(`listshow${num}`)[0];
      console.log(el.offsetTop);
      if (this.showIndex == num) {
        this.showIndex = null;
      } else {
        this.showIndex = num;
      }
      this.$nextTick(function() {
        window.scrollTo({ behavior: "smooth", top: el.offsetTop });
      });
    },
    // tabColor(index) {
    //   this.cur = index
    // }
  }
};
</script>
<style scoped>
@import "../assets/css/common.css";

.remarks {
  width: 1200px;
  margin: 28px auto 18px;
}
.remarks span {
  color: red;
}
.tab-box {
  padding: 32px 0 28px 0;
}
.tab-box ul {
  display: flex;
  justify-content: center;
}
.tab-box ul li {
  margin: 0 6px;
  background: #fff;
  color: #333;
  display: block;
  width: 396px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
}
/* .tab-box ul li:first-child {
  background: #00bb80;
  color: #fff;
} */
.tab-box ul li:hover {
  cursor: pointer;
}
.tab-box ul li.active {
  background: #00bb80;
  color: #fff;
}
.tab-item {
  width: 1200px;
  margin: 0 auto;
  transition: all 0.5s ease;
}
.tab-item p {
  line-height: 1.8em;
  font-size: 16px;
}
.data-img {
  text-align: center;
  padding-bottom: 28px;
}
/* 全国名师3DMAX视频定制教程 */
.wzContent {
  background: #00bb80;
  padding-bottom: 30px;
}
.wzContent1 {
  background: #fff;
  padding-bottom: 30px;
}
.wzContent2 {
  background: #fff;
  padding-bottom: 30px;
}
.tit-box {
  text-align: center;
  height: 130px;
  line-height: 130px;
}
.tit {
  background: url(../assets/images/home_tit_icon.png) no-repeat;
  height: 80px;
  line-height: 80px;
  display: inline-block;
  width: 398px;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  color: #333;
}
.wzTit1 {
  background: url(../assets/images/home_tit_icon1.png) no-repeat;
  height: 80px;
  line-height: 80px;
  display: inline-block;
  width: 398px;
  text-align: center;
  margin: 0 auto;
  font-size: 24px;
  color: #fff;
}
.main-content {
  width: 1200px;
  margin: 0 auto 30px;
  display: flex;
}
.main-content p {
  color: #fff;
}
.main-content1 p {
  color: #333 !important;
}
.main-content img {
  margin: 0 0 0 82px;
}
.main-content1 img {
  margin: 0 0 0 204px;
}
.zmDis {
  margin: 88px 28px 0 0;
  font-size: 18px;
  line-height: 1.8em;
}
.imgBox {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.imgLeft img {
  width: 595px;
  height: 402px;
}
.imgList {
  margin: 1px 0 0 7px;
}

.wzContent-top p {
  color: #333;
  font-size: 18px;
}
.wzContent-top img {
  margin: 28px 0 0 0;
}
</style>