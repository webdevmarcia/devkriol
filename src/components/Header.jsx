import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const links = [
  { to: "/#sobre", label: "Sobre mim" },
  { to: "/#projetos", label: "Projetos" },
  { to: "/#contactos", label: "Contactos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-[var(--surface)]/70 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center h-full px-6 max-w-7xl mx-auto">
        {/* LOGO */}
        <HashLink smooth to="/#inicio" className="text-xl font-extrabold tracking-tight text-white">
          Márcia <span className="text-[var(--accent)]">D</span> Costa
        </HashLink>

        {/* ÍCONE HAMBÚRGUER */}
        <button
          className="md:hidden flex flex-col gap-1.5 ml-2"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <span className="w-7 h-0.5 bg-[var(--accent)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--accent)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--accent)] rounded"></span>
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <HashLink key={link.to} smooth to={link.to} className="text-white/85 hover:text-[var(--accent)] transition">
              {link.label}
            </HashLink>
          ))}
        </nav>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex justify-end">
          <div
            ref={menuRef}
            className="w-72 h-full bg-[var(--surface-container)] shadow-xl p-8 flex flex-col gap-8 animate-slideLeft"
          >
            {/* BOTÃO FECHAR */}
            <button
              className="self-end text-3xl text-white hover:text-[var(--accent)] transition"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            >
              ×
            </button>

            {/* NAV MOBILE */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              {links.map((link) => (
                <HashLink
                  key={link.to}
                  smooth
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-[var(--accent)] transition"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
