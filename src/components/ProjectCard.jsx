export default function ProjectCard({ titulo, descricao, imagem, link, delay = 0 }) {
  return (
    <div
      className="
        group 
        rounded-2xl 
        overflow-hidden 
        bg-[var(--surface)]/10 
        backdrop-blur-xl 
        border border-white/10 
        shadow-xl 
        hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]
        transition-all 
        duration-500 
        animate-fadeUp
      "
      style={{ animationDelay: `${delay}s` }}
    >
      {/* IMAGEM */}
      <div className="relative overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="
            w-full 
            h-48 
            object-cover 
            transition-transform 
            duration-[1500ms] 
            group-hover:scale-110
          "
        />

        {/* Overlay suave */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-t 
            from-black/40 
            via-black/10 
            to-transparent 
            opacity-0 
            group-hover:opacity-100 
            transition-all 
            duration-700
          "
        ></div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 space-y-3">
        <h3 className="text-2xl font-semibold text-white group-hover:text-[var(--primary)] transition-colors">
          {titulo}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed">
          {descricao}
        </p>

        <a
          href={link}
          target="_blank"
          className="
            inline-block 
            mt-4 
            px-5 
            py-2.5 
            rounded-lg 
            bg-[var(--blue)] 
            text-white
            font-semibold 
            hover:scale-[1.03] 
            active:scale-95 
            transition-all 
            shadow-lg 
            shadow-primary/20
          "
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}
