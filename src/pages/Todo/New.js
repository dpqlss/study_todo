import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const New = ({ onCreate }) => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();
  const [list, setList] = useState({
    title: "",
    content: "",
  });

  const goTodo = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleChange = (e) => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list.title.length < 1) {
      titleRef.current.focus();
      alert("1글자 이상 입력해주세요.");
      return;
    }
    if (list.content.length < 5) {
      contentRef.current.focus();
      alert("5글자 이상 입력해주세요.");
      return;
    }
    onCreate(list.title);
    setList({
      title: "",
      content: "",
    });
  };

  return (
    <NewWapper>
      <NewBox>
        <TodoTitle>TODO</TodoTitle>
        <TitleText>할 일을 적어주세요.</TitleText>
        <NewForm onSubmit={handleSubmit}>
          <TitleArea
            ref={titleRef}
            name="title"
            placeholder="Title"
            value={list.title}
            onChange={handleChange}
          ></TitleArea>
          <ContentArea
            ref={contentRef}
            name="content"
            placeholder="Content"
            value={list.content}
            onChange={handleChange}
          ></ContentArea>
          <ControlBox>
            <CanCel type="button" onClick={goTodo}>
              취소하기
            </CanCel>
            <AddBtn type="submit">작성완료</AddBtn>
          </ControlBox>
        </NewForm>
      </NewBox>
    </NewWapper>
  );
};

export default React.memo(New);

const NewWapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const NewBox = styled.div`
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

const TitleText = styled.p`
  padding: 20px;
  font-size: 14px;
  text-align: center;
`;

const NewForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const TitleArea = styled.input`
  width: 100%;
  height: 50px;
  padding-left: 12px;
  line-height: 40px;
  font-size: 18px;
  border-radius: 10px;
  border: none;
`;

const ContentArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-top: 15px;
  padding-left: 12px;
  line-height: 40px;
  resize: vertical;
  border-radius: 10px;
  border: none;
`;

const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CanCel = styled.button`
  width: 120px;
  height: 36px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: rgba(177, 194, 229);
  border: none;
  color: #fff;
  cursor: pointer;
`;

const AddBtn = styled.button`
  width: 120px;
  height: 36px;
  margin-top: 30px;
  border-radius: 50px;
  background-color: rgba(40, 70, 132);
  border: none;
  color: #fff;
  cursor: pointer;
`;
