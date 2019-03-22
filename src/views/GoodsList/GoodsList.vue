<template>
    <div id="goods-list">
        <Header
            _link="/Classify"
            _title="商品列表"></Header>
        <SearchBox
            _isReadOnly="true"
            _isDisplayTypeShow="true"
            _style="justify-content: center;background-color:#fff;"
            _searchStyle="margin: 0 5px 0 1.5rem;width:80%;background-color:#eee"></SearchBox>
        <div class="container">
            <div class="sort xn-box ac">
                <div class="sort-item xn-box center" @click="changeSort(index)" v-for="(item,index) in sortData" :key="index">
                    <div class="sort-item-inner xn-box center" v-if="index!=sortData.length-1">
                        <div class="text" v-if="!item.isActive">{{item.name}}</div>
                        <div class="text active" v-else>{{item.name}}</div>
                        <div class="img normal" v-if="!item.isActive"></div>
                        <div class="img up" v-if="item.isUp"></div>
                        <div class="img down" v-if="item.isDown"></div>
                    </div>
                     <div class="sort-item-inner screen xn-box center" v-else>
                        <div class="img normal" v-if="!item.isActive"></div>
                        <div class="img active" v-else></div>
                        <div class="text" v-if="!item.isActive">{{item.name}}</div>
                        <div class="text active" v-else>{{item.name}}</div>
                    </div>
                </div>
            </div>
            <ListView 
                @loadMore="loadMore()"
                :_loading="loading"
                :_allLoaded="allLoaded">
                <Goods
                :_datas="goodsData"></Goods>
            </ListView>
        </div>
    </div>
</template>

<script>
import { imgUrlJoin } from '@/utils/index'
import { getGoodsList } from '@/api/goods'
import Header from '@/components/Header'
import SearchBox from '@/components/SearchBox'
import Goods from '@/components/Goods'
import ListView from '@/components/ListView'
export default {
    name: 'GoodsList',
    components: {
        Header,
        SearchBox,
        ListView,
        Goods
    },
    data(){
        return {
            loading:false,
            allLoaded:false,
            catId:-1,
            page:1,
            sortData:[
                {
                    name:'销量',
                    isDown:false,
                    isUp:false,
                    isActive:false
                },
                 {
                    name:'价格',
                    isDown:false,
                    isUp:false,
                    isActive:false
                },
                 {
                    name:'人气',
                    isDown:false,
                    isUp:false,
                    isActive:false
                },
                 {
                    name:'筛选',
                    isDown:false,
                    isUp:false,
                    isActive:false
                }
            ],
            goodsData:[]
        }
    },
    created: function(){
      this.$store.dispatch('changeFootStatus', false)
    },
    mounted: function(){
      this.catId = this.$route.params.id
      this.loadData()
    },
    methods:{
        loadData(){
            getGoodsList(this.catId).then(res=>{
                console.log(res)
                if(res.status!=-1){
                    let data = res.data
                    this.goodsData = imgUrlJoin(res.data.goodsPage.data, 'goodsImg')
                }
            })
        },
        loadMore(){
            this.loading = true
            this.page++
            getGoodsList(this.catId, this.page).then(res=>{
                console.log(res)
                if(res.status!=-1){
                    this.loading = false
                    let data = res.data
                    if(res.data.goodsPage.data.length==0) this.allLoaded = true
                    this.goodsData = this.goodsData.concat(imgUrlJoin(res.data.goodsPage.data, 'goodsImg'))
                }
            })
        },  
        changeSort(index){
            this.setSortDataStatus(index)
        },
        resetSortData(){
            this.sortData.forEach((item)=>{
                item.isUp = false
                item.isDown = false
                item.isActive = false
            })
        },
        setSortDataStatus(index){
            const isDown = this.sortData[index].isDown
            this.resetSortData()
            if(index!=this.sortData.length-1){
                if(!isDown){
                    this.sortData[index].isUp = false
                    this.sortData[index].isDown = true
                }else{
                    this.sortData[index].isUp = true
                    this.sortData[index].isDown = false
                }
                this.sortData[index].isActive = true
            }else{
                this.sortData[index].isActive = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .sort{
        box-sizing: border-box;
        width: 100%;
        height: getAdaptSize(4.2rem);
        background-color: #fff;
        border: 1px solid #eee;
        .sort-item{
            width: 25%;
            height: 100%;
            .text{
                color: #000;
                font-size: 1.4rem;
            }
            .text.active{
                color: #d50b00;
            }
            .img{
                margin-left: 5px;
                width: getAdaptSize(1.2rem);
                height: getAdaptSize(1.3rem);
                background-size: 100%;
            }
            .img.normal{
                background-image: url(../../assets/img/img_xia.png);
            }
            .img.up{
                background-image: url(../../assets/img/img_up.png);
            }
            .img.down{
                background-image: url(../../assets/img/img_xia2.png);
            }
            .sort-item-inner{
                padding: 3px 0;
                width: 100%;
            }
            .screen{
                border-left: 1px solid #999;
                .img{
                    margin-left: 0;
                    margin-right: 5px;
                    width: getAdaptSize(1.5rem);
                    height: getAdaptSize(1.5rem);
                }
                .img.normal{
                    background-image: url(../../assets/img/screen.png);
                }
                .img.active{
                    background-image: url(../../assets/img/screen2.png);
                }
            }
        }
    }
</style>


