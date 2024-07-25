import React, { useState } from "react";
import * as S from "./styled";
import logo from "../../../assets/logo.png";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.HeaderContainer>
      <S.Logo src={logo} width={50} />
      <S.IconContainer>
        <div style={{ display: "flex", gap: 10 }}>
          <S.SearchIcon onClick={onClick}>🔍</S.SearchIcon>
          {isOpen === true ? (
            <S.SearchBar placeholder="검색어를 입력하세요" />
          ) : (
            ""
          )}
        </div>
      </S.IconContainer>
    </S.HeaderContainer>
  );
};
