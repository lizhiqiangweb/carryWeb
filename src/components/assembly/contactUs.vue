<!--  -->
<template>
  <div class="contactUs">
    <div class="fx">
      <div class="wx">
        <img src="../../assets/images/wx.jpg" />
        <p>微信二维码扫一扫</p>
      </div>
      <div class="icon">
        <ul>
          <li class="qq">
            <span>2201692539</span>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes">
              <img src="../../assets/images/qq.png" alt>
            </a>
          </li>
          <li class="phone">
            <span>2201692539</span>
            <img src="../../assets/images/phone.png" alt>
          </li>
          <li class="goTop" @click="go">
            <img src="../../assets/images/top.png" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    go() {
      var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, );
    }
  }
};
</script>
<style scoped>
.contactUs {
  position: relative;
}
.fx {
  position: fixed;
  right: 6px;
  bottom: 12%;
}
.icon {
  background: #f0f0f0;
  padding: 12px 8px;
  box-shadow: 1px 1px 6px #999;
  width: 34px;
  margin: 12px 0 0 66px;
}
.icon li {
  margin: 8px auto 8px;
  position: relative;
}
.icon li:hover {
  cursor: pointer;
}
.icon ul li img {
  width: 32px;
  height: 32px;
}
.icon span {
  position: absolute;
  right: 48px;
  top: -4px;
  display: block;
  width: 120px;
  height: 46px;
  line-height: 46px;
  background: #f0f0f0;
  padding-left: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: none;
  opacity: 0;
  transition: all 0.5s ease;
}
.icon li:hover span {
  display: block;
  opacity: 1;
}
.wx img {
  width: 120px;
  height: 120px;
}
.wx p {
  text-align: center;
  font-size: 12px;
  color: #666;
}
</style>