<template>
    <div id="home">
        <header class="xn-box ac jsb">
            <div class="classify xn-box center"><i></i></div>
            <div class="search">按关键字搜索商品</div>
            <div class="user">
                <div class="login">登陆</div>
            </div>
        </header>
         <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
              <Swiper 
                :_auto="4000" 
                :_tag="'img'"
                :_datas="bannerData"></Swiper>
                <nav class="xn-box">
                    <div class="nav-item xn-box column center" v-for="(item,index) in navData" :key="index">
                        <img :src="item.btnImg" :alt="item.btnName">
                        <span>{{item.btnName}}</span>
                    </div>
                </nav>
                <div class="ads">
                    <div class="ads-item" v-for="(item,index) in indexAds" :key="item.adId">
                        <img :src="item.adFile" :alt="item.adId">
                    </div>
                </div>
                <div class="notice-box">
                    <div class="notice xn-box ac jsb">
                        <div class="notice-label xn-box">
                           <span>商城</span>
                           <span class="middle">快讯</span>
                           <span>:</span>
                        </div>
                        <Swiper 
                            :_auto="5000" 
                            :_tag="'text'" 
                            :_direction="'vertical'" 
                            :_datas="newsData" 
                            :_pagination="false" 
                            :_style="'width:58%;height:3.25rem;justify-content:flex-start;overflow:hidden;'"
                            :_itemStyle="'height:3.25rem;justify-content:flex-start;'"
                            :_textStyle="'width:95.5%;color:#e50e0f;overflow:hidden;'"></Swiper>
                        <div class="more xn-box center">
                            更多
                        </div>
                    </div>
                </div>
                <div class="adst clearfix">
                    <div class="adstl pull-left">
                        <img :src="ads.adFile">
                    </div>
                    <div class="adstr pull-left">
                        <img :src="ads3.adFile">
                    </div>
                     <div class="adstr pull-left">
                        <img :src="ads2.adFile">
                    </div>
                </div>
                <GoodsClassify
                    :_datas="catData"
                    ></GoodsClassify>
         </mt-loadmore>
        <p v-if="loading" class="loading-tip xn-box center">
            <mt-spinner color="rgba(255, 51, 153, 1)" type="fading-circle"></mt-spinner>
            <span style="margin-left: 8px;">更多加载中...</span>
        </p>
        <p v-if="allLoaded" class="loading-tip xn-box center" v-else>没有更多了~</p>
    </div>
</template>

<script>
import Vue from 'vue'
import { Loadmore, Spinner } from 'mint-ui'
import { imgUrlJoin } from '@/utils/index'
import { getIndexData, getFloorData } from '@/api/home'
import Swiper from '@/components/Swiper'
import GoodsClassify from './GoodsClassify'

Vue.component(Loadmore.name, Loadmore)
Vue.component(Spinner.name, Spinner)

export default {
    name:'Home',
    components:{
        Swiper,
        GoodsClassify
        },
    data(){
        return {
            loading: false,
            allLoaded: false,
            floorIndex: 0,
            bannerData: {},
            navData: {},
            indexAds:[],
            newsData:[],
            ads:{},
            ads1:{},
            ads2:{},
            ads3:{},
            catData:[]
        }
    },
    created: function(){
        this.$store.dispatch('changeFootStatus', true)
    },
    mounted: function(){
        window.addEventListener('scroll', this.handleScroll)
        this.loadData()
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
        loadData(){
            this.$common.loading()
            getIndexData().then(res=>{
                //   console.log(res)
                const data = res.data
                this.bannerData = imgUrlJoin(data.swiper, 'adFile')
                this.navData = imgUrlJoin(data.btns, 'btnImg')
                this.indexAds = imgUrlJoin(data.indexAds, 'adFile')
                this.newsData = data.news
                this.ads = imgUrlJoin(data.ads, 'adFile')[0]
                this.ads1 = imgUrlJoin(data.ads1, 'adFile')[0]
                this.ads2 = imgUrlJoin(data.ads2, 'adFile')[0]
                this.ads3 = imgUrlJoin(data.ads3, 'adFile')[0]
                this.$common.loading(false)
            })
            getFloorData(0).then(res=>{
                console.log(res)
                const data = res.data
                this.catData.splice(0,this.catData.length)
                this.catData.push(data)
                this.catData[0].goods = imgUrlJoin(this.catData[0].goods, 'goodsImg')
                this.floorIndex = 0;
                this.allLoaded = false
            })
        },
        loadTop() {
            this.loadData()
            this.$refs.loadmore.onTopLoaded()
        },
        loadBottom() {
            this.floorIndex++
            if(!this.allLoaded){
                this.loading = true
                getFloorData(this.floorIndex).then(res=>{
                    console.log('getFloorData: ', res);
                    if(res.status!=-1){
                        let data = res.data
                        data.goods = imgUrlJoin(data.goods, 'goodsImg')
                        this.catData.push(data)
                    }else{
                        this.loading = false
                        this.allLoaded = true
                    }
                })
            }
        },
        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = document.querySelector('#app').offsetHeight;
            if (offsetTop-scrollTop<=612) this.loadBottom();
        }
    }
}
</script>

<style lang="scss" scoped>
    #home{
        margin-bottom: 55px;
        .loading-tip{
            height: getAdaptSize(4rem);
        }
    }
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
                background: url(../../assets/img/classify.png);
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
            background-image: url(../../assets/img/search.png);
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
    nav{
        padding: 8px 0 12px;
        width: 100%;
        background-color: #fff;
        .nav-item {
            width: 25%;
            img{
                margin-bottom: 6px;
                width: getAdaptSize(3.7rem);
                height: getAdaptSize(3.7rem);
            }
            span{
                font-size: getAdaptSize(1.4rem);
                color: #666;
            }
        }
    }
    .ads{
        .ads-item{
           img{
               width: 100%;
               height: getAdaptSize(9.3rem);
           }
        }
    }
    // 消息
    .notice-box {
        padding: 15px 13px;
        background-color: #fff;
        .notice {
        height: getAdaptSize(4rem);
        border: 2px solid #eee;
        box-sizing: border-box;
        padding: 0 0 0 12px;
        border-radius: 50px;
        .notice-label{
            width:26.5%;
            font-weight: bold;
            font-size: getAdaptSize(2rem);
            background-size:50% 70%;
            span:first-child{
                position: relative;
                top: 3px;
                color: #333;
            }
            span.middle{
                margin: 0 2px 0 3px;
                padding: 3px 2px;
                color: #fff;
                background-color: #e50e0f;
                border-radius: 5px;
            }
            span:last-child{
                position: relative;
                top: 2px;
                color: #e50e0f;
            }
        }
        .more{
            width: 16%;
            height: 70%;
            font-size: getAdaptSize(2rem);
            border-left: 1px solid #eee;
        }
        }
    }
    .adst{
        height: getAdaptSize(20rem);
        .adstl{
            width: 45%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .adstr{
            width: 55%;
            height: 50%;
             img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>


