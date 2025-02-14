import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenieVisionAI from "./pages/privacy-policies/genie-vision-ai.tsx";
import UnitGuru from "./pages/privacy-policies/unit-guru.tsx";
import Main from "./pages/main/Main.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
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
