import React, { useState } from "react";
import * as S from "./styled";

export const PostPage: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const onClick = () => {
    alert("작성이 완료되었어요");
  };

  return (
    <S.PostContainer>
      <S.PostMainText>생각을 공유해봐요!</S.PostMainText>
      <S.DropDown name="category">
        <S.Option value="정보">정보</S.Option>
        <S.Option value="홍보">홍보</S.Option>
        <S.Option value="단체">단체</S.Option>
      </S.DropDown>
      <S.TitleInput placeholder="제목을 작성하세요" />
      <S.TextBox placeholder="본 내용을 작성하세요" />
      <S.PostButton onClick={onClick}>작성하기</S.PostButton>
    </S.PostContainer>
  );
};
