import React from "react";
import * as S from "./styled";
import { Article } from "../../components/common/article";

export const HomePage: React.FC = () => {
  return (
    <>
      <S.HomeMainText>
        가장 인기있는 <br /> 게시물들이에요!
      </S.HomeMainText>
      <Article selectedCategory={"정보"} />
    </>
  );
};
