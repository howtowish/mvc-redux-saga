import * as ActionTypes from '../constants/ActionTypes'
const initialState = {
    data:[],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ON_FETCH_DATA_SUCCESSED:
    console.log("reducer fetchData",action)
      return {
        data: action.payload
      };
    default:
      return state;
  }
}