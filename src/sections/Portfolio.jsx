import React from "react";

const projects = [
  {
    id: 1,
    name: "Explicações com a Márcia",
    description:
      "Website moderno e responsivo para divulgar os serviços de explicações.",
    image: "/projetos/explicacoes.png",
    url: "https://explicacoescomamarcia.pt",
  },
  {
    id: 2,
    name: "Kinotxema",
    description:
      "Website para divulgar uma loja de roupas e acessórios de pano de capulana.",
    image: "/logotipo.webp",
    url: "https://kinotxema.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-[var(--white)]">
          Portfólio
        </h2>

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
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="opacity-90">{project.description}</p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-white text-[var(--blue)] 
                             font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  Visitar site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
