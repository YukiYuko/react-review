import { createAction } from 'redux-actions';
import api from '../../api/index'

// 添加 news
export const addNews = createAction('ADD_NEWS');

// 删除 news
export const delNews = createAction('DEL_NEWS');

// 获取 news
export const getList = createAction('GET_LIST_OF_NEWS');


// 获取 news api
export const getListOfNews = (params) => dispatch => {
  return new Promise( (resolve, reject) => {
    api.getNews(params)
      .then( res => {
        const list = res.data.list;
        dispatch(getList(list));
        resolve(list)
      }).catch( err => {
      reject(err)
    })
  })
};