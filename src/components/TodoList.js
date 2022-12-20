import React from "react";
// import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  console.log(todos);
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

const TodoBlock = styled.form`
  margin-top: 20px;
`;
