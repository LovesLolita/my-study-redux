import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
const defaultState = {
  inputValue: "",
  // list: ["早上4点起床，锻炼身体", "中午下班游泳一小时"],
  list:[]
}; //默认数据
let newStateData = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_INPUT:
      newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
      newState.inputValue = action.value;
      return newState;
    case ADD_ITEM:
      newState = {
        inputValue: state.inputValue,
        list: [...state.list, state.inputValue],
      }; //深度拷贝state
      newState.inputValue = "";
      return newState;
    case DELETE_ITEM:
      newState = { ...state }; //深度拷贝state
      newState.list.splice(action.index, 1);
      return newState;
      case GET_LIST:
        newState = { ...state, list: action.data.data.list }
        return newState
    default:
      return state;
  }
 
};
export default  newStateData
