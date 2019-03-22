<template>
    <div id="list-view">
        <slot></slot>
         <p v-if="_loading" class="loading-tip xn-box center">
            <mt-spinner color="rgba(255, 51, 153, 1)" type="fading-circle"></mt-spinner>
            <span style="margin-left: 8px;">更多加载中...</span>
        </p>
        <p v-if="_allLoaded" class="loading-tip xn-box center" v-else>没有更多了~</p>
    </div>
</template>

<script>
import Vue from 'vue'
import { Spinner } from 'mint-ui'
import { getGoodsList } from '@/api/goods'

Vue.component(Spinner.name, Spinner)

export default {
    name:'ListView',
    props:['_loading', '_allLoaded'],
    data(){
        return {
            offsetTop: 0
        }
    },
    mounted:function(){
        document.querySelector('#list-view').addEventListener('scroll', this.handleScroll)
    },
    // destroyed () {
    //     document.querySelector('#list-view').removeEventListener('scroll', this.handleScroll)
    // },
    methods:{
        handleScroll(){
            let scrollTop = document.querySelector('#list-view').scrollTop
            let offsetTop = document.querySelector('#list-view').offsetHeight + this.offsetTop; 
            // console.log('scrollTop: ', scrollTop)
            // console.log('offsetTop: ', offsetTop)
            if (scrollTop-offsetTop>=241){
                this.offsetTop += 266
                this.loadBottom()
            } 
        },
        loadBottom(){
           this.$emit('loadMore')
        }
    }  
}
</script>

<style lang="scss" scoped>
    #list-view{
        overflow: auto;
        height: getAdaptSize(54.3rem);
        .loading-tip{
            height: getAdaptSize(4rem);
        }
    }
</style>
