import request from '@/utils/request'

export function getIndexData(){
    return request({
        url: '/weapp/index/getIndexData',
        method: 'get'
    })
}

export function getFloorData(currPage){
    const data = {
        currPage:currPage+1
      }
    return request({
        url: '/weapp/index/pageQuery',
        method: 'post',
        data
    })
}