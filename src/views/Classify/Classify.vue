<template>
  <div id="classify">
    <header class="xn-box center">
        <div class="search">按关键字搜索商品</div>
    </header>
    <div class="container xn-box jsb">
        <div class="sidebar">
          <ul>
            <li 
            :class="{'active':item.isActive}" 
            v-for="(item,index) in sidebarData" 
            :key="index"
            @click="showAssify(index)">{{item.catName}}</li>
          </ul>
        </div>
        <div class="right-side">
            <div class="right-side-item" v-show="currentIndex==index" v-for="(item,index) in catsData" :key="index">
                <Swiper 
                  :_isShow="item.ads.length>0"
                  :_auto="false" 
                  :_tag="'img'"
                  :_style="'height:11.8rem'"
                  :_datas="item.ads"></Swiper>
                <GoodsClassify
                  :_catId="item.catId"
                  :_datas="item.childList"></GoodsClassify>
            </div>
        </div>
      </div>
  
  </div>
</template>

<script>
import { imgUrlJoin, getValsFromObjArr } from '@/utils/index'
import { getCatsData } from '@/api/classify'
import Swiper from '@/components/Swiper'
import GoodsClassify from './GoodsClassify'
export default {
  name: 'Classify',
  components:{
    Swiper,
    GoodsClassify
    },
  data () {
    return {
      currentIndex: 0,
      catsData: [],
      sidebarData: []
    }
  },
  created: function(){
      this.$store.dispatch('changeFootStatus', true)
  },
  mounted: function(){
      this.loadData()
  },
  methods:{
    loadData(){
      this.$common.loading()
      getCatsData().then(res=>{
        console.log(res)
        if(res.status!=-1){
          this.catsData = res.data
          console.log('catsData: ', this.catsData)
          this.catsData.forEach((item)=>{
            item.ads = imgUrlJoin(item.ads, 'adFile')
            item.childList.forEach((itemIn)=>{
              itemIn.childList = imgUrlJoin(itemIn.childList, 'catImg')
            })
          })
          this.sidebarData = getValsFromObjArr(['catName'], this.catsData)
          this.sidebarData[0].isActive = true
          this.$common.loading(false)
        }
      })
    },
    showAssify(index){
      this.currentIndex = index
      this.sidebarData.forEach((item)=>{item.isActive=false})
      this.sidebarData[index].isActive = true
      console.log(this.catsData[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  header{
      margin-bottom: 2px;
      width: 100%;
      height: getAdaptSize(4rem);
      background-color: #e50e0f;
      .search{
          box-sizing: border-box;
          padding-left: getAdaptSize(2.5rem);
          width: 80%;
          height: getAdaptSize(2.8rem);
          line-height: getAdaptSize(2.9rem);
          color: #666;
          font-size: getAdaptSize(1.6rem);
          background-color: #fff;
          border-radius: 15px;
          background-repeat: no-repeat; 
          background-image: url(../../assets/img/search.png);
          background-size: getAdaptSize(1.3rem) getAdaptSize(1.3rem);
          background-position: 3% center;
      }
  }
  .sidebar{
    width: 28%;
    height: getAdaptSize(56.8rem);
    overflow-x: auto;
    overflow-y: auto;
    li{
      box-sizing: border-box;
      width: 100%;
      height: getAdaptSize(5.4rem);
      line-height: getAdaptSize(5.4rem);
      color: #000;
      font-size: getAdaptSize(1.6rem);
      text-align: center;
      background-color: #fff;
    }
    li:not(:first-child){
      margin-top: 2px;
    }
    li.active{
      color: #d50b00;
      background-color: #f5f5f5;
      border-left: 2px solid #d50b00;
    }
  }
  .right-side{
    margin: 0 1%;
    width: 70%;
    height: getAdaptSize(56.9rem);
    overflow-x: auto;
    overflow-y: auto;
  }
</style>
