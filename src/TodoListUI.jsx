import React from "react";
import { Input, Button, List } from "antd";
import "./TodoList.css";

const TodoListUi = (props) => {
  return (
    <div className="Todo-list" style={{ margin: "10px" }}>
      <div className="Todo-list-box">
        <div>
          <Input
            placeholder="Redux测试"
            style={{ width: "650px", marginRight: "10px" }}
            onChange={props.changeInputValue}
            value={props.inputValue}
          />
          <Button type="primary" onClick={props.clickBtn}>
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "700px" }}>
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => props.deleteItem(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};


export default TodoListUi;
