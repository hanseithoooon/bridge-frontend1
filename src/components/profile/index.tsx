import React from "react";

import * as S from "./styled";

export const Profile: React.FC = () => {
    return (
        <S.profileContainer>
            <S.profileBox>
                <S.ProfileImgBox>
                    <img src='src/assets/nomalprofile.png' width={80}></img>
                </S.ProfileImgBox>
                <S.ProfileNameBox>sql injection</S.ProfileNameBox>
            </S.profileBox>
        </S.profileContainer>
    );
};
