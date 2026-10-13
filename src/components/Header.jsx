import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { label: "Sobre", to: "/#sobre" },
  { label: "Serviços", to: "/#servicos" },
  { label: "Portfólio", to: "/#portfolio" },
  { label: "Contatos", to: "/#contatos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="
      flex items-center justify-between 
      h-15 px-3 bg-white sticky top-0 z-50 w-full 
      shadow-md transition-colors
    ">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-4xl mx-auto">
        <a href="/" className="flex items-center gap-3" aria-label="Voltar para a página inicial">
          <img 
            src="logo.webp"
            alt="Logo"
            className="w-25 h-25 object-contain"
          />
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1.5 ml-2"
          onClick={toggleMenu}
        >
          <span className="w-4 h-0.3 bg-[var(--blue)] rounded"></span>
          <span className="w-4 h-0.3 bg-[var(--blue)] rounded"></span>
          <span className="w-4 h-0.3 bg-[var(--blue)] rounded"></span>
        </button>

        <nav className="hidden md:flex items-center gap-4" aria-label="Navegação principal">
          {navItems.map(({ label, to }) => (
            <HashLink
              key={to}
              smooth
              to={to}
              className="text-[var(--blue)] hover:text-[var(--red)] transition"
            >
              {label}
            </HashLink>
          ))}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex justify-end"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            id="mobile-menu"
            ref={menuRef}
            className="
              w-34 h-full bg-white/95 backdrop-blur-xl shadow-xl 
              p-3 flex flex-col gap-8 animate-slideLeft
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar menu"
              className="self-end text-3xl text-[var(--blue)] hover:text-[var(--red)] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>

            <nav className="flex flex-col gap-6 text-lg font-semibold" aria-label="Menu mobile">
              {navItems.map(({ label, to }) => (
                <HashLink
                  key={to}
                  smooth
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[var(--blue)] hover:text-[var(--red)] transition"
                >
                  {label}
                </HashLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
