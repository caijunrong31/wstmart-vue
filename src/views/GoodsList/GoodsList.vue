<template>
    <div id="goods-list">
        <Header></Header>
    </div>
</template>

<script>
import { getGoodsList } from '@/api/goods'
import Header from '@/components/Header'
export default {
    name: 'GoodsList',
    components: {
        Header
    },
    data(){
        return {
            catId: -1
        }
    },
    created: function(){
      this.$store.dispatch('changeFootStatus', true)
    },
    mounted: function(){
      this.catId = this.$route.params.id
      this.loadData()
    },
    methods:{
        loadData(){
            getGoodsList(this.catId).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


