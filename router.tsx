import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/Home/index"
import { PublicationContent } from "./src/pages/PublicationContent";

export default function MainRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/content/:id" element={<PublicationContent />} />
    </Routes>
  )
}