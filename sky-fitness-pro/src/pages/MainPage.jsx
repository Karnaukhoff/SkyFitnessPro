import React from "react";
import { allCourses } from "../components/MainPage/AllCourses/сoursesData";
import CoursesList from "../components/MainPage/AllCourses/CoursesList"
import NavButton from "../components/MainPage/NavButton/NavButton";
import s from "./styles/MainPage.module.css";

function MainPage() {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <div className={s.main}>
      <div className={s.content}>
        <div className={s.content_header}>
          <div>
            <p className={s.title}>Онлайн-тренировки для занятий дома</p>
            <p className={s.subtitle}>
              Начните заниматься спортом и улучшите качество жизни
            </p>
          </div>
          <img
            className={s.main__title_sticker}
            src="img/sale_sticker_1.svg"
            alt="sticker"
          />
        </div>
      </div>
      <CoursesList courses={allCourses} />
      <footer className={s.footer}>
        <NavButton onClick={handleTop}>Наверх ↑</NavButton>
      </footer>
    </div>
    </>
  );
}
export default MainPage;
