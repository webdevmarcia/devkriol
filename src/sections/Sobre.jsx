import { motion } from "framer-motion";

const destaques = [
  { valor: "3+", texto: "Projetos publicados" },
  { valor: "Front & Back", texto: "Do design à base de dados" },
  { valor: "PT · CV", texto: "Entre Portugal e Cabo Verde" },
];

const paragrafos = [
  "Sou a Márcia Dias Costa, web developer a viver na Margem Sul, em Portugal, com raízes em Cabo Verde. Apaixonei-me pela tecnologia ao perceber que um website bem feito pode dar voz a uma ideia, a um negócio ou a uma comunidade.",
  "Trabalho com HTML, CSS, JavaScript, React e Tailwind no front-end, e com PHP e MySQL no back-end — desde o desenho da interface até à lógica do servidor e à gestão de dados.",
  "Para além de programar, dou explicações e gosto de partilhar conhecimento. Acredito que a tecnologia deve ser acessível, e quero inspirar mais jovens, sobretudo mulheres, a entrar neste mundo.",
];

export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center">
        {/* MONOGRAMA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-br from-[var(--accent)] to-[var(--primary-container)] shadow-2xl shadow-[var(--accent)]/20"
        >
          <div className="w-full h-full rounded-full bg-[var(--surface-container)] flex items-center justify-center">
            <span className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white">
              M<span className="text-[var(--accent)]">D</span>C
            </span>
          </div>
        </motion.div>

        {/* TEXTO */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Sobre mim
          </motion.h2>

          {paragrafos.map((texto, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.15, duration: 0.8 }}
              className="text-lg text-white/85 leading-relaxed"
            >
              {texto}
            </motion.p>
          ))}

          {/* DESTAQUES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {destaques.map((item, index) => (
              <motion.div
                key={item.texto}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.12, duration: 0.8 }}
                className="rounded-2xl p-5 bg-white/5 border border-white/10"
              >
                <div className="text-xl font-bold text-[var(--accent)]">{item.valor}</div>
                <div className="text-sm text-white/70 mt-1">{item.texto}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
