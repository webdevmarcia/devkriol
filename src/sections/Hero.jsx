import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="
        relative 
        min-h-screen
        flex items-center justify-center 
        px-6 pt-24 pb-10
        overflow-hidden
      "
    >

      {/* LUZ CINEMATOGRÁFICA */}
      <motion.div
        style={{ y: yImage }}
        className="
          absolute inset-0 
          bg-gradient-to-br from-primary/20 via-transparent to-primary/10 
          blur-[120px] opacity-70
        "
      />

      {/* GRÃO SUAVE */}
      <div className="
        absolute inset-0 
        opacity-[0.08] 
        bg-[url('/grain.png')] 
        mix-blend-soft-light 
        pointer-events-none
      "></div>

      {/* CONTEÚDO */}
      <div className="relative max-w-3xl mx-auto text-center space-y-10">

        {/* TEXTO COM PARALLAX */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
        
          <h1 className="text-l md:text-3xl font-extrabold text-white tracking-tight leading-[1.1]">
            Presença digital que <span className="text-[var(--blue)]">impulsiona</span> marcas.
          </h1>

          <h2 className="font-light text-lg md:text-2xl text-[var(--white)] leading-relaxed max-w-2xl mx-auto">
            Na <span className="font-semibold">DevKriol</span> criamos experiências digitais,
            sites e soluções que conectam negócios ao crescimento real.
          </h2>

          {/* BOTÕES */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="
                px-5 py-2 rounded-full font-semibold text-l
                bg-[var(--blue)] text-white
                shadow-lg shadow-primary/30
                transition-all
              "
            >
              Ver serviços
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contatos"
              className="
                px-5 py-2 rounded-full font-semibold text-l
                bg-[var(--red)] text-white
                shadow-lg shadow-primary/30
                transition-all
              "
            >
              Solicitar orçamento
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
