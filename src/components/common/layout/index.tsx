import React from "react";
import * as S from "./styled";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};
