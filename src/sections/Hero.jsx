import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "PHP", "MySQL"];

export default function Hero() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-16 overflow-hidden"
    >
      {/* LUZ CINEMATOGRÁFICA */}
      <motion.div
        style={{ y: yGlow }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[var(--accent)]/20 blur-[140px] pointer-events-none"
      />

      {/* CONTEÚDO */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto text-center space-y-8"
      >
        {/* BADGE */}
        <div className="inline-block px-4 py-1 rounded-full border border-[var(--accent)] bg-white/5 backdrop-blur-sm text-[var(--accent)] text-sm md:text-base tracking-wide">
          Portfólio da Márcia D Costa
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
          Olá, sou a <span className="text-[var(--accent)]">Márcia Dias Costa</span>
          <br />
          e sou web developer!
        </h1>

        <p className="font-light text-lg md:text-2xl text-white/85 leading-relaxed text-center max-w-2xl mx-auto">
          Crio websites modernos, rápidos e responsivos, que transformam ideias em
          experiências digitais com identidade.
        </p>

        {/* BOTÕES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <HashLink
            smooth
            to="/#projetos"
            className="px-8 py-3 rounded-full bg-[var(--accent)] text-[var(--surface)] font-semibold hover:scale-[1.04] active:scale-95 transition-all shadow-lg shadow-[var(--accent)]/20"
          >
            Ver projetos
          </HashLink>
          <HashLink
            smooth
            to="/#contactos"
            className="px-8 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
          >
            Falar comigo
          </HashLink>
        </div>

        {/* TECNOLOGIAS */}
        <ul className="flex flex-wrap justify-center gap-2 pt-6">
          {tecnologias.map((tec) => (
            <li
              key={tec}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-white/70"
            >
              {tec}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
