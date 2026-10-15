import { motion } from "framer-motion";

const etapas = [
  {
    numero: "01",
    titulo: "Conversa inicial",
    descricao: "Ouvimos a sua ideia, os seus objetivos e o seu público para definir o caminho certo.",
  },
  {
    numero: "02",
    titulo: "Design & proposta",
    descricao: "Criamos a estrutura e o visual do projeto, alinhados com a identidade da sua marca.",
  },
  {
    numero: "03",
    titulo: "Desenvolvimento",
    descricao: "Construímos um site rápido, responsivo e otimizado, com validação em cada etapa.",
  },
  {
    numero: "04",
    titulo: "Lançamento & suporte",
    descricao: "Publicamos o projeto e acompanhamos a sua evolução com manutenção contínua.",
  },
];

export default function Processo() {
  return (
    <section id="processo" className="px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--claro)] mb-4">
            Como trabalhamos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Um processo simples, transparente e focado em resultados.
          </h2>
        </motion.div>

        <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Linha de ligação (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {etapas.map((etapa, index) => (
            <motion.li
              key={etapa.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--blue)] border-2 border-white/40 text-xl font-bold text-white shadow-[0_0_30px_rgba(135,206,235,0.35)]">
                {etapa.numero}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{etapa.titulo}</h3>
              <p className="text-white/75 leading-relaxed text-center">{etapa.descricao}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
