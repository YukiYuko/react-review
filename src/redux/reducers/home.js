/**
 * handleActions，这个函数就是帮助优化代码，我们的reducer里面显示是通过switch case语句去处理的，使用handleActions函数我们可以优化写法。
 */
import { handleActions } from 'redux-actions';

const initstate = {
  newsList: [],
  newsIndex: 0
};
export default handleActions({
  ADD_NEWS: (state, action) => {

  },
  GET_LIST_OF_NEWS: (state, action) => {
    state.newsList = [...state.newsList, ...action.payload];
    return {...state}
  }
}, initstate);