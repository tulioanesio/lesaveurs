import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home"
import Menu from "./pages/menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;