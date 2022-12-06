import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/Join");
  };

  const loginDB = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}`,
        {
          email: userId,
          password: userPw,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      if (response.data.ACCESS_TOKEN) {
        localStorage.setItem("JWT", response.data.ACCESS_TOKEN);
        alert("성공적으로 로그인 되었습니다.");
        navigate("/Todo");
      }
    } catch (error) {
      alert("error");
    }
  };

  const [inputValue, setInputValue] = useState({
    userId: "",
    userPw: "",
  });

  const { userId, userPw } = inputValue;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  //아이디, 비밀번호 정규식
  const REGEX_EMAIL =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const REGEX_PW = /^[A-Za-z0-9]{8,20}$/;

  const isValid = REGEX_EMAIL.test(userId) && REGEX_PW.test(userPw);

  return (
    <LoginWapper>
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <LoginInfo onSubmit={loginDB} onChange={handleInput}>
          {INPUT_DATA.map((input, index) => {
            return (
              <div key={input.id}>
                <LoginInput
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  valid={input.valid}
                  autoFocus={input.autoFocus}
                />
              </div>
            );
          })}
          <LoginBtn disabled={!isValid} onClick={loginDB}>
            로그인 하기
          </LoginBtn>
          <JoinBtn onClick={goToSignUp}>회원가입 하기</JoinBtn>
        </LoginInfo>
      </LoginBox>
    </LoginWapper>
  );
};

export default Login;

const LoginWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(173, 191, 230);
`;

const LoginBox = styled.div`
  width: 500px;
  padding: 50px 30px;
  border-radius: 15px;
  background-color: rgba(226, 235, 255);
  box-shadow: 5px 5px 10px 5px rgb(0, 0, 0, 0.2);
`;

const LoginTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

const LoginInfo = styled.form`
  margin-top: 20px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 50px;
  border: none;
`;

const LoginBtn = styled.button`
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

const JoinBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  color: #fff;
  background-color: rgba(173, 191, 230);
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

const INPUT_DATA = [
  {
    id: 1,
    name: "userId",
    type: "email",
    placeholder: "이메일을 입력해주세요.",
    autoFocus: true,
  },
  {
    id: 2,
    name: "userPw",
    type: "password",
    placeholder: "비밀번호를 입력해주세요.",
    autoFocus: false,
  },
];
