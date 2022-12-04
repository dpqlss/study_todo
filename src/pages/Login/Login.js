import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWapper>
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
        <LoginInfo>
          <form>
            <input
              type="text"
              name="id-input"
              placeholder="아이디를 입력해주세요."
            />
            <input
              type="password"
              name="password-input"
              placeholder="비밀번호를 입력해주세요."
            />
            <button type="button">로그인하기</button>
          </form>
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
  background-color: skyBlue;
`;

const LoginBox = styled.div`
  width: 500px;
  height: 320px;
  border-radius: 15px;
  background-color: #fff;
`;

const LoginTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const LoginInfo = styled.div`
  width: 100%;
`;
