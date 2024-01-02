import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authorization } from "./pages/Authorization";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/login" element={<Authorization />} />
        </Routes>
    )
}