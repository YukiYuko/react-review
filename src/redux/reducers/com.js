/**
 * handleActions，这个函数就是帮助优化代码，我们的reducer里面显示是通过switch case语句去处理的，使用handleActions函数我们可以优化写法。
 */
import { handleActions } from 'redux-actions';
import * as types from '../actions/actions-type.js';
const initstate = {
  loading: 'true',
};

// const comReducer = function(state = initstate, action) {
//   switch(action.type) {
//     // 设置值
//     case types.SET_DATA:
//       return action.data;
//     default:
//       return state
//   }
// };
const comReducer = handleActions({
  SET_DATA: (state, action) => {
    state.loading = action.payload;
    return {...state}
  }
}, initstate);
export default comReducer;