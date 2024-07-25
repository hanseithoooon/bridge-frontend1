import React from "react";

import * as S from "./styled";

export const RegisterPage: React.FC = () => {
    return (
        <S.registerContainer>
            <S.registerIntroduce>회원가입</S.registerIntroduce>
            <S.registerInputContainer>
                <S.idCheckBox>
                    <S.standardBox>
                        <S.standardText>아이디</S.standardText>
                        <S.registerInputId type='text' placeholder='5~20자의 영문 혹은 영문+숫자 조합' />
                    </S.standardBox>
                    <S.idCheckBtn>중복 확인</S.idCheckBtn>
                </S.idCheckBox>
                <S.standardBox>
                    <S.standardText>비밀번호</S.standardText>
                    <S.registerInputPw type='password' placeholder='비밀번호를 입력해주세요' />
                </S.standardBox>
                <S.standardBox>
                    <S.standardText>비밀번호 확인</S.standardText>
                    <S.registerInputPw type='password' placeholder='비밀번호를 한번 더 입력해주세요' />
                </S.standardBox>
                <S.standardBox>
                    <S.standardText>이름</S.standardText>
                    <S.registerInputName type='text' placeholder='예) 홍길동' />
                </S.standardBox>
                <S.standardBox>
                    <S.standardText>생년월일</S.standardText>
                    <S.registerInputBirth type='text' placeholder='0000.00.00' />
                </S.standardBox>
                <S.idCheckBox>
                    <S.standardBox>
                        <S.standardText>전화번호</S.standardText>
                        <S.registerInputPhone type='tel' placeholder='010-1234-5678' />
                    </S.standardBox>
                    <S.idCheckBtn>
                        인증번호
                        <br />
                        요청
                    </S.idCheckBtn>
                </S.idCheckBox>
                <S.standardBox>
                    <S.standardBox>
                        <S.standardText>인증번호</S.standardText>
                        <S.CNBox placeholder='인증번호 입력' />
                    </S.standardBox>
                </S.standardBox>
            </S.registerInputContainer>
            <S.registerInputSubmit>가입하기</S.registerInputSubmit>
        </S.registerContainer>
    );
};
