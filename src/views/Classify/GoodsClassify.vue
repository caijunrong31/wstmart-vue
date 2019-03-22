<template>
    <div class="classify">
        <div class="classify-item" v-for="(itemOut,indexOut) in _datas" :key="itemOut.catId">
            <div class="classify-tit" @click="goToGoodsList(_catId)">{{itemOut.catName}}</div>
            <div class="goods xn-box fww">
                <div class="goods-item xn-box column center" 
                    v-for="(item,index) in itemOut.childList" 
                    :key="item.catId">
                    <div class="img">
                        <img :src="item.catImg">
                    </div>
                    <div class="name">{{item.catName}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsClassify',
    props: ['_datas', '_catId'],
    data(){
        return {

        }
    },
    methods:{
        goToGoodsList(catId){
            console.log('catId: ', catId)
            this.$router.push({path:'/GoodsList/'+catId})
        }
    }
}
</script>

<style lang="scss" scoped>
    .classify{
        margin: 0;
    }
    .classify-item{
        box-sizing: border-box;
        .classify-tit{
            padding-top: 2.5px;
            padding-left: 10px;
            height: getAdaptSize(4.5rem);
            line-height: getAdaptSize(4.5rem);
            font-size: getAdaptSize(1.6rem);
            color: #000;
        }
    }
    .goods{
        padding-bottom: 10px;
        background-color: #fff;
        .goods-item{
            margin-top: 10px;
            margin-left: 1%;
            width: 32%;
            img{
                width: 100%
            }
        }
    }
</style>

