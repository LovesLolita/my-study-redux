import React, { Component, Fragment } from "react";
import store from "./store";
import {
  getMyListAction,
  changeInputAction,
  addItemAction,
  deleteItemAction 
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange);
  }

  changeInputValue = (e) => {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  };

  storeChange = () => {
    this.setState(store.getState());
  };

  clickBtn = () => {
    const action = addItemAction();
    store.dispatch(action);
  };

  deleteItem = (index) => {
    console.log(index);
    const action = deleteItemAction(index);
    store.dispatch(action);
  };

  getList = () => {
    try {
          /* 
        easy mock
        {
          "data": {
            "list": [
              '早上4点起床，锻炼身体',
              '中午下班游泳一小时',
              '晚上8点到10点，学习两个小时'
            ]
          }
        } */
        // redux-thank
        // const action = getTodoList()
        // store.dispatch(action)
        
        // react-saga
        const action =getMyListAction()
        store.dispatch(action)
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getList()
  }
  render() {
    return (
      <Fragment>
        <TodoListUI
          inputValue={this.state.inputValue}
          list={this.state.list}
          changeInputValue={this.changeInputValue}
          clickBtn={this.clickBtn}
          deleteItem={this.deleteItem}
        />
      </Fragment>
    );
  }
}
export default TodoList;
