import request from '@/utils/request'

export function getCatsData(){
   let data = {}
   return request({
        url: '/weapp/goodscats/index',
        method: 'post',
        data
    })
}