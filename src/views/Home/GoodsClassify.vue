<template>
    <div class="classify">
        <div class="classify-item" v-for="(itemOut,indexOut) in _datas" :key="itemOut.catId">
             <div class="classly-tit xn-box center">
            <span class="line" :style="themeBackground[itemOut.catId]"></span>
            <div class="content xn-box center" :style="theme[itemOut.catId]">
                <i :style="themeIcon[itemOut.catId]"></i>
                {{itemOut.catName}}
            </div>
            <span class="line" :style="themeBackground[itemOut.catId]"></span>
        </div>
        <div class="goods xn-box fww jsb">
            <div class="goods-item" v-for="(item,index) in itemOut.goods" :key="item.goodsId">
                <div class="img"><img :src="item.goodsImg"></div>
                <div class="name">{{item.goodsName}}</div>
                <div class="price">¥<span>{{item.shopPrice}}</span></div>
                <div class="info xn-box jsb">
                    <span class="praise">{{item.praiseRate}}</span>
                    <span class="deal">成交数：{{item.saleNum}}</span>
                </div>
            </div>
        </div>
        </div>
       
    </div>    
</template>

<script>
export default {
    name: 'GoodsClassify',
    props: ['_datas'],
    data(){
        return {
            theme:{
                47:'color:#addd2d;',
                48:'color:#59a4f0;',
                49:'color:#d71c1c;',
                50:'color:#f08748;',
                51:'color:#f28bd4;',
                53:'color:#399d4e;',
                334:'color:#4589db;'
            },
            themeBackground:{
                47:'background-color:#addd2d;',
                48:'background-color:#59a4f0;',
                49:'background-color:#d71c1c;',
                50:'background-color:#f08748;',
                51:'background-color:#f28bd4;',
                53:'background-color:#399d4e;',
                334:'background-color:#4589db;'
            },
            themeIcon:{
                47:'background-position: 0 0;',
                49:'background-position: 0 -79px;',
                48:'background-position: 0 -40px;',
                50:'background-position: 0 -121px;',
                51:'background-position: 0 -159px;',
                53:'background-position: 0 -318px;',
                334:'background-position: 0 -239px;'
            }
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
    .classify{
        width: 100%;
        background-color: #f6f6f8;
        .classly-tit{
            height: getAdaptSize(4rem);
            background-color: #fff;
            .content{
                margin: 0 4%;
                font-size: getAdaptSize(2rem);
                font-weight: bold;  
                i{
                    margin-right: 3px;
                    display: block;
                    width: getAdaptSize(2rem);
                    height: getAdaptSize(2.3rem);
                    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAMnCAMAAACDfhvgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGRENERkIzRDk5NzExRTc5MzRFOTJERjFFNjU3OUExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGRENERkI0RDk5NzExRTc5MzRFOTJERjFFNjU3OUExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZEQ0RGQjFEOTk3MTFFNzkzNEU5MkRGMUU2NTc5QTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZEQ0RGQjJEOTk3MTFFNzkzNEU5MkRGMUU2NTc5QTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oaA+bAAAAQlBMVEW3lGetK+Kt3S3wTwCiQiDXHBxZpPAAnU6tLOLxh0hCittBidtCidpCiNv23AZCiNpCidz23Qbyh0hCidvyi9QAAABs93RRAAAAFnRSTlP///////////////////////////8AAdLA5AAABOtJREFUeNrs1AuXoyoMAOBUrdrZ+6o1//+v7mgFkpAA7bR7Zu+GM2cq8hleAUCtdF1HaiAao+ksE5o6hjLTNZqu1RTG89koiGaEIKYTRTGdUoTpGozSlTb3PEL4BVaNc2c7A3IP+BfJCEKjSpNT1bDN0ozYjY4aNl1lHZkx1hpESpSNvWXNBovkAYMl8kgeaqiSY+b5qp4LPVtLZxDRNnpx48aNGzfvNuNYM+NWWsxYM3lvbv73ZmyKg3Xz1Zwf1ULNaJaHTH5c2FkD/djRpaiY8QkzHotMf3QzZj8vNmiNh8zd72c3bty4+eXmXCiPGLw/h1exhDqgic6ZOWuGzSsGUkice0AKoeZMG86KkYFot8CDhxY2MtAGKWYIynqIMGxPz2pPYt+PNrkn0pyVfQO5i+eMyBzTSJaHraaaz26+YvJD/Jzxe9WNGzduRFmq5rIsl4rZwLJsf7rZQuxtS3jIzPbtwgJm5sLHmnqD1M0iTegP1Bg8VDDYbo74R8fMpKEsyooDJ2pnECcVyjGjWAtx7mtG5VYLLeW+LqKvbCjxJaS6VlpM7OvSYJbvaLDFYN1cRKfxU2sNkX5prTMur90v1POQJ1rLGl4a9n2p9kXWh90u/F7xe96NGzdunjPrVlrM+nKz1sfMQ4JBVrOvo1GMDSRZY6VkVt1oYRICM4xtRMxk1gfNumYICl01GKybtGvSrC8yyLe2ZtaaoYlmrDPLoWf2wswNuf5arq7KJmHR8AW0TWU8bzbYYvwOd+PGjZuHzZCKZYa6GQYDfckMmhmeMENuhreZQZrhjWbgZnjaDO/IseGxvvYWOw8Ps///Zgb/UDPY5kXn1O9wN27cuPlu5r+bWf4K5lYqf6IRa6iTnX3s/wt94d5UMD+Ofopx3BQNcoOyadslEUctP2wTg7WY/fcW9101/95uH9vAiBGz+vueOh9qHL/r3Lhx4+Ytpq+bvu9fYgQyTd9ikiqZoJ4y9yaGIGs/mgzTkxjxh5sYvo/x7gqycUrUJ9P3AqXAmokIC6bnO6YbjgyzI2l6JVJmeiVU3lceSRlPNrlgwgu2tIYRScFz1UI8n0lvZJdEzrNIUjCTkHbelTHk5/RVBhFbTHZbPG1MxI3f827cuHHzO5tpK2UzTQoCjQgkzSFtExoFgjwMfchMauGBdIOmwUl5ejzOxMYzaeZ4H/9PmZkSiQs5cUNWb8pWEniVbVd4AFKZSKGzg/g8yRIRJCL6ur+lRh0zNWnx+ZiF0fJ5En0ZOT+leaG6a3RemJ0WniKQp0uWT37/uHHjxo0bZq7XmrneS8FcY2kxV8tcW40xJGAjaTBX02CLwRaDBjkeobA8V2FQJfcaoN4Z/UIbj/RQIY+Y629k8DXGzg2xd7v5p8FgSehnRyaJdgZlvoo7oXgG/V5148aNGzcA9ufJcEXr1JC3IAykt5A/HwYgvc8eowHdgBs3QJOPJxs3IfV5yibDE1i8Y0bkMzHKx+IciXOXAe0slw6s33Vu3Lhx893NaStlczpJBAahSJo5kNk0sxJGmERMQ8hsGEKsMXNCEJhkV/OJGjZcMq5TMgbZq1AjyUjC9gQMkpkSOUyFbEaSWZBPM9fIpyEvdMKMQVhfksxpT/miKikE6obzLNvXh69jIedNYuXhbJxTi+hmxqqZsWpmrJq5eP9kh/goPwUYAHKWGPymfsHpAAAAAElFTkSuQmCC');
                    background-repeat: no-repeat;
                    background-size: 100%;
                }
            }
            .line{
                display: block;
                width: getAdaptSize(3.5rem);
                height: 1px;
            }
        }
    }
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
    .page-infinite-loading {
        text-align: center;
        height: 50px;
        line-height: 50px;
    }
</style>

