import React from "react";
import s from "./CoursesList.module.css";

/* eslint-disable react/prop-types */
function CoursesList({ courses }) {

  return (
    <div className={s.courses}>
      {courses.map((el) => (
        <div className={s.course} key={el.id}>
          <span className={s.courseName}>{el.name}</span>
          <img className={s.courseImg} src={el.img} alt={el.alt} />
        </div>
      ))}
    </div>
  );
}

export default CoursesList;