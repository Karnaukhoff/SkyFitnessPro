import React from "react";
import * as S from './styles/WorkoutStyle';

export const WorkoutPage = () => {


    return (
        <>
            <S.WorkoutPageContainer>
                <S.TitleBox>
                    <S.Title></S.Title>
                    <S.WorkoutText></S.WorkoutText>
                </S.TitleBox>

                <S.WorkoutVideo>

                </S.WorkoutVideo>

                <S.WorkoutBlock>
                    <S.WorkoutExercise>
                        <S.WorkoutExerciseHeader>Упражнения</S.WorkoutExerciseHeader>
                        <S.WorkoutExerciseTextBox>

                                    <S.WorkoutExerciseText ></S.WorkoutExerciseText>

                        </S.WorkoutExerciseTextBox>
                        <S.WorkoutExerciseButton>Заполнить свой прогресс</S.WorkoutExerciseButton>
                    </S.WorkoutExercise>

                    <S.WorkoutProgress>
                        <S.WorkoutProgressHeader>Мой прогресс по тренировке:</S.WorkoutProgressHeader>
                        <S.WorkoutProgressBlock>


                                    <S.WorkoutProgressContent >
                                        <S.WorkoutProgressText></S.WorkoutProgressText>
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
        </>
    )
}