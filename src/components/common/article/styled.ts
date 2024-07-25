import styled from "styled-components";

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
`;

export const ArticleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 50px;
`;

export const ArticleMainText = styled.p`
  font-size: 22px;
  display: flex;
  gap: 10px;
`;

export const ArticleSubText = styled.p`
  font-size: 18px;
  color: grey;
`;

export const ArticleIcon = styled.span`
  font-size: 22px;
`;

export const ArticleNewIcon = styled.span``;
