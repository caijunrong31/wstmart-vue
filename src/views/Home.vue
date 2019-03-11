<template>
    <div id="home">
        <header class="xn-box ac jsb">
            <div class="classify xn-box center"><i></i></div>
            <div class="search">按关键字搜索商品</div>
            <div class="user">
                <div class="login">登陆</div>
            </div>
        </header>
         <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
              <Swiper 
                :_auto="4000" 
                :_tag="'img'"
                :_datas="bannerData"></Swiper>
         </mt-loadmore>
    </div>
</template>

<script>
import Vue from 'vue'
import { getIndexData, getFloorData } from '@/api/home'
import Swiper from '@/components/Swiper'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)
export default {
    name:'Home',
    components:{Swiper},
    data(){
        return {
            allLoaded: false,
            bannerData: {},

        }
    },
    mounted: function(){
        getIndexData().then(res=>{
          console.log(res)
          const data = res.data
          this.bannerData = data.swiper
        })
        // getFloorData(0).then(data=>{
        //   console.log(data)
        // })
    },
    methods:{
        loadTop() {
            this.$refs.loadmore.onTopLoaded()
        },
        loadBottom() {
            this.allLoaded = true // if all data are loaded
            this.$refs.loadmore.onBottomLoaded()
        }
    },
    created: function(){
        this.$store.dispatch('changeFootStatus', true)
    } 
}
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: getAdaptSize(4rem);
        background-color: #e50e0f;
        .classify{
            width: getAdaptSize(5rem);
            height: getAdaptSize(3.3rem);
            i{
                display: block;
                width: getAdaptSize(2rem);
                height: getAdaptSize(2rem);
                background: url(../assets/img/classify.png);
                background-size: 100%;
            }
        }
        .search{
            box-sizing: border-box;
            padding-left: getAdaptSize(2.5rem);
            width: 75%;
            height: getAdaptSize(2.8rem);
            line-height: getAdaptSize(2.9rem);
            color: #666;
            font-size: getAdaptSize(1.6rem);
            background-color: #fff;
            border-radius: 15px;
            background-repeat: no-repeat; 
            background-image: url(../assets/img/search.png);
            background-size: getAdaptSize(1.3rem) getAdaptSize(1.3rem);
            background-position: 3% center;
        }
        .user{
            .login{
                width: getAdaptSize(5rem);
                height: getAdaptSize(4rem);
                line-height: getAdaptSize(4rem);
                text-align: center;
                font-weight: bold;
                font-size: getAdaptSize(1.6rem);
                color: #fff;
            }
        }
    }
</style>


