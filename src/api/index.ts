import axios from '../lib/axios'

// 轮播图
export const banner = (params?: object) => {
    return axios.get('/api/banner', params);
}
// 推荐页面图
export const personalized = (params?: object) => {
    return axios.get('/api/personalized', params)
}
// 歌曲详情图
export const detail = (params?:object) => {
    return axios.get('/api/playlist/detail',params)
}