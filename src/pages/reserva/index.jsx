import api from "../../services/api.js";
import Navbar from "../../components/Navbar.jsx";
import * as React from "react";

function Reserva() {
  return (
    <main className="bg-black text-white font-serif">
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="flex py-20 items-center text-center">
          <h1>Reserva</h1>
        </div>
        <div>
          <section className="bg-zinc-500">

          </section >
          <form action="" className="bg-zinc-900">
            <input type="text" name="nome" id="" />
            <input type="email" name="email" id="" />
            <input type="text" name="telefone" id="" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Reserva;
