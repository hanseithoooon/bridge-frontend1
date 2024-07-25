import React, { useState } from "react";
import * as S from "./styled";
import { ArticleDummy } from "../../constant/articleDummy";

export const PostPage: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isClick, setIsClick] = useState<boolean>(false);

  const onClick = () => {
    if (title && category && content) {
      ArticleDummy.main.unshift(title);

      ArticleDummy.category.unshift(category);

      alert("작성이 완료되었어요");

      setTitle("");
      setCategory("");
      setContent("");
    } else {
      alert("모든 필드를 채워주세요");
    }
  };

  return (
    <S.PostContainer>
      <S.PostMainText>생각을 공유해봐요!</S.PostMainText>

      <div style={{ display: "flex", gap: 10 }}>
        <S.TitleInput
          placeholder="제목을 작성하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.DropDown
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <S.Option value="정보">정보</S.Option>
          <S.Option value="홍보">홍보</S.Option>
          <S.Option value="단체">단체</S.Option>
        </S.DropDown>
      </div>

      <S.TextBox
        placeholder="본 내용을 작성하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <S.PostButton onClick={onClick}>작성하기</S.PostButton>
    </S.PostContainer>
  );
};
