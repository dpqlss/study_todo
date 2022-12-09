import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Todo from "./pages/Todo/Todo";
import New from "./pages/Todo/New";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/New" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
