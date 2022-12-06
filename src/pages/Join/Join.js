import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/");
  };

  const userData = (e) => {
    e.preventDefault();
  };

  const [inputValue, setInputValue] = useState({
    userName: "",
    userId: "",
    userPw: "",
    pwCheck: "",
  });

  const { userName, userId, userPw, pwCheck } = inputValue;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  // 이름, 아이디, 비밀번호 정규식
  const REGEX_NAME = /^[가-힣]{2,5}$/;
  const REGEX_EMAIL =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const REGEX_PW = /^[A-Za-z0-9]{8,20}$/;

  const REGEX_ARRAY = [
    REGEX_NAME.test(userName),
    REGEX_EMAIL.test(userId),
    REGEX_PW.test(userPw),
    pwCheck.length === 0 ? false : pwCheck === userPw,
  ];

  console.log(REGEX_ARRAY);

  const isValid =
    REGEX_NAME.test(userName) &&
    REGEX_EMAIL.test(userId) &&
    REGEX_PW.test(userPw) &&
    userPw === pwCheck;

  return (
    <JoinWapper>
      <JoinBox>
        <JoinTitle>회원가입</JoinTitle>
        <JoinInfo onSubmit={userData}>
          {Join_INPUT_DATA.map((input, idex) => {
            return (
              <div key={input.id}>
                <JoinInput
                  onChange={handleInput}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  valid={input.valid}
                  autoFocus={input.autoFocus}
                />
                {REGEX_ARRAY[idex] ? "" : <InputText>{input.valid}</InputText>}
              </div>
            );
          })}
          <JoinBtn disabled={!isValid} onClick={goToSignUp}>
            회원가입 하기
          </JoinBtn>
        </JoinInfo>
      </JoinBox>
    </JoinWapper>
  );
};

export default Join;

const JoinWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(173, 191, 230);
`;

const JoinBox = styled.div`
  width: 500px;
  padding: 50px 30px;
  border-radius: 15px;
  background-color: rgba(226, 235, 255);
  box-shadow: 5px 5px 10px 5px rgb(0, 0, 0, 0.2);
`;

const JoinTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

const JoinInfo = styled.form`
  margin-top: 20px;
`;

const JoinInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;
  border: none;
`;

const InputText = styled.p`
  margin-top: 10px;
  padding-left: 20px;
  color: red;
  font-size: 12px;
`;

const JoinBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: rgba(173, 191, 230);
  color: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  &:disabled {
    background-color: rgba(255, 255, 255, 0.6);
    color: #454545;
  }
`;

const Join_INPUT_DATA = [
  {
    id: 1,
    name: "userName",
    type: "text",
    placeholder: "이름을 입력해주세요.",
    valid: "이름을 입력해주세요.",
    autoFocus: true,
  },
  {
    id: 2,
    name: "userId",
    type: "email",
    placeholder: "아이디로 사용할 이메일을 입력해주세요.",
    valid: "아이디로 사용할 이메일을 입력해주세요.",
    autoFocus: false,
  },
  {
    id: 3,
    name: "userPw",
    type: "password",
    placeholder: "새 비밀번호를 입력해주세요.",
    valid: "새 비밀번호를 입력해주세요.",
    autoFocus: false,
  },
  {
    id: 4,
    name: "pwCheck",
    type: "password",
    placeholder: "새 비밀번호를 한번 더 입력해주세요.",
    valid: "새 비밀번호를 한번 더 입력해주세요.",
    autoFocus: false,
  },
];
