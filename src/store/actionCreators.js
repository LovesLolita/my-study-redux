import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = ()=>({
  type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
  type:DELETE_ITEM,
  index
})

export const getListAction  = (data)=>({
  type:GET_LIST,
  data
})

export const getTodoList = () =>{
  // dispatch是redux-thunk 中间件处理的
  return (dispatch)=>{
      axios.get('https://mock.mengxuegu.com/mock/63efca5cc5a76a117cab1022/myReduxTest/getList').then(({data})=>{
        dispatch(getListAction(data))
      })
  }
}
export const getMyListAction = ()=>({
  type: GET_MY_LIST
})