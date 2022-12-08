import React from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";

const Todo = () => {
  return (
    <TodoWapper>
      <TodoBox>
        <TodoTitle>TODO</TodoTitle>
        <AddForm>
          <AddBtn>+Todo추가하기</AddBtn>
        </AddForm>
        <TodoList />
      </TodoBox>
    </TodoWapper>
  );
};

export default Todo;

const TodoWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(173, 191, 230);
`;

const TodoBox = styled.div`
  width: 700px;
  padding: 50px 30px;
  border-radius: 15px;
  background-color: rgba(211, 225, 255);
  box-shadow: 5px 5px 10px 5px rgb(0, 0, 0, 0.2);
`;

const TodoTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

const AddForm = styled.form`
  display: flex;
  justify-content: flex-end;
`;

const AddBtn = styled.button`
  width: 120px;
  height: 36px;
  border-radius: 50px;
  background-color: rgba(40, 70, 132);
  border: none;
  color: #fff;
  cursor: pointer;
`;
