import React from "react";

import * as S from "./styled";

export const Login: React.FC = () => {
  return (
    <S.loginContainer>
      <S.loginIntro>
        로그인을 하기위해
        <br />
        아이디와 비밀번호를 입력해주세요.
      </S.loginIntro>
      <S.loginBox>
        <S.loginInputId type="text" placeholder="아이디" />
        <S.loginInputPw type="password" placeholder="비밀번호" />
        <S.loginInputSubmit>로그인</S.loginInputSubmit>
      </S.loginBox>
    </S.loginContainer>
  );
};
