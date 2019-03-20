<template>
    <div class="slider-outsize" :style="_style">
        <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" v-if="_tag == 'img'">
          <!-- 直接使用slideritem slot -->
          <slideritem v-for="(item,index) in _datas" :key="index" :style="_style">
                <img :src="item.adFile">
          </slideritem>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
      <slider ref="slider" :options="options" v-if="_tag == 'text'">
          <!-- 直接使用slideritem slot -->
          <slideritem v-for="(item,index) in _datas" :key="index" :style="_itemStyle">
                <p :style="_textStyle">{{item.articleTitle}}</p>
          </slideritem>
          <!-- 设置loading,可自定义 -->
          <div slot="loading">loading...</div>
      </slider>
    </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'// import slider components
export default {
    name: 'Swiper',
     components: {
      slider,
      slideritem
    },
    props: ['_auto','_datas', '_tag' ,'_direction', '_style', '_itemStyle', '_textStyle', '_pagination']
        ,
    data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
        //   thresholdDistance:500,
        //   thresholdTime:100,
          autoplay:this._auto,
          loop:true,
          pagination: this._pagination!=undefined?this._pagination:true,
          direction:this._direction?this._direction:'horizontal',
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 300
        }
      }
    },
    created: function() {
        // console.log(this._pagination)
    }
}
</script>

<style lang='scss' scoped>
    .slider-outsize {
        height: getAdaptSize(18.7rem);
        overflow: hidden;
    }
    .slider-item {
        width: 100%;
        height: getAdaptSize(18.7rem);
        img {
            width: 100%;
            height: getAdaptSize(18.7rem);
        }
        p {
            color: #333;
            font-size: getAdaptSize(1.8rem);
        }
    }
</style>
