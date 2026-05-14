import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

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
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="
      flex items-center justify-between 
      h-20 px-6 bg-white sticky top-0 z-50 w-full 
      shadow-md transition-colors
    ">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">
          <img 
            src="logo.webp" 
            alt="Logo" 
            className="w-30 h-30 object-contain"
          />
        </a>

        {/* ÍCONE HAMBÚRGUER */}
        <button
          className="md:hidden flex flex-col gap-1.5 ml-2"
          onClick={() => setOpen(true)}
        >
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
          <span className="w-7 h-0.5 bg-[var(--blue)] rounded"></span>
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          <HashLink smooth to="/#sobre" className="text-[var(--blue)] hover:text-[var(--red)] transition">
            Sobre
          </HashLink>

          <HashLink smooth to="/#servicos" className="text-[var(--blue)] hover:text-[var(--red)] transition">
            Serviços
          </HashLink>

          <HashLink smooth to="/#portfolio" className="text-[var(--blue)] hover:text-[var(--red)] transition">
            Portfólio
          </HashLink>

          <HashLink smooth to="/#contatos" className="text-[var(--blue)] hover:text-[var(--red)] transition">
            Contatos
          </HashLink>
        </nav>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex justify-end">
          <div
            ref={menuRef}
            className="
              w-72 h-full bg-white/95 backdrop-blur-xl shadow-xl 
              p-8 flex flex-col gap-8 animate-slideLeft
            "
          >
            {/* BOTÃO FECHAR */}
            <button
              className="self-end text-3xl text-[var(--blue)] hover:text-[var(--red)] transition"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            {/* NAV MOBILE */}
            <nav className="flex flex-col gap-6 text-lg font-semibold">
              <HashLink
                smooth
                to="/#sobre"
                onClick={() => setOpen(false)}
                className="text-[var(--blue)] hover:text-[var(--red)] transition"
              >
                Sobre
              </HashLink>

              <HashLink
                smooth
                to="/#servicos"
                onClick={() => setOpen(false)}
                className="text-[var(--blue)] hover:text-[var(--red)] transition"
              >
                Serviços
              </HashLink>

              <HashLink
                smooth
                to="/#portfolio"
                onClick={() => setOpen(false)}
                className="text-[var(--blue)] hover:text-[var(--red)] transition"
              >
                Portfólio
              </HashLink>

              <HashLink
                smooth
                to="/#contatos"
                onClick={() => setOpen(false)}
                className="text-[var(--blue)] hover:text-[var(--red)] transition"
              >
                Contatos
              </HashLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
