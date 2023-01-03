import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ todo, onRemove }) => {
  const { id, title, checked } = todo;
  const [isEdite, setIsEdit] = useState(false);

  return (
    <TodoListItem>
      <TodoText>{title}</TodoText>
      <Edite>
        {isEdite ? (
          <>
            <Button>수정취소</Button>
            <Button>삭제취소</Button>
          </>
        ) : (
          <>
            <Button>수정하기</Button>
            <Button onClick={() => onRemove(id)}>삭제하기</Button>
          </>
        )}
      </Edite>
    </TodoListItem>
  );
};

export default React.memo(TodoItem);

const TodoListItem = styled.div`
  display: flex;
  justify-content: space-between;
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

const Edite = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  border: none;
  background-color: rgba(226, 235, 255);
  cursor: pointer;
`;
