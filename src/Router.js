import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
