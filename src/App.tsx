import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import PerformerSearchPage from "./components/PerformerSearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterSearchPage from "./components/CharacterSearchPage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PerformerSearchPage />} />
          <Route path="/home" element={<PerformerSearchPage />} />
          <Route path="/Performers" element={<PerformerSearchPage />} />
          <Route path="/characters" element={<CharacterSearchPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
