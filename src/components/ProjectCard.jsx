import { motion } from "framer-motion";

export default function ProjectCard({ projeto, index = 0 }) {
  const { titulo, descricao, imagem, link, categoria, tags = [], destaque, novo } = projeto;
  const publicado = Boolean(link);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className={`
        group relative flex flex-col overflow-hidden rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/15
        shadow-xl hover:shadow-[0_25px_60px_rgba(15,44,95,0.45)]
        hover:border-white/40 transition-[box-shadow,border-color] duration-500
        ${destaque ? "md:col-span-2 md:flex-row" : ""}
      `}
    >
      {/* IMAGEM */}
      <div className={`relative overflow-hidden ${destaque ? "md:w-3/5 h-60 md:h-auto" : "h-52"}`}>
        <img
          src={imagem}
          alt={`Pré-visualização do projeto ${titulo}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--blue)] text-xs font-semibold uppercase tracking-wider">
            {categoria}
          </span>
          {novo && (
            <span className="px-3 py-1 rounded-full bg-[var(--red)] text-white text-xs font-semibold uppercase tracking-wider animate-pulse">
              Novo
            </span>
          )}
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className={`flex flex-col flex-1 p-6 ${destaque ? "md:p-10 md:justify-center" : ""}`}>
        {destaque && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--claro)] mb-3">
            Projeto em destaque
          </p>
        )}

        <h3 className={`font-bold text-white mb-3 ${destaque ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {titulo}
        </h3>

        <p className="text-white/75 text-sm leading-relaxed text-left mb-5">{descricao}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <li key={tag} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-white/80">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          {publicado ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-white text-[var(--blue)] font-semibold text-sm
                hover:bg-[var(--yellow)] transition-colors shadow-lg
              "
            >
              Ver projeto
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white/80 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--yellow)] animate-pulse" />
              Brevemente online
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
