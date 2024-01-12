import React from "react";
import * as S from './styles/WorkoutAuthStyle';
//import {Preloader} from "../components/Preloader/Preloader"
import { ProfileHeader } from "../components/ProfilePage/Header/Header";

export const WorkoutPage = () => {

    return (
        <> 
        <S.ProfileContainer>
            <ProfileHeader />
            <S.Main >
                <S.Container>
                <S.WorkoutPageContainer>
                

                <S.WorkoutVideo>
                    <img src="/img/subtract.svg" alt="subtract" />
                </S.WorkoutVideo>

                <S.WorkoutBlock>
                    <S.WorkoutExercise>
                        <S.WorkoutExerciseHeader>Упражнения</S.WorkoutExerciseHeader>
                        <S.WorkoutExerciseTextBox>
                                <S.WorkoutExerciseText >Пресс</S.WorkoutExerciseText>

                        </S.WorkoutExerciseTextBox>
                        <S.WorkoutExerciseButton>Заполнить свой прогресс</S.WorkoutExerciseButton>
                    </S.WorkoutExercise>

                    <S.WorkoutProgress>
                        <S.WorkoutProgressHeader>Мой прогресс по тренировке:</S.WorkoutProgressHeader>
                        <S.WorkoutProgressBlock>


                                    <S.WorkoutProgressContent >
                                        <S.WorkoutProgressText>ExerciseName</S.WorkoutProgressText>
                                        <S.WorkoutProgressBar >
                                            <S.WorkoutProgressBarLine 
                                            >
                                                <S.WorkoutProgressBarSpan>100%</S.WorkoutProgressBarSpan>
                                            </S.WorkoutProgressBarLine>
                                        </S.WorkoutProgressBar>
                                    </S.WorkoutProgressContent>
                        </S.WorkoutProgressBlock>
                    </S.WorkoutProgress>
                </S.WorkoutBlock>
                

            </S.WorkoutPageContainer>
                </S.Container>
            </S.Main>
        </S.ProfileContainer>
        </>  
    )
}