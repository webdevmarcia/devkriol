import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Servicos from "./sections/Servicos";
import Portfolio from "./sections/Portfolio";
import Contatos from "./sections/Contatos";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-[var(--on-surface)] bg-[var(--surface)]">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* HERO FORA DO MAIN → FULL SCREEN */}
                <Hero />

                {/* CONTEÚDO PRINCIPAL */}
                <main className="overflow-x-hidden max-w-7xl mx-auto px-6 py-20 space-y-32">
                  <Sobre />
                  <Servicos />
                  <Portfolio />
                  <Contatos />
                </main>
              </>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
