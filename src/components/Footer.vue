<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item id="主页">
            <img slot="icon" :src="homeIcon">
            主页
        </mt-tab-item>
        <mt-tab-item id="分类">
            <img slot="icon" :src="classifyIcon">
            分类
        </mt-tab-item>
        <mt-tab-item id="购物车">
            <img slot="icon" :src="cartIcon">
            购物车
        </mt-tab-item>
        <mt-tab-item id="关注">
            <img slot="icon" :src="followIcon">
            关注
        </mt-tab-item>
        <mt-tab-item id="我的">
            <img slot="icon" :src="myIcon">
            我的
        </mt-tab-item>
    </mt-tabbar>    
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui'
import Resource from '@/assets/resource'
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
    name: 'Footer',
     data () {
      return {
          selected: '主页',
          homeIcon: Resource.homeIconActive,
          classifyIcon: Resource.classifyIcon,
          cartIcon: Resource.cartIcon,
          followIcon: Resource.followIcon,
          myIcon: Resource.myIcon
        }
    },
    created() {
        if (this.$route.path.length>0){
            const selected = this.$route.path.substring(1)
            switch (selected) {
                case 'Classify':
                    this.selected = '分类'
                    break
                case 'ShopCart':
                    this.selected = '购物车'
                    break
            }
        }
    },
    methods: {
        reSetTabbarIcon: function() {
            this.homeIcon = Resource.homeIcon
            this.classifyIcon = Resource.classifyIcon
            this.cartIcon = Resource.cartIcon
            this.followIcon = Resource.followIcon
            this.myIcon = Resource.myIcon
        },
        setActiveTabberIcon: function(val) {
            switch (val) {
                case '主页':
                    this.homeIcon = Resource.homeIconActive
                    this.$router.push({path:'/'})
                    break
                case '分类':
                    this.classifyIcon = Resource.classifyIconActive
                    this.$router.push({path:'/Classify'})
                    break
                case '购物车':
                    this.cartIcon = Resource.cartIconActive
                    // this.$router.push({path:'/ShopCart'})
                    break
                case '关注':
                    this.followIcon = Resource.followIconActive
                    break
                case '我的':
                    this.myIcon = Resource.myIconActive
                    break
            }
        }
    },
    watch: {
      selected: function (val, oldVal) {
        // console.log(val)
        this.reSetTabbarIcon()
        // click后打印出当前mt-tab-item的id
        this.setActiveTabberIcon(val)
      }
    }
}
</script>

<style lang='scss' scoped>
    .mint-tabbar {
        position: fixed;
        border-top: 1px solid #aaaaaa;
        // background-color: #fff;
        .mint-tab-item {
            color: #2c2c2c;
            // background-color: #fff;
            // img {
            //     width: getAdaptSize(3rem);
            //     height: getAdaptSize(3rem);
            // }
        }
        .mint-tab-item.is-selected {
            color: #df0202;
            background-color: #fafafa;
            // img {
            //     width: getAdaptSize(3rem);
            //     height: getAdaptSize(3rem);
            // }
        }
        
    }
   
</style>


