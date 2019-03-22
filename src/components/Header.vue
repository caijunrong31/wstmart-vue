<template>
    <mt-header :title="_title">
		  <router-link :to="_link" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <!-- <mt-button icon="more" slot="right" ></mt-button> -->
		</mt-header>
</template>

<script>
import Vue from 'vue'
import { Header, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
export default {    
		name:'Header',
		props: ['_link', '_title'],
		data(){
			return {

			}
		}
}
</script>

<style lang="scss" scoped>
	
</style>

