import ajax from '../untils/axios'
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
export default {
  getNews
}