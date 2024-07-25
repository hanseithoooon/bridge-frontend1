import React from "react";
import * as S from "./styled";
import { BottomNavbarItem } from "../../../constant/BottomNavbarItem";
import { Link, useNavigate } from "react-router-dom";

export const BottomNavbar: React.FC = () => {
  return (
    <S.BottomNavbarContainer>
      {BottomNavbarItem.icon.map((item, index) => {
        return (
          <S.BottomNavbarItemContainer
            href={`${BottomNavbarItem.link[index]}`}
            key={index}
          >
            <S.BottomNavbarIcon>{item}</S.BottomNavbarIcon>
            <S.BottomNavbarText>
              {BottomNavbarItem.text[index]}
            </S.BottomNavbarText>
          </S.BottomNavbarItemContainer>
        );
      })}
    </S.BottomNavbarContainer>
  );
};
