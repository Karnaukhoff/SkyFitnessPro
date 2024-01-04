import React from "react";
import * as S from "./MainStyle"

export function ProfileMain(){
    return(
        <>
            <S.Head>Мой профиль</S.Head>

            <S.Data>Логин:</S.Data>
            <S.Data>Пароль:</S.Data>
            
            <S.EditButtons>
                <S.EditDataButton>Редактировать логин</S.EditDataButton>
                <S.EditDataButton>Редактировать пароль</S.EditDataButton>
            </S.EditButtons>
            <S.MyCourses>
                <S.CoursesHeader>Мои курсы</S.CoursesHeader>
                <S.CoursesContainer>
                    <S.Course_1>
                        <S.GoTo>Перейти &rarr;</S.GoTo>
                    </S.Course_1>
                    <S.Course_2>
                        <S.GoTo>Перейти &rarr;</S.GoTo>
                    </S.Course_2>
                    <S.Course_3>
                        <S.GoTo>Перейти &rarr;</S.GoTo>
                    </S.Course_3>
                </S.CoursesContainer>
            </S.MyCourses>
        </>
    )
}