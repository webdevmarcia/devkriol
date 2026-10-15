import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <motion.a
          href="https://wa.me/351932663895"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar connosco no WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)]"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="relative w-7 h-7" fill="currentColor">
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.04 0C5.74 0 .6 5.14.6 11.44c0 2.01.53 3.98 1.54 5.72L0 24l6.99-2.1a11.5 11.5 0 0 0 5.05 1.2h.01c6.3 0 11.44-5.14 11.44-11.44 0-3.05-1.19-5.92-3.47-8.18zM12.04 21.3h-.01a9.9 9.9 0 0 1-4.86-1.33l-.35-.2-4.15 1.25 1.28-4.05-.23-.36a9.9 9.9 0 0 1-1.52-5.37c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.9 7c0 5.46-4.45 9.9-9.97 9.9zm5.48-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.8-1.66-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.48 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
