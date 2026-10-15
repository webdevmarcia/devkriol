// Fonte única dos projetos do portfólio.
// - categoria: usada nos filtros da secção Portfólio
// - link: deixe vazio ("") enquanto o projeto não estiver publicado → mostra "Brevemente online"
// - destaque: o projeto em destaque ocupa um cartão maior

export const categorias = ["Todos", "Websites", "Landing pages", "Marcas & Lojas"];

const projetosData = [
  {
    id: "livrus-di-graciosa",
    titulo: "Livrus di Graciosa",
    descricao:
      "Website para uma livraria independente com livros físicos e e‑pubs, curadoria literária e serviços editoriais, com uma identidade elegante que celebra a leitura.",
    imagem: "/projetos/livrus.png",
    link: "https://livrusdigraciosa.pt",
    categoria: "Websites",
    tags: ["Livraria", "Serviços editoriais", "React"],
    destaque: true,
    novo: true,
  },
  {
    id: "explicacoes",
    titulo: "Explicações com a Márcia",
    descricao:
      "Website moderno e responsivo pensado para destacar os serviços de explicações e facilitar o contacto com novos alunos.",
    imagem: "/projetos/explicacoes.png",
    link: "https://explicacoescomamarcia.pt",
    categoria: "Websites",
    tags: ["Institucional", "SEO", "Responsivo"],
  },
  {
    id: "kinotxema",
    titulo: "Kinotxema",
    descricao:
      "Presença digital para uma loja de moda com identidade visual forte e experiência de navegação clara.",
    imagem: "/logotipo.webp",
    link: "https://kinotxema.vercel.app",
    categoria: "Marcas & Lojas",
    tags: ["Branding", "Moda"],
  },
  {
    id: "motorista",
    titulo: "Márcia Motorista",
    descricao:
      "Página profissional para serviços de motorista, com foco na confiança e em pedidos de contacto rápidos.",
    imagem: "/projetos/motorista.jpeg",
    link: "https://motorista-three.vercel.app/",
    categoria: "Landing pages",
    tags: ["Serviços", "Conversão"],
  },
  {
    id: "pastelaria",
    titulo: "Pastelaria da Márcia",
    descricao:
      "Landing page elegante para um negócio de bolos e doces caseiros, com montra de produtos apetecível.",
    imagem: "/projetos/pastelaria.jpeg",
    link: "https://pastelaria-marcia.vercel.app/",
    categoria: "Landing pages",
    tags: ["Restauração", "Montra"],
  },
];

export default projetosData;
