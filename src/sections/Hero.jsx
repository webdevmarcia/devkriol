import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import projetosData from "../data/projetosData";

const palavras = ["impulsiona", "valoriza", "transforma", "conecta"];

const stats = [
  { valor: `${projetosData.length}+`, label: "Projetos entregues" },
  { valor: "100%", label: "Design responsivo" },
  { valor: "24h", label: "Tempo de resposta" },
];

export default function Hero() {
  const ref = useRef(null);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndice((i) => (i + 1) % palavras.length), 2600);
    return () => clearInterval(id);
  }, []);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* LUZES ANIMADAS */}
      <motion.div style={{ y: yGlow }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[var(--escuro)]/40 blur-[120px] animate-float" />
        <div
          className="absolute bottom-0 -right-24 w-[24rem] h-[24rem] rounded-full bg-[var(--red)]/20 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* CONTEÚDO */}
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm text-white/90">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Disponível para novos projetos
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Presença digital que{" "}
            <span className="relative inline-block min-w-[6ch] align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={palavras[indice]}
                  initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
                  transition={{ duration: 0.45 }}
                  className="inline-block bg-gradient-to-r from-[var(--claro)] to-white bg-clip-text text-transparent"
                >
                  {palavras[indice]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            marcas.
          </h1>

          <h2 className="font-light text-lg md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Na <span className="font-semibold">DevKriol</span> criamos experiências digitais,
            sites e soluções que conectam negócios ao crescimento real.
          </h2>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="px-7 py-3 rounded-full font-semibold bg-white text-[var(--blue)] shadow-lg"
            >
              Ver portfólio
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contatos"
              className="px-7 py-3 rounded-full font-semibold bg-[var(--red)] text-white shadow-lg shadow-red-900/30"
            >
              Solicitar orçamento
            </motion.a>
          </div>

          {/* ESTATÍSTICAS */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-8"
          >
            {stats.map(({ valor, label }) => (
              <div key={label} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-3 py-4">
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl md:text-3xl font-bold text-white">{valor}</dd>
                <dd className="text-xs md:text-sm text-white/70 mt-1">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* INDICADOR DE SCROLL */}
      <a
        href="#sobre"
        aria-label="Descer para a secção Sobre"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex h-10 w-6 justify-center rounded-full border-2 border-white/50 pt-2"
      >
        <motion.span
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block h-2 w-1 rounded-full bg-white"
        />
      </a>
    </section>
  );
}
