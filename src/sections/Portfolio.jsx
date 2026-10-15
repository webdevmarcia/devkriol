import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projetosData, { categorias } from "../data/projetosData";

export default function Portfolio() {
  const [filtro, setFiltro] = useState("Todos");

  const projetos =
    filtro === "Todos" ? projetosData : projetosData.filter((p) => p.categoria === filtro);

  return (
    <section id="portfolio" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--claro)] mb-4">
            Portfólio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Soluções digitais com identidade, clareza e impacto.
          </h2>

          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-center">
            Uma seleção de projetos que refletem a forma como criamos experiências digitais para
            fortalecer marcas, melhorar a presença online e transformar a comunicação em resultados.
          </p>
        </motion.div>

        {/* FILTROS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filtrar projetos">
          {categorias.map((cat) => {
            const ativo = filtro === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={ativo}
                onClick={() => setFiltro(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  ativo ? "text-[var(--blue)]" : "text-white/80 hover:text-white bg-white/5 border border-white/15"
                }`}
              >
                {ativo && (
                  <motion.span
                    layoutId="filtro-ativo"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* GRELHA */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projetos.map((projeto, index) => (
              <ProjectCard key={projeto.id} projeto={projeto} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-5 text-center">O próximo projeto do portfólio pode ser o seu.</p>
          <a
            href="#contatos"
            className="inline-block px-7 py-3 rounded-full bg-[var(--red)] text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Vamos falar sobre a sua ideia
          </a>
        </motion.div>
      </div>
    </section>
  );
}
