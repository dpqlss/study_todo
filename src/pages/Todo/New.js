import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const New = () => {
  const navigate = useNavigate();
  const contentRef = useRef(4);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    navigate("/todo", { replace: true });
    console.log(content);
  };

  return (
    <NewWapper>
      <NewBox>
        <TodoTitle>TODO</TodoTitle>
        <TitleText>할 일을 적어주세요.</TitleText>
        <NewForm>
          <TitleArea
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          ></TitleArea>
          <ContentArea
            value={content}
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          ></ContentArea>
          <ControlBox>
            <CanCel type="button" onClick={() => navigate("/todo")}>
              취소하기
            </CanCel>
            <AddBtn type="submit" onClick={handleSubmit}>
              작성완료
            </AddBtn>
          </ControlBox>
        </NewForm>
      </NewBox>
    </NewWapper>
  );
};

export default New;

const NewWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(173, 191, 230);
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
