import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";

function Home() {
  return (
    <div className="bg-black text-white font-serif">
      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src={image1}
            alt="Mesa com vinho em restaurante elegante"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Onde cada mordida <br /> transcende o sabor e se <br /> torna uma sinfonia de luxo
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Descubra uma sinfonia de sabores elaborada com precisão e em um ambiente de luxo incomparável.
            Eleve sua experiência no <strong>Les Saveurs</strong>.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
            <Link
              to="/reserva"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Faça sua reserva
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-[#111] text-center md:text-left flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Sobre nós</h3>
          <p className="text-gray-300">
            No Les Saveurs, acreditamos que a gastronomia é uma forma de arte. Nosso objetivo é redefinir a alta
            gastronomia, criando experiências imersivas em cada refeição e detalhes requintados em cada prato.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={image2}
            alt="Chef finalizando prato gourmet"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </section>

      <section className="px-6 py-12 text-center bg-black">
        <h3 className="text-2xl font-bold mb-4">Horários de Funcionamento</h3>
        <p className="text-gray-300">Segunda - Sexta: 18:00 PM - 23:00 PM</p>
        <p className="text-gray-300">Sábado - Domingo: 18:00 PM - 21:00 PM</p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Endereço</h3>
        <p className="text-gray-300">Les Saveurs, 123 Rua Refinada, Cidadela, SC - Brasil</p>
        <p className="text-gray-300">info@lessaveurs.com</p>
        <p className="text-gray-300">(48) 9999-9999</p>
      </section>

      <section className="bg-[#111] px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Nossa Review</h3>
        <p className="text-gray-300 max-w-3xl mx-auto mb-6">
          Descubra o que nossos clientes estão dizendo sobre sua experiência conosco e por que eles adoram.
        </p>
        <blockquote className="italic text-gray-400 max-w-2xl mx-auto">
          “Uma experiência gastronômica requintada! Desde o momento em que entramos no Les Saveurs, fomos envolvidos por uma atmosfera de elegância.
          Os pratos eram nada menos que obras-primas culinárias, cada mordida uma revelação.”
          <br />
          <span className="not-italic font-bold block mt-4">— Eduardo Blanco</span>
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
