import React from "react";
import s from './NavButton.module.css'

/* eslint-disable react/prop-types */
function NavButton({ children, onClick }) {
    return (
        <button className={s.navButton} onClick={onClick}>
            {children}
        </button>
    )
}

export default NavButton
