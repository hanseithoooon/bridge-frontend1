import React from "react";

import * as S from "./styled";

export const RegisterPage: React.FC = () => {
  return (
    <S.registerContainer>
      <S.registerIntroduce>
        회원가입을 위해
        <br /> 정보를 입력해주세요.
      </S.registerIntroduce>
      <S.registerInputContainer>
        <S.registerInputId type="text" placeholder="아이디" />
        <S.registerInputPw type="password" placeholder="비밀번호" />
        <S.registerInputPw type="password" placeholder="비밀번호 확인" />
        <S.registerInputName type="text" placeholder="이름" />
        <S.registerInputBirth type="text" placeholder="생년월일" />
        <S.registerInputEmail type="email" placeholder="이메일" />
        <S.registerInputPhone type="number" placeholder="전화번호" />
      </S.registerInputContainer>
      <S.registerInputSubmit>가입하기</S.registerInputSubmit>
    </S.registerContainer>
  );
};
