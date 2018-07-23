/**
 * createAction函数的第一个就是type值，后面接受一个函数。
 */
import { createAction } from 'redux-actions';
import api from '../../api/index'

// 添加 news
const addNews = createAction('ADD_NEWS');

// 删除 news
const delNews = createAction('DEL_NEWS');

// 获取 news
const getList = createAction('GET_LIST_OF_NEWS');


// 获取 news api
const getListOfNews = (params) => dispatch => {
  return new Promise( (resolve, reject) => {
    api.getNews(params)
      .then( res => {
        const list = res.data.list;
        dispatch(createAction('GET_LIST_OF_NEWS')({list}));
        resolve(list)
      }).catch( err => {
      reject(err)
    })
  })
};

export default {
  addNews,
  delNews,
  getListOfNews
}