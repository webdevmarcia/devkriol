

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-white border-t border-black/10">

      {/* Glow suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

        {/* COLUNA 1 — IDENTIDADE */}
        <div className="space-y-4 animate-fadeUp">
          <a href="/" className="flex items-center gap-3">
            <img 
              src="logo.webp" 
              alt="Logo" 
              className="w-30 h-30 object-contain"
            />
          </a>
          <p className="text-black/70 leading-relaxed">
            Desenvolvemos interfaces modernas, elegantes e funcionais para elevar marcas e negócios no digital.
          </p>
        </div>

        {/* COLUNA 2 — CONTACTOS */}
        <div className="space-y-4 animate-fadeUp" style={{ animationDelay: "0.3s" }}>
          

          {/* ÍCONES */}
          <div className="flex gap-4 pt-4 text-[var(--blue)]">

            {/* WhatsApp */}
            <a
              href="https://wa.me/351932663895"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.74 0 .6 5.14.6 11.44c0 2.01.53 3.98 1.54 5.72L0 24l6.99-2.1a11.5 11.5 0 0 0 5.05 1.2h.01c6.3 0 11.44-5.14 11.44-11.44 0-3.05-1.19-5.92-3.47-8.18zM12.04 21.3h-.01a9.9 9.9 0 0 1-4.86-1.33l-.35-.2-4.15 1.25 1.28-4.05-.23-.36a9.9 9.9 0 0 1-1.52-5.37c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.9 7c0 5.46-4.45 9.9-9.97 9.9zm5.48-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.8-1.66-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/webdevmarcia"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/webdevmarcia"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.3 8.1h4.4V24H.3V8.1zM8.6 8.1h4.2v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.6V24h-4.4v-7.5c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24H8.6V8.1z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/webdev_marcia"
              target="_blank"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="3.2" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
            </a>

          </div>
        </div>

        {/* COLUNA 3 — MENSAGEM FINAL */}
        <div className="animate-fadeUp" style={{ animationDelay: "0.6s" }}>
          <p className="text-black/70 leading-relaxed">
            
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-black/10 py-6 text-center text-black/50 text-sm">
        © 2025 DevKriol — Todos os direitos reservados. <br/>
        Política de Privacidade | Termos de Serviço 
        
      </div>
    </footer>
  );
}
