import React from "react";
import * as S from "./styles/ProfileStyle"
import { ProfileHeader } from "../components/ProfilePage/Header/Header";
import { ProfileMain } from "../components/ProfilePage/Main/Main";

export function Profile(){
    return(
        <>
        <S.ProfileContainer>
            <ProfileHeader />
            <ProfileMain />
        </S.ProfileContainer>
        </>
    )
}