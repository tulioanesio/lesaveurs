import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home"
import Menu from "./pages/menu";
import Reserva from "./pages/reserva";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;