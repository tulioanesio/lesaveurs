import { useEffect, useState } from "react";
import {
  FaChair,
  FaClock,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import api from "../../services/api";
import Navbar from "../../components/Navbar";
import { formatISO, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";

function Reserva() {
  const [mesas, setMesas] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    return new Date().toISOString().slice(0, 10);
  });
  const [time, setTime] = useState("21:00");
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const res = await api.get("/mesas");
        setMesas(res.data);
      } catch (err) {
        console.error("Erro ao buscar mesas:", err);
      }
    };
    fetchMesas();
  }, []);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const res = await api.get("/reserva/dashboard");
        setReservas(res.data);
      } catch (err) {
        console.error("Erro ao buscar reservas:", err);
      }
    };
    fetchReservas();
  }, [selectedDate]);

  const isMesaOcupada = (mesaId) => {
    return reservas.some((reserva) => {
      const reservaDay = new Date(reserva.data).toISOString().slice(0, 10);
      return reserva.mesaId === mesaId && reservaDay === selectedDate;
    });
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    if (!selectedTable) return toast.warning("Selecione uma mesa disponível.");

    const dataCompleta = new Date(`${selectedDate}T${time}:00`);

    try {
      await api.post("/reserva", {
        nome: form.name,
        telefone: form.phone,
        email: form.email,
        mesaId: selectedTable.id,
        data: formatISO(dataCompleta),
      });
      toast.sucess("Reserva confirmada!");
      setSelectedTable(null);
      setForm({ name: "", phone: "", email: "" });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Erro ao confirmar reserva.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <Navbar />

        <section className="flex flex-col md:flex-row gap-8 py-20">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
              <FaChair className="text-green-500" /> Mapa do Restaurante
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Clique em uma mesa disponível para selecionar
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
              {mesas.map((mesa) => {
                const isOccupied = isMesaOcupada(mesa.id);
                const isSelected = selectedTable?.id === mesa.id;
                return (
                  <div
                    key={mesa.id}
                    className={`cursor-pointer p-5 rounded-lg text-sm font-semibold text-center transition-all select-none
                      ${
                        isOccupied
                          ? "bg-red-600 cursor-not-allowed opacity-70"
                          : isSelected
                          ? "bg-blue-600 shadow-lg"
                          : "bg-green-600 hover:brightness-110"
                      }`}
                    onClick={() => {
                      if (!isOccupied) setSelectedTable(mesa);
                    }}
                  >
                    <span className="block text-lg">M{mesa.numero}</span>
                    <span className="block mt-1">
                      {mesa.capacidade} pessoas
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between mt-8 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                Disponível
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-600 rounded-full"></span>
                Ocupada
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                Selecionada
              </span>
            </div>
          </div>

          <form
            onSubmit={handleReservation}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md md:w-1/2 space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Detalhes da Reserva</h2>

            {selectedTable ? (
              <div className="bg-blue-100 text-blue-900 p-3 rounded text-sm font-medium flex items-center gap-3">
                <FaChair /> Mesa {selectedTable.numero} -{" "}
                {selectedTable.capacidade} lugares
              </div>
            ) : (
              <p className="text-gray-400 italic mb-4">
                Selecione uma mesa para continuar
              </p>
            )}
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <FaUser /> Nome completo
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md bg-[#111] border border-gray-600 text-white"
                placeholder="Digite seu nome completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <FaPhone /> Telefone
              </label>
              <input
                type="tel"
                className="w-full p-3 rounded-md bg-[#111] border border-gray-600 text-white"
                placeholder="Digite seu telefone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <FaEnvelope /> E-mail
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-md bg-[#111] border border-gray-600 text-white"
                placeholder="Digite seu e-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <FaClock /> Horário
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 rounded-md bg-[#111] border border-gray-600 text-white"
                required
              >
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
                <FaCalendarAlt /> Data
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-md bg-[#111] border border-gray-600 text-white"
                value={selectedDate}
                min={new Date().toISOString().slice(0, 10)} // não permite datas passadas
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition"
            >
              Confirmar Reserva
            </button>
          </form>
        </section>
      </div>
      <ToastContainer theme="dark" autoClose={5000} />
    </div>
  );
}

export default Reserva;
