const redes = [
  {
    nome: "WhatsApp",
    href: "https://wa.me/351932663895",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.74 0 .6 5.14.6 11.44c0 2.01.53 3.98 1.54 5.72L0 24l6.99-2.1a11.5 11.5 0 0 0 5.05 1.2h.01c6.3 0 11.44-5.14 11.44-11.44 0-3.05-1.19-5.92-3.47-8.18z" />
      </svg>
    ),
  },
  {
    nome: "GitHub",
    href: "https://github.com/webdevmarcia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    nome: "LinkedIn",
    href: "https://www.linkedin.com/in/webdevmarcia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.3 8.1h4.4V24H.3V8.1zM8.6 8.1h4.2v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-4.4v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24H8.6V8.1z" />
      </svg>
    ),
  },
  {
    nome: "Instagram",
    href: "https://instagram.com/webdev_marcia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17" cy="7" r="1.2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--surface-container-lowest)]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-extrabold text-white text-center md:text-left">
            Márcia <span className="text-[var(--accent)]">D</span> Costa
          </p>
          <p className="text-white/60 text-sm text-center md:text-left">Web Developer · Margem Sul, Portugal</p>
        </div>

        <div className="flex gap-5 text-[var(--accent)]">
          {redes.map((rede) => (
            <a
              key={rede.nome}
              href={rede.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={rede.nome}
              className="hover:scale-110 hover:text-white transition"
            >
              {rede.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Márcia D Costa — Todos os direitos reservados.
      </div>
    </footer>
  );
}
