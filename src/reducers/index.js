import { combineReducers } from 'redux'
import test from "./test.reducer";
import fetchDataaa from "./fetchData.reducer";
import signupUser from './signupUser.reducer';
const todoApp = combineReducers({
  test,
  fetchDataaa,
  signupUser,
})

export default todoApp
