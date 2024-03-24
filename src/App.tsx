import React from "react";
import Main from "./pages/Main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenieVisionAI from "./pages/privacy-policies/genie-vision-ai.tsx";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
