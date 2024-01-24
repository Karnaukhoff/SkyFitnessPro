import { styled } from "styled-components";

export const Head = styled.p`
    font-size: 48px;
    color: #000000;
    margin-bottom: 35px;
`;
export const Data = styled.div`
    width: 256px;
    height: 32px;
    font-family: 'StratosSkyeng';
    font-size: 24px;
    line-height: 32px;
`;
export const EditButtons = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
`

export const EditDataButton = styled.button`
    width: 275px;
    height: 52px;
    border-radius: 46px;
    background-color: #580EA2;
    color: #FFFFFF;
    border: none;
    font-family: 'StratosSkyeng';
    font-size: 18px;
    transition: transform .2s;
    &:hover{
        transform: scale(1.03)
    }
`
export const MyCourses = styled.section`

`;
export const CoursesHeader = styled.header`
    font-family: 'StratosSkyeng';
    font-size: 48px;
    font-weight: 400;
    color: #000000;
    margin-bottom: 50px;
`
export const CoursesContainer = styled.section`
    display: flex;
    gap: 35px;
`;
const Course = `
    width: 360px;
    height: 480px;
    border-radius: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    display: flex;
    align-items: flex-end;
    transition: transform .2s;
    &:hover{
        transform: scale(1.01)
    }
`;
export const Course_1 = styled.div`
    ${Course}
    background-image: url("img/yoga.png");
`;
export const Course_2 = styled.div`
    ${Course}
    background-image: url("img/stretching.png");
`;
export const Course_3 = styled.div`
    ${Course}
    background-image: url("img/bodyflex.png");
`;
export const GoTo = styled.button`
    width: 136px;
    height: 43px;
    border-radius: 80px;
    background-color: #C7E957;
    font-family: StratosSkyeng;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.05000000074505806px;
    text-align: center;
    margin-bottom: 27px;
    margin-left: 31px;
    border: none;
    text-decoration: none;
    &:hover { 
        text-decoration: underline;
      }
`;