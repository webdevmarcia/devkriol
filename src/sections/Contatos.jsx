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
      `Quero falar sobre o meu projeto.%0A%0A` +
      `Dados do cliente:%0A` +
      `Nome: ${name}%0A` +
      `Telemóvel: ${phone}%0A` +
      `Email: ${email}%0A%0A` +
      `Descrição do projeto:%0A${message}`;

    window.open(`https://wa.me/351932663895?text=${text}`, "_blank");
  }

  return (
    <section
      id="contatos"
      ref={ref}
      className="
        relative w-full py-32 px-6 overflow-hidden
        bg-white/20 backdrop-blur-xl
        border border-white/30
        shadow-2xl rounded-3xl
      "
    >
      {/* Glow cinematográfico */}
      <motion.div
        style={{ y: yGlow, opacity: opacityGlow }}
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 text-center space-y-12 relative z-10">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--blue)]">
            Vamos conversar
          </p>

          <h2 className="text-3xl md:text-3xl font-bold tracking-tight text-[var(--white)] leading-tight">
            Fale com a DevKriol sobre o seu próximo projeto.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl text-lg text-white/90 mx-auto leading-relaxed"
        >
          Quer fortalecer a sua presença digital, melhorar a imagem da sua marca ou criar uma solução que ajude o seu negócio a crescer? Estou aqui para ajudar a transformar a sua ideia em algo profissional, funcional e com impacto real.
        </motion.p>

        {/* FORMULÁRIO PREMIUM */}
        <motion.form
          onSubmit={sendToWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            mt-20 grid grid-cols-1 md:grid-cols-[0.9fr_1.4fr] gap-8 
            bg-white/5 backdrop-blur-2xl p-6 md:p-8 lg:p-10 rounded-[28px] 
            border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.35)] text-lg
          "
        >
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col text-left md:col-span-1">
              <label className="text-[var(--white)] font-semibold mb-2">Nome</label>
              <input
                type="text"
                name="name"
                placeholder="O seu nome"
                required
                className="px-4 py-3.5 rounded-xl bg-white/8 text-white placeholder-white/50 border border-white/20 focus:border-[var(--blue)] focus:bg-white/10 outline-none transition shadow-inner shadow-black/10"
              />
            </div>

            {/* Telemóvel */}
            <div className="flex flex-col text-left md:col-span-1">
              <label className="text-[var(--white)] font-semibold mb-2">Telemóvel</label>
              <input
                type="text"
                name="phone"
                placeholder="O seu contacto"
                required
                className="px-4 py-3.5 rounded-xl bg-white/8 text-white placeholder-white/50 border border-white/20 focus:border-[var(--blue)] focus:bg-white/10 outline-none transition shadow-inner shadow-black/10"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-left md:col-span-2">
              <label className="text-[var(--white)] font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="O seu email"
                required
                className="px-4 py-3.5 rounded-xl bg-white/8 text-white placeholder-white/50 border border-white/20 focus:border-[var(--blue)] focus:bg-white/10 outline-none transition shadow-inner shadow-black/10"
              />
            </div>

            {/* Mensagem */}
            <div className="flex flex-col text-left md:col-span-2">
              <label className="text-[var(--white)] font-semibold mb-2">Descrição do projeto</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Descreva o tipo de projeto que tem em mente..."
                required
                className="px-4 py-3.5 rounded-xl bg-white/8 text-white placeholder-white/50 border border-white/20 focus:border-[var(--blue)] focus:bg-white/10 outline-none transition resize-none shadow-inner shadow-black/10"
              ></textarea>
            </div>

            {/* Botão Enviar */}
            <div className="md:col-span-2 flex justify-center pt-2">
              <button
                type="submit"
                className="
                  w-full md:w-auto px-5 py-2 bg-[var(--blue)] text-white font-bold rounded-full text-lg 
                  shadow-[0_16px_40px_rgba(71,120,255,0.45)] hover:scale-[1.02] active:scale-95 transition-all
                "
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
