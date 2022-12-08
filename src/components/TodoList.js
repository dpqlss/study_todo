import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "잠자기🍎",
      checked: true,
    },
    {
      id: 2,
      text: "놀기🥝",
      checked: true,
    },
    {
      id: 3,
      text: "먹기🍇",
      checked: false,
    },
  ]);
  return (
    <div>
      <TodoBlock>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </TodoBlock>
    </div>
  );
};

export default TodoList;

const TodoBlock = styled.div`
  margin-top: 20px;
`;
