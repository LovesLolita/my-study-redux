import { takeEvery,put } from 'redux-saga/effects'  
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList)
} 

function* getList(){
   const { data } = yield axios.get('https://mock.mengxuegu.com/mock/63efca5cc5a76a117cab1022/myReduxTest/getList')
    yield put(getListAction(data))
}

export default mySaga;