import * as ActionTypes from '../constants/ActionTypes'
import api from './api'
import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { onSignupUserSuccess,onSignupUserFailed } from '../actions'
console.log("Saga111");
function* signupUser(action) {
  console.log("SagaSignupAction",action);
  try {
    const data = yield call(
      api, 
      '/register_user', 
      { 
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username:action.payload.username,password:action.payload.pws,configpws:action.payload.configpws }) 
      //  body: JSON.stringify({ username:"zxcxz222",password:"zxcxz222",configpws:"zxczx333" }) 
      
      }
    )

   // const { _id: id, text } = todo
      console.log("SagaSignup User",data)
      yield put(onSignupUserSuccess("zzz"));
    } catch (e) {
      yield put(onSignupUserFailed(e))
    }
  }
  
//Khi action addTodo được client gọi (tương ứng ADD_TODO_REQUESTED) thì function addTodo trong saga chạy
//  Nếu thêm thành công thì bên saga sẽ gửi data đã fetch từ server đến action có Actiontypes ADD_TODO_SUCCEEDED chạy trong reducer
export default function* watchsignupUser() {
  yield* takeLatest(ActionTypes.ON_SIGN_UP_USER_REQUESTED, signupUser)
}
