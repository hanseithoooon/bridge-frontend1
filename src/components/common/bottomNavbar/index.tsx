import React from "react";
import * as S from "./styled";
import { BottomNavbarItem } from "../../../constant/BottomNavbarItem";
import home from "../../../assets/img/home.png";
import post from "../../../assets/img/post.png";
import ring from "../../../assets/img/ring.png";
import profile from "../../../assets/img/profile.png";

export const BottomNavbar: React.FC = () => {
  const iconList = [home, post, ring, profile];

  return (
    <S.BottomNavbarContainer>
      {BottomNavbarItem.icon.map((item, index) => (
        <S.BottomNavbarItemContainer
          href={BottomNavbarItem.link[index]}
          key={index}
        >
          <S.BottomNavbarIcon width={35} src={iconList[index]} />
          <S.BottomNavbarText>
            {BottomNavbarItem.text[index]}
          </S.BottomNavbarText>
        </S.BottomNavbarItemContainer>
      ))}
    </S.BottomNavbarContainer>
  );
};
