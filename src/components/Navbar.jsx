import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-gray-700 fixed z-999 top-0 left-0 right-0 bg-black text-white font-serif">
        <Link to="/">
      <h1 className="text-3xl font-bold ">LES SAVEURS</h1>
      </Link>
      <nav className="flex justify-center gap-6 mt-4 md:mt-0 mx-auto md:mx-0">
        <Link to="/reserva" className="hover:underline">
          Reserva
        </Link>
        <Link to="/menu" className="hover:underline">
          Nosso Menu
        </Link>
      </nav>
    </header>
  );
}
