import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await api.get(`/menu`);
        setMenu(response.data);
      } catch (error) {
        console.error("Erro ao buscar menu:", error);
      }
    }

    getMenu();
  }, []);

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-8 py-12">
      <Navbar />
      <div className="max-w-6xl mx-auto py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {menu.map((item) => (
            <article
              key={item.id}
              className="bg-zinc-900 hover:bg-zinc-800 rounded-2xl p-5 shadow-md transition-all duration-200 hover:scale-105 flex flex-col items-center text-center"
            >
              <img
                src={item.imageUrl}
                alt={item.nome}
                className="w-full h-60 object-contain mb-0 rounded-xl"
              />
              <h2 className="text-lg font-semibold truncate w-full text-white">
                {item.nome}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Menu;
