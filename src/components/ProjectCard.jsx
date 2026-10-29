import { motion } from "framer-motion";

// Iniciais usadas quando o projeto ainda não tem imagem
function iniciais(titulo) {
  return titulo
    .split(" ")
    .filter((p) => p.length > 2)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProjectCard({ titulo, descricao, imagem, tags = [], link, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hover:border-[var(--accent)]/50 hover:shadow-[0_0_35px_rgba(244,114,182,0.2)] transition-all duration-500"
    >
      {/* IMAGEM */}
      <div className="relative overflow-hidden h-52">
        {imagem ? (
          <img
            src={imagem}
            alt={titulo}
            className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--surface-container-high)] to-[var(--on-tertiary-fixed-variant)] transition-transform duration-[1500ms] group-hover:scale-110">
            <span className="text-5xl font-extrabold text-white/90 tracking-tight">
              {iniciais(titulo)}
            </span>
          </div>
        )}

        {/* Overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col flex-1 p-6 space-y-3">
        <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
          {titulo}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed text-left">{descricao}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-xs text-white/60">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--surface)] font-semibold hover:scale-[1.03] active:scale-95 transition-all"
            >
              Ver projeto
            </a>
          ) : (
            <span className="inline-block px-5 py-2.5 rounded-lg border border-white/20 text-white/60 font-semibold">
              Em breve
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
