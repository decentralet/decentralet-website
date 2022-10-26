import React from "react";

import { Routes, Route } from "react-router-dom";

import { Home } from "./views";

export default function RoutesView() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
