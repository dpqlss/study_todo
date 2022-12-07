import React from "react";
import styled from "styled-components";
// import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <TodoListBlock>
      {/* {TODO_ITEM.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} />
      ))} */}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid red;
`;

const TODO_ITEM = [
  {
    id: 1,
    text: "잠자기🍎",
    checked: true,
  },
  {
    id: 2,
    text: "놀기🥨",
    checked: true,
  },
  {
    id: 3,
    text: "먹기🍩",
    checked: true,
  },
];
