import axios from '../lib/axios'

export const banner = (params?: object) => {
    // 返回的数据格式可以和服务端约定
    return axios.get('/api/banner', params);
}
export const personalized = (params?: object) => {
    return axios.get('/api/personalized', params)
}