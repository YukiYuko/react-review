import ajax from '../untils/axios'
const base_url = 'https://m.toutiao.com/list/';
// 获取 news api
const getNews = (params) => ajax.get(base_url, params);
export {
  getNews
}