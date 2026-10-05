import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sobre() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <section
      id="sobre"
      ref={ref}
      className="
        relative w-full py-20 px-6 overflow-hidden
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-2xl rounded-3xl
      "
    >
      {/* Glow cinematográfico */}
      <motion.div
        style={{ y: yText }}
        className="
          absolute inset-0 
          bg-gradient-to-b from-transparent via-white/10 to-transparent 
          blur-3xl pointer-events-none
        "
      />

      <div className="max-w-6xl mx-auto px-10 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* --- TEXTO COM ANIMAÇÃO + PARALLAX --- */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--blue)]">
            Quem somos
          </p>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Transformamos ideias em experiências digitais com impacto.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 1 }}
            className="text-l text-white/90 leading-relaxed"
          >
            A <span className="font-semibold text-white">DevKriol</span> é uma agência digital criada para ajudar marcas a crescer com presença online forte, clara e funcional.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-l text-white/90 leading-relaxed"
          >
            Desenvolvemos soluções digitais completas, desde websites e plataformas até interfaces pensadas para melhorar a experiência do utilizador e fortalecer a identidade da marca.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 1 }}
            className="text-l text-white/90 leading-relaxed"
          >
            Combinamos design, tecnologia e estratégia para entregar experiências rápidas, responsivas e preparadas para o crescimento real dos negócios.
          </motion.p>

          {/* BOTÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            className="pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#servicos"
              className="
                px-8 py-4 bg-white text-[var(--blue)] rounded-lg 
                font-bold text-lg transition-all 
                shadow-xl shadow-black/20
              "
            >
              Conhecer serviços
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- IMAGEM AO LADO --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full"
        >
          <img
            src="/man.jpg"
            alt="Websites criados"
            className="
              w-full h-auto rounded-2xl shadow-2xl object-cover
              border border-white/20
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
