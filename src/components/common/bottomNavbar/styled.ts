import styled from "styled-components";

export const BottomNavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid gainsboro;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  background: white;
`;

export const BottomNavbarItemContainer = styled.a`
  width: 25%;
  gap: 8px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: grey;
  font-weight: bold;
  text-decoration: none;
`;

export const BottomNavbarIcon = styled.img``;

export const BottomNavbarNewIcon = styled.span``;

export const BottomNavbarText = styled.p`
  font-size: 20px;
`;
