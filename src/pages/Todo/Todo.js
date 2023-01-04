import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import TodoList from "../../components/TodoList";
import New from "./New";

const Todo = () => {
  const [visible, setVisible] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "잠자기🍎",
      checked: true,
    },
    {
      id: 2,
      title: "놀기🥝",
      checked: false,
    },
    {
      id: 3,
      title: "먹기🍇",
      checked: false,
    },
  ]);

  //마운트되었을때 localStorage 데이터 불러오기
  useEffect(() => {
    const todoLocal = localStorage.getItem("todoList");
    console.log("localStorage", todoLocal, JSON.parse(todoLocal));
    if (todoLocal) {
      setTodos(JSON.parse(todoLocal));
    }
  }, []);

  //todos가 업데이트 되면 localStorge에 데이터 저장하기
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  const dataId = useRef(4);

  const onCreate = useCallback(
    (title) => {
      const newList = {
        id: dataId.current,
        title,
        checked: false,
      };
      setTodos([newList, ...todos]);
      setVisible(visible);
      dataId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoWapper>
      <TodoBox>
        <TodoTitle>TODO</TodoTitle>
        <AddForm>
          <AddBtn
            type="button"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            +Todo추가하기
          </AddBtn>
        </AddForm>
        <TodoList todos={todos} onRemove={onRemove} />
        {visible && <New onCreate={onCreate} />}
      </TodoBox>
    </TodoWapper>
  );
};

export default Todo;

const TodoWapper = styled.div`
  position: relative;
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
