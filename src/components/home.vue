<!--  -->
<template>
  <div class="container">
    <div class="banner">
      <img :src="bannerUrl" alt>
    </div>
    <div class="news">
      <p>
        作为家具设计师，想要快速的找到自己的
        <span>设计图纸</span>，怎么能不收藏几个优秀的图纸网站呢？做设计最重要的就是灵感，要是有
        <span>一库的素材</span>在手，
        <span>万事无忧！</span>
      </p>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in contents" :key="index">
        <div class="tit-box">
          <p class="tit">{{item.tit}}</p>
        </div>
        <div class="discript">
          <p class="discriptTit">{{item.discriptTit}}</p>
          <div class="discript-content">
            <p class="discript1">{{item.discript1}}</p>
            <p class="discript2">{{item.discript2}}</p>
            <p class="discript3">{{item.discript3}}</p>
          </div>
        </div>
        <img :src="item.imgUrl" alt="腾庆搬运站">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      bannerUrl: require("../assets/images/banner1.jpg"),
      contents: [
        {
          tit: "整木品牌家具图纸库",
          discriptTit: "家居设计师必备",
          discript1:
            "1、高端定制家具设计逐渐成为家具行业的新趋势。为充分利用每一寸空间，实现个性化家居，设计师的设计水平尤为重要。",
          discript2:
            "2、保持设计风格的多变，把握设计造型比例需要设计师花费大量精力，而培养设计团队周期太长，耗时费力。",
          discript3:
            "3、“整木家具图纸库”就能为你解除灵感枯竭的忧思。“整木家具图纸库”产品体系完善，设计元素丰富，设计模块新颖。是全方位提升设计师的原创研发能力的首选，让设计师在激烈的市场红海中杀出一条血路！",
          imgUrl: require("../assets/images/home_img1.jpg")
        },
        {
          tit: "完整版家具图纸库",
          discriptTit: "家居设计师必备",
          discript1:
            "1、如果您是家具生产厂家，全套版家具设计图纸这套资源就是您的藏宝库！请勿拷贝给您的竞争对手使用。",
          discript2:
            "2、如果您是家具设计师，全套版家具设计图纸这套资源就是您的掘金库！无论是作为家具设计图纸三视图产品快速出样，还是家具设计图纸产品研发参考，全套版家具设计图纸都将给你意想不到的收获!",
          discript3:
            "3、通过我们的“完整家具设计图纸库”中资料的灵活拼接，可以不断挖掘新的家具设计款式，这也是许多家具设计师常用的方式，通过这样的拷贝式设计，能大大提高制图效率，你让再也无须担心跟不上市场脚步。",
          imgUrl: require("../assets/images/home_img2.jpg")
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
@import "../assets/css/common.css";

.content-item {
  padding-bottom: 30px;
}
.content-item img {
  width: 100%;
  height: auto;
}
.news {
  height: 90px;
  line-height: 90px;
  background: #fff;
}
.news p {
  font-size: 20px;
  text-align: center;
  color: #333;
}
.news span {
  font-size: 24px;
  color: red;
}
.tit-box {
  background: #fff;
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
.discript {
  width: 1200px;
  margin: 0 auto 30px;
  box-shadow: 1px 1px 10px #ccc;
}
.discriptTit {
  color: #fff;
  font-size: 24px;
  background: #00bb80;
  height: 79px;
  line-height: 79px;
  padding-left: 32px;
}
.discript-content {
  background: #fff;
  padding: 22px 32px 28px;
}
.discript1,
.discript2,
.discript3 {
  color: #333;
  font-size: 18px;
  text-indent: 2em;
  line-height: 1.8em;
}
</style>