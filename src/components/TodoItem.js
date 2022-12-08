import React from "react";
import styled from "styled-components";

const TodoItem = ({ todo }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItem>
      <TodoText>{text}</TodoText>
    </TodoListItem>
  );
};

export default TodoItem;

const TodoListItem = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background-color: rgba(226, 235, 255);
  border-radius: 10px;
`;

const TodoText = styled.p`
  padding-left: 16px;
  line-height: 40px;
  font-size: 14px;
`;
