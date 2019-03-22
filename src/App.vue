<template>
  <div id="app">
     <router-view />
    <Footer v-if="isFooterShow"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{Footer},
  computed: {
    isFooterShow: function() {
      return this.$store.getters.footerStatus
    }
  }
}
</script>

<style lang='scss'>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  background-color: #f5f5f5;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html {
  font-size: 10px;
}
#app {
  font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

.mint-header{
  height: getAdaptSize(4rem);
  background-color: #d50b00;
  .mintui{
    font-size: 1.6rem;
  }
  .mint-header-title{
    font-size: 1.4rem;
  }
}

#productInfo{
  .mint-cell-wrapper {
      background-image: none;
      .mint-cell-text {
        margin-right: 20px;
        font-size: getAdaptSize(1.6rem);
        color: #666;
      }
      .mint-cell-value{
         position: relative;
         top: 1px;
         span{
           font-size: getAdaptSize(1.6rem);
           color: #333;
         }
      }
  }
  .mint-cell-title{
      flex: none;
  }
}

</style>

