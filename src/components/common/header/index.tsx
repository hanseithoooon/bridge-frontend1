import React from "react";
import * as S from "./styled";
import logo from "../../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src={logo} width={50} />
      <S.IconContainer>
        <S.SearchIcon>🔍</S.SearchIcon>
        <S.ProfileIcon>👤</S.ProfileIcon>
      </S.IconContainer>
    </S.HeaderContainer>
  );
};
