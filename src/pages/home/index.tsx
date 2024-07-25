import * as S from "./styled";
import { SagiArticleDummy } from "../../constant/sagi/sagi";
import pin from "../../assets/img/pin.png";

export const HomePage: React.FC = () => {
  {
    return (
      <>
        <S.HomeMainText>
          가장 인기있는 <br /> 게시물들이에요!
        </S.HomeMainText>
        {SagiArticleDummy.main.map((item, index) => {
          return (
            <div style={{ display: "flex", marginTop: 30 }}>
              <S.ArticleItema key={index}>
                <S.ArticleIcona src={pin} width={30} />
                <div
                  style={{
                    marginRight: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <S.ArticleMainTexta>{item}</S.ArticleMainTexta>
                  <S.ArticleSubTexta>
                    {SagiArticleDummy.sub[index]}
                  </S.ArticleSubTexta>
                </div>

                <S.goodIcona>{SagiArticleDummy.like[index]}👍</S.goodIcona>
              </S.ArticleItema>
            </div>
          );
        })}
      </>
    );
  }
};
