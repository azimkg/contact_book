import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import InfoUser from "../components/InfoUser";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<MainPage />} />
        <Route path="/info/:id" element={<InfoUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
