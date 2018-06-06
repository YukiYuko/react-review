// 这个文件就是操作 store 的动作 action集合处理的数据
import * as types from '../actions/actions-type.js';
const initialState = {
  loading: 'true',
};

const comReducer = function(state = initialState, action) {
  switch(action.type) {
    // 设置值
    case types.SET_DATA:
      return action.data;
    default:
      return state
  }
};

export default comReducer;