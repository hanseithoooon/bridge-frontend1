import styled from "styled-components";

export const PostContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PostMainText = styled.p`
  font-size: 30px;
`;

export const TextBox = styled.textarea`
  border-radius: 10px;
  margin-top: 20px;
  width: 90%;
  height: 200px;
  padding: 10px;
`;

export const TitleInput = styled.input`
  width: 70%;
  height: 30px;
  border-radius: 8px;
  margin-top: 20px;
  padding: 10px;
`;

export const PostButton = styled.button`
  width: 80%;
  height: 40px;
  background-color: #5ea0f8;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 30px;
`;

export const DropDown = styled.select`
  border-radius: 8px;
  height: 30px;
  width: 80px;
  margin-top: 20px;
`;

export const Option = styled.option``;
