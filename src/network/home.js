import {request} from './request';


// default导出引用时才不需要{}
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}