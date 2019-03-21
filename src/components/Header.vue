<template>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right" ></mt-button>
		</mt-header>
</template>

<script>
import Vue from 'vue'
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
export default {    
    name:'Header'
}
</script>

<style lang="scss" scoped>

</style>

