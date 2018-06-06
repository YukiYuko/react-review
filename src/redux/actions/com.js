import * as types from './actions-type.js';
export default {
  set_data(data) {
    return { type: types.SET_DATA, data };
  }
}