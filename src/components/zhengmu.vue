<!--  -->
<template>
  <div class="container">
    <!-- 选项卡 -->
    <div class="tab-box">
      <ul>
        <li
          v-for="(item, index) in tabItems"
          :key="index"
          @click="cur=index"
          :class="{active:cur==index}"
        >{{item.tabTit}}</li>
      </ul>
      <p class="remarks">
        注：展示的都是部分内容；国内整木品牌 核心CAD资料共有78项内容，网站中会展示三项，想了解更多详情，
        <span>请加微信：tantan11220</span>
      </p>
      <div class="tab-item" v-for="(item, index) in tabItems" :key="index" v-show="cur==index">
        <p class="content">{{item.content}}</p>
      </div>
    </div>
    <p class="data-img">
      <img src="../assets/images/zm_img1.jpg">
    </p>
    <!-- 标准 迈丹尼 -->
    <div class="zmContent">
      <div class="zmContent-item" v-for="(item, index) in contents" :key="index" v-if="index==0">
        <div class="tit-box">
          <p class="tit">{{item.tit}}</p>
        </div>
        <div class="main-content">
          <div class="zmDis">
            <p class="disTit">{{item.disTit}}</p>
            <div class="dis-content">
              <p class="disContent">{{item.disContent}}</p>
            </div>
          </div>
          <img src="../assets/images/zm_img2.jpg" />
        </div>
      </div>
      <div class="imgBox">
        <div class="imgLeft">
          <img src="../assets/images/zm_img3.jpg" alt="腾青工坊">
        </div>
        <div class="imgList">
          <div class="imgList1">
            <img src="../assets/images/zm_img4.jpg" alt="腾青工坊">
            <img src="../assets/images/zm_img5.jpg" alt="腾青工坊">
          </div>
          <div class="imgList2">
            <img src="../assets/images/zm_img6.jpg" alt="腾青工坊">
            <img src="../assets/images/zm_img7.jpg" alt="腾青工坊">
          </div>
        </div>
      </div>
    </div>
  <!-- 万仕达 -->
    <div class="zmContent1">
      <div class="zmContent-item">
        <div class="tit-box">
          <p class="zmTit1">{{zmContent1.zmContent1Title}}</p>
        </div>
        <div class="main-content">
          <div class="zmContent-top">
            <p>{{zmContent1.zmContent1Tit}}</p>
            <p>{{zmContent1.zmContent1Dis}}</p>
            <img :src="zmContent1.zmContent1Img1" />
            <img :src="zmContent1.zmContent1Img2" />
          </div>
        </div>
      </div>
    </div>

    <!-- 简木 -->
    <div class="zmContent">
      <div class="zmContent-item" v-for="(item, index) in contents" :key="index" v-if="index==1">
        <div class="tit-box">
          <p class="tit">{{item.tit}}</p>
        </div>
        <div class="main-content">
          <div class="zmDis">
            <p class="disTit">{{item.disTit}}</p>
            <div class="dis-content">
              <p class="disContent">{{item.disContent}}</p>
            </div>
          </div>
          <img src="../assets/images/zm_img10.jpg" />
        </div>
      </div>
      <div class="imgBox">
        <div class="imgList">
          <img src="../assets/images/zm_img11.jpg" alt="腾青工坊">
          <img src="../assets/images/zm_img12.jpg" alt="腾青工坊">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerUrl: require("../assets/images/banner1.jpg"),
      cur: 0,
      tabItems: [
        {
          tabTit: "国内整木品牌，核心CAD资料展示内容",
          content:
            "龙泽伟尼CAD参考、鼎润衣柜设计资料集、隆佰润、青岛一木、飞云（首席公馆）、风鸟、顶固、韩居丽格、郁林、路易 法洛可、赛诺图库、豪利、蒋闻鹤《商铺风水选 择与布局》、联邦高登衣柜、美步、老木匠、绿捷贝尔楼梯、精益豪庭广州展会、简木最新素材、盛友、百得胜衣柜设计资料集、玛格定制、瀚森、浙江喜盈门木业、玛格、永吉楼梯、欧琳橱柜、欧派、森森世嘉、梦天木门、格林尼、标准迈丹尼、木思堂、方正木业、恩雅梵尔赛、德森、巴特利、德嘉印象、帝杉、富友、宫廷爵士、尚百木业、富几、实木堂所有模板CAD、好莱客内部设计资料集、伊仕利衣柜设计资料集、索菲亚衣柜设计资料集、图森、名杉、国振、和玺木门、史丹利衣柜产品模块、卡尔凯旋资料、博林天宇、博洛尼、凯德堡、乔金斯、冠牛、六喜源、倍斯特、东威利线型类、上海国振、万仕达、M77、好莱客衣柜设计资料集"
        },
        {
          tabTit: "高级整木学习视频教程",
          content: ""
        },
        {
          tabTit: "国内整木定制标准文件",
          content: ""
        }
      ],
      contents: [
        {
          tit: '标准 迈丹尼',
          disTit: '标准迈丹尼：（72个文件夹）',
          disContent: '铜条玻璃图片、迈丹尼餐、迈丹尼酒柜、迈丹尼案例、迈丹尼木门、迈丹尼护墙、迈丹尼扫描、迈丹尼展厅、迈丹尼客厅、迈丹尼图片、迈丹尼厨房、迈丹尼卧房、迈丹尼书房、迈丹尼CAD、温莎古堡衣帽间、温莎古堡橱柜、彼瑞丽居产品、实木整体橱柜样板、613e迈丹尼展厅'
        },
        {
          tit: '简木',
          disTit: '简木：（11个文件夹）',
          disContent: '简木商学院经销商资料、报价系统、商学院后续增加及修改标准、CAD素材资料、简木商学院经销商资料汇总、简木常用雕花模块、简木线条模板；罗马柱设计模块、简木常用雕花模块增加部分、简木美式系列、简木欧式系列'
        }
      ],
      zmContent1: {
        zmContent1Title: '万仕达',
        zmContent1Tit: '万仕达：（18个文件夹）',
        zmContent1Dis: '技术图、店面、店面设计、复合墙板隐形门、公司资料、五金表、万仕达日常电子文档、万仕达新展厅CAD、万仕达下单术语、模板多样归类、工作资料、通讯录。',
        zmContent1Img1: require('../assets/images/zm_img8.jpg'),
        zmContent1Img2: require('../assets/images/zm_img9.jpg')
      }
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
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
  color: #333;
}
.data-img {
  text-align: center;
  padding-bottom: 28px;
}
/* 标准 迈丹尼 */
.zmContent {
  background: #fff;
  padding-bottom: 30px;
}
.zmContent1 {
  background: #00bb80;
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
.zmTit1 {
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
.zmDis {
  margin: 88px 28px 0 0 ;
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

.zmContent-top p {
  color: #fff;
  font-size: 18px;
}
.zmContent-top img {
  margin: 28px 0 0 0;
}
</style>