import React, { useState } from "react";
import { Boardcategory } from "../../components/boardCategory";
import { Article } from "../../components/common/article";
import { PostIcon } from "../../components/postIcon";

export const ArticlePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("게시판");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Boardcategory onCategorySelect={handleCategorySelect} />
      <PostIcon />
      <Article selectedCategory={selectedCategory} />
    </>
  );
};
