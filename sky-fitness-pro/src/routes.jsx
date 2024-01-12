import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authorization } from "./pages/Authorization";
import { Profile } from "./pages/Profile";
//import { WorkoutPage } from "./pages/Workout";
import MainPage from "./pages/MainPage";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Authorization />} />
            <Route path="/profile" element={<Profile />} />
            <Route  path="/" element={<MainPage />} />
        </Routes>
    )
}