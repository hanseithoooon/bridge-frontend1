import styled from "styled-components";

export const BoardcategoryContainer = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 20px;
`;

export const BoardcategoryItemContainer = styled.div`
  display: flex;
`;

export const BoardcategoryItem = styled.div<{ isSelected: boolean }>`
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "black" : "grey")};
  border-bottom: 1px solid ${(props) => (props.isSelected ? "black" : "white")};
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: lightgray;
  }
`;
