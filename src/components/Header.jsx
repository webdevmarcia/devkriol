import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "Sobre", to: "/#sobre" },
  { label: "Serviços", to: "/#servicos" },
  { label: "Processo", to: "/#processo" },
  { label: "Portfólio", to: "/#portfolio" },
  { label: "Contatos", to: "/#contatos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ativo, setAtivo] = useState("");
  const menuRef = useRef(null);

  // Barra de progresso de leitura
  const { scrollYProgress } = useScroll();
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Destaca no menu a secção visível
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAtivo(`/#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ to }) => {
      const el = document.getElementById(to.slice(2));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

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
    <header className={`
      flex items-center justify-between 
      px-3 sticky top-0 z-50 w-full 
      transition-all duration-300
      ${scrolled ? "h-14 bg-white/90 backdrop-blur-md shadow-lg" : "h-15 bg-white shadow-md"}
    `}>
      <motion.div
        style={{ scaleX: progresso }}
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-[var(--blue)] via-[var(--escuro)] to-[var(--red)]"
      />
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-5xl mx-auto">
        <a href="/" className="flex items-center gap-3" aria-label="Voltar para a página inicial">
          <img 
            src="/logo.webp"
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

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navItems.map(({ label, to }) => (
            <HashLink
              key={to}
              smooth
              to={to}
              aria-current={ativo === to ? "true" : undefined}
              className={`relative py-1 font-medium transition hover:text-[var(--red)] ${
                ativo === to ? "text-[var(--red)]" : "text-[var(--blue)]"
              }`}
            >
              {label}
              {ativo === to && (
                <motion.span
                  layoutId="nav-ativo"
                  className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[var(--red)]"
                />
              )}
            </HashLink>
          ))}
          <HashLink
            smooth
            to="/#contatos"
            className="ml-2 px-4 py-1.5 rounded-full bg-[var(--blue)] text-white text-sm font-semibold hover:bg-[var(--red)] transition-colors"
          >
            Orçamento
          </HashLink>
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
