import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { PostPage } from "../../pages/post";

export const PostIcon: React.FC = () => {
  return (
    <Link to={"/post"}>
      <S.PostIcon>✏️</S.PostIcon>
    </Link>
  );
};
