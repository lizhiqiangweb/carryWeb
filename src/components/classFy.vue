<!--  -->
<template>
  <div class="container">
    <div class="classFy-item" v-for="(item, index) in classFys" :key="index">
      <p class="fyTit">{{item.fyTit}}</p>
      <p class="fyContent">
        {{item.fyContent}}
      </p>
      <p><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes">&lt;点击联系</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classFys: [
        {
          fyTit: '筑龙室内风水高级研修班',
          fyContent: '筑龙室内风水高级研修班：包含海量3Dmax素材、永久获得业内所有资源更新；大小：5.78GB（包含6个文件，0个文件夹）；价格：400元;'
        },
        {
          fyTit: '与蓝天交换资料',
          fyContent: '与蓝天交换资料：包含 黑龙关整木下单图纸、巨人苑CAD汇总、南国桃园项目、嘉和半岛；大小：654.97MB（包含21个文件，0个文件夹）；价格：300元;'
        },
        {
          fyTit: '新中式轻奢汇总',
          fyContent: '新中式轻奢汇总：包含 极简轻奢案例作品集、极简轻奢整木全屋定制CAD标准图库、俄罗斯轻奢风格等轻奢风格合集；大小：433.43GB（包含22448个文件，806个文件夹）；价格：800元;'
        },
        {
          fyTit: 'nn216.衣帽间设计 合集',
          fyContent: 'nn216.衣帽间设计 合集：包含衣帽间的3D模型、SU模型、图片及CAD文件；大小：8.29GB（包含4个文件，0个文件夹）；价格：400元;'
        },
        {
          fyTit: '唐朝楼梯',
          fyContent: '唐朝楼梯：包含 高清楼梯效果图整套；大小：9.12GB（包含2007个文件，5个文件夹）；价格：400元;'
        },
        {
          fyTit: '室内软装教程',
          fyContent: '室内软装教程：包含色彩设计学习的视频教程与资料；大小：3.77GB（包含12个文件，4个文件夹）；价格：300元;'
        },
        {
          fyTit: '890白皮书压缩版',
          fyContent: '890白皮书压缩版：包含各大背景图集；大小：42.52GB（包含1157个文件，574个文件夹）；价格：500元;'
        },
        {
          fyTit: '设计师绝密谈单成交教程',
          fyContent: '设计师绝密谈单成交教程：包含国内绝对签单视频；大小：56.20GB（包含618个文件，59个文件夹）；价格：500元;'
        },
      ]
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style scoped>
@import "../assets/css/common.css";

.classFy-item:first-child {
  margin: 38px auto 30px;
}
.classFy-item {
  margin: 0 auto 30px;
  width: 66%;
  border: 1px solid #00bb80;
  padding: 28px 18px 46px 36px;
}
.classFy-item p {
  line-height: 1.8em;
}
.classFy-item p a:last-child {
  color: red;
  float: right;
  margin: 12px 0 0 0;
}
.fyTit {
  color: #333;
  font-size: 24px;
}
.fyContent {
  font-size: 18px;
  color: #666;
}
</style>