import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authorization } from "./pages/Authorization";
import { Profile } from "./pages/Profile";
import MainPage from "./pages/MainPage";
import { WorkoutPage } from "./pages/WorkoutAuth";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Authorization />} />
            <Route path="/profile" element={<Profile />} />
            <Route  path="/" element={<MainPage />} />
            <Route  path="/workout" element={<WorkoutPage />} />
        </Routes>
    )
}