import React, { useState, useEffect } from "react";
import * as S from "./styled";
import { ArticleDummy } from "../../../constant/articleDummy";
import pin from "../../../assets/img/pin.png";

interface ArticleProps {
  selectedCategory: string;
}

export const Article: React.FC<ArticleProps> = ({ selectedCategory }) => {
  const [articles, setArticles] = useState(() => {
    return ArticleDummy.main.map((item, index) => ({
      main: item,
      sub: ArticleDummy.sub[index],
      category: ArticleDummy.category[index],
    }));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newArticles = ArticleDummy.main.map((item, index) => ({
        main: item,
        sub: ArticleDummy.sub[index],
        category: ArticleDummy.category[index],
      }));
      setArticles(newArticles);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredArticles =
    selectedCategory === "게시판"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <S.ArticleContainer>
      {filteredArticles.map((article, index) => (
        <S.ArticleItem key={index}>
          <S.anotherCont href="full">
            <S.ArticleIcon src={pin} width={20} height={20} />
            <div style={{ lineHeight: 1.2 }}>
              <S.ArticleMainText>{article.main} </S.ArticleMainText>
              <S.ArticleSubText>{article.sub}</S.ArticleSubText>
            </div>
          </S.anotherCont>
          <S.goodIcon>{ArticleDummy.like[index]}👍</S.goodIcon>
        </S.ArticleItem>
      ))}
    </S.ArticleContainer>
  );
};
