import { handleActions } from 'redux-actions';

const state = {
  newsList: [],
  newsIndex: 0
};
export const home = handleActions({
  ADD_NEWS: (state, action) => {

  },
  GET_LIST_OF_NEWS: (state, action) => {
    state.newsList = [...state.newsList, ...action.payload];
    return {...state}
  }
}, state);