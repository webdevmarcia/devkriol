import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Contatos() {
  const ref = useRef(null);

  // PARALLAX DO SCROLL
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  // SCRIPT PARA ENVIAR PARA WHATSAPP
  function sendToWhatsApp(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text =
      `Olá Márcia!%0A%0A` +
      `Esses são os meus dados:%0A` +
      `Nome: ${name}%0A` +
      `Telemóvel: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Descrição: ${message}`;

    const whatsappNumber = "351932663895";

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  }

  return (
    <section
      id="contactos"
      ref={ref}
      className="
        relative w-full py-24 px-6 overflow-hidden scroll-mt-24
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-2xl rounded-3xl
      "
    >
      {/* Glow cinematográfico */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/30 blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-4 text-center space-y-10 relative z-10">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
        >
          Vamos trabalhar juntas?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
        >
          Tem um projeto em mente ou quer dar presença online ao seu negócio?
          Envie-me uma mensagem — respondo pelo WhatsApp o mais rápido possível.
        </motion.p>

        {/* FORMULÁRIO PREMIUM — MOBILE FIRST */}
        <motion.form
          onSubmit={sendToWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            mt-14 flex flex-col gap-6
            bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl
            border border-white/20 shadow-xl
          "
        >
          {/* Nome */}
          <div className="flex flex-col text-left">
            <label className="text-white font-semibold mb-2">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="O seu nome"
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-[var(--accent)] outline-none transition"
            />
          </div>

          {/* Telemóvel */}
          <div className="flex flex-col text-left">
            <label className="text-white font-semibold mb-2">Telemóvel</label>
            <input
              type="text"
              name="phone"
              placeholder="O seu contacto telefónico"
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-[var(--accent)] outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="O seu email"
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-[var(--accent)] outline-none transition"
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col text-left">
            <label className="text-white font-semibold mb-2">Descrição do Projeto</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Descreva o tipo de projeto que tem em mente..."
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-[var(--accent)] outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="
              w-full py-4 bg-[var(--accent)] text-[var(--surface)] font-bold rounded-full text-lg 
              shadow-xl hover:scale-[1.02] active:scale-95 transition-all
            "
          >
            Enviar pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
