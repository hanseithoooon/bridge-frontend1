import React from "react";

import * as S from "./styled";

export const Profile: React.FC = () => {
  return (
    <S.profileContainer>
      <S.profileBox>
        <S.ProfileImgBox>이미지~</S.ProfileImgBox>
        <S.ProfileNameBox>닉네임~~</S.ProfileNameBox>
      </S.profileBox>
    </S.profileContainer>
  );
};
