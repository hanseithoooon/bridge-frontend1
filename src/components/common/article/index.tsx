import React from "react";
import * as S from "./styled";
import { ArticleDummy } from "../../../constant/articleDummy";

interface ArticleProps {
    selectedCategory: string;
}

export const Article: React.FC<ArticleProps> = ({ selectedCategory }) => {
    const filteredArticles =
        selectedCategory === "게시판"
            ? ArticleDummy.main.map((item, index) => ({
                  main: item,
                  sub: ArticleDummy.sub[index],
                  category: ArticleDummy.category[index],
              }))
            : ArticleDummy.main
                  .map((item, index) => ({
                      main: item,
                      sub: ArticleDummy.sub[index],
                      category: ArticleDummy.category[index],
                  }))
                  .filter((article) => article.category === selectedCategory);

    return (
        <S.ArticleContainer>
            {filteredArticles.map((article, index) => (
                <S.ArticleItem key={index}>
                    <S.anotherCont>
                        <S.ArticleIcon>📌</S.ArticleIcon>
                        <div>
                            <S.ArticleMainText>
                                {article.main}
                                {ArticleDummy.isNew[index] ? <S.ArticleNewIcon>🆕</S.ArticleNewIcon> : ""}
                            </S.ArticleMainText>
                            <S.ArticleSubText>{article.sub}</S.ArticleSubText>
                        </div>
                    </S.anotherCont>
                    <S.goodIcon>👍</S.goodIcon>
                </S.ArticleItem>
            ))}
        </S.ArticleContainer>
    );
};
