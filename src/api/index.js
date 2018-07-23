import ajax from '../untils/axios'

// 获取 news api
const getNews = (params) => {
  return new Promise( (resolve, reject) => {
    ajax.get('home/list', params)
      .then( res => {
        const list = res.data.list;
        resolve(list)
      }).catch( err => {
      reject(err)
    })
  })
};
export {
  getNews
}