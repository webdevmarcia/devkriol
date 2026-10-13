import React from "react";

const projects = [
  {
    id: 1,
    name: "Explicações com a Márcia",
    description:
      "Website moderno e responsivo pensado para destacar os serviços e facilitar a descoberta da marca.",
    image: "/projetos/explicacoes.png",
    url: "https://explicacoescomamarcia.pt",
    tag: "Website institucional",
  },
  {
    id: 2,
    name: "Kinotxema",
    description:
      "Presença digital para uma loja de moda com identidade visual forte e experiência de navegação clara.",
    image: "/logotipo.webp",
    url: "https://kinotxema.vercel.app",
    tag: "Brand + digital",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          

          <h2 className="text-2xl md:text-3xl font-bold text-[var(--white)] leading-tight mb-6">
            Soluções digitais com identidade, clareza e impacto.
          </h2>

          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
            Selecionamos projetos que refletem a forma como criamos experiências digitais pensadas para fortalecer marcas, melhorar a presença online e transformar a comunicação em resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--blue)] rounded-xl shadow-lg overflow-hidden 
                         hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 
                         text-[var(--white)]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.15em] text-white/80">
                  {project.tag}
                </span>

                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="opacity-90 leading-relaxed">{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-white text-[var(--blue)] 
                             font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  Ver projeto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
