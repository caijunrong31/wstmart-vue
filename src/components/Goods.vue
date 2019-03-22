<template>
    <div class="goods xn-box fww jsb">
        <div class="goods-item" v-for="(item,index) in _datas" :key="item.goodsId">
            <div class="img"><img :src="item.goodsImg"></div>
            <div class="name">{{item.goodsName}}</div>
            <div class="price">¥<span>{{item.shopPrice}}</span></div>
            <div class="info xn-box jsb">
                <span class="praise">{{item.praiseRate}}</span>
                <span class="deal">成交数：{{item.saleNum}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Goods',
    props:['_datas']
}
</script>

<style lang="scss" scoped>
    .goods{
        box-sizing: border-box;
        width: 100%;
        .goods-item{
            margin: 1px 0;
            padding: 5px;
            width: 47%;
            background-color: #fff;
            .img{
                width: 100%;
                height: getAdaptSize(17.55rem);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .name{
                margin-top: 3px;
                font-size: getAdaptSize(1.75rem);
                color: #000;
                position: relative; 
                line-height: getAdaptSize(2rem); 
                max-height: getAdaptSize(4rem);
                min-height: getAdaptSize(4rem);
                overflow: hidden;
            }
            div.name:after{
                content: "..."; 
                position: absolute;
                bottom: 0; 
                right: 0; 
                padding-left: 40px;
                background: -webkit-linear-gradient(left, transparent, #fff 55%);
                background: -o-linear-gradient(right, transparent, #fff 55%);
                background: -moz-linear-gradient(right, transparent, #fff 55%);
                background: linear-gradient(to right, transparent, #fff 55%);
            }
            .price{
                margin: 4px 0;
                font-size: getAdaptSize(1.3rem);
                color: #e00102;
                span{
                    font-size: getAdaptSize(1.8rem);
                }
            }
            .info{
                span{
                    font-size: getAdaptSize(1.3rem);
                    color: #999;
                }
            }
        }
    }
    @supports (display:-webkit-box) and (-webkit-line-clamp:2){
        .goods .goods-item div.name{
            display: -webkit-box; 
            -webkit-box-orient: vertical; 
            -webkit-line-clamp: 2;
            overflow: hidden; 
            position: relative; 
            line-height: getAdaptSize(2rem); 
            max-height: getAdaptSize(4rem);
            }
        .goods .goods-item div.name::after{visibility: hidden;}
    }
</style>

