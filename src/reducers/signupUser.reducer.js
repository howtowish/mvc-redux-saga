import * as ActionTypes from '../constants/ActionTypes'
const initialState = {
    data:[],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ON_SIGN_UP_USER_SUCCESSED:
    console.log("reducer Signup Success",action)
      return {
        data: action.payload
      };
    default:
      return state;
  }
}