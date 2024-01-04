import React from "react";
import * as S from "./HeaderStyle"

export function ProfileHeader(){
    return(
        <>
            <S.Header>
                <S.ModalLogoImage src="/img/logo.png" alt="logo" />
                <S.SidebarPersonal>          
                    <S.SidebarIcon>
                        <svg alt="logout">
                            <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                        </svg>
                    </S.SidebarIcon>
                    <S.SidebarPersonalName>Имя пользователя</S.SidebarPersonalName>
                    <S.Rectangle src="/img/RectangleHeader.png">
 
                    </S.Rectangle>
                </S.SidebarPersonal>
            </S.Header>
        </>

    )
}