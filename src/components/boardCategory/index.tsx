import React, { useState } from "react";
import * as S from "./styled";
import { boardcategoryItem } from "../../constant/boardcategoryItem";

interface BoardcategoryProps {
  onCategorySelect: (category: string) => void;
}

export const Boardcategory: React.FC<BoardcategoryProps> = ({
  onCategorySelect,
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const onClick = (index: number) => {
    setSelectedItemIndex(index);
    onCategorySelect(boardcategoryItem.item[index]);
  };

  return (
    <S.BoardcategoryContainer>
      <S.BoardcategoryItemContainer>
        {boardcategoryItem.item.map((item, index) => (
          <S.BoardcategoryItem
            onClick={() => onClick(index)}
            key={index}
            isSelected={selectedItemIndex === index}
          >
            {item}
          </S.BoardcategoryItem>
        ))}
      </S.BoardcategoryItemContainer>
    </S.BoardcategoryContainer>
  );
};
