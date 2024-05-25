import React from "react";
import Main from "./pages/Main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenieVisionAI from "./pages/privacy-policies/genie-vision-ai.tsx";
import UnitGuru from "./pages/privacy-policies/unit-guru.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/portfolio" Component={Main} />
        <Route
          path="/privacy-policy/genie-vision-ai"
          Component={GenieVisionAI}
        />
        <Route path="/privacy-policy/unit-guru" Component={UnitGuru} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
