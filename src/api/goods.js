import request from '@/utils/request'

export function getGoodsList(catId, page=1, pagesize=10, condition=0){
    const data = {
        catId:catId,
        page:page,
        pagesize:pagesize,
        condition:condition
      }
    return request({
        url: '/weapp/goods/pageQuery',
        method: 'post',
        data
    })
}