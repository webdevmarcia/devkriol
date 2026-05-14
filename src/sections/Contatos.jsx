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
      ` Nome: ${name}%0A` +
      ` Telemóvel: ${phone}%0A` +
      `Email: ${email}%0A` +
      `Descrição: ${message}`;

    const whatsappNumber = "351932663895";

    window.open(`https://wa.me/${351932663895}?text=${text}`, "_blank");
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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold tracking-tight text-[var(--white)]"
        >
          Entrar em contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-l text-white text-l mx-auto"
        >
          Quer destacar os seus serviços e aumentar a visibilidade do seu negócio para atrair mais clientes? Eu posso ajudar! Desenvolvo websites modernos, responsivos e com um layout impecável, pensados para elevar a imagem profissional da sua marca e gerar mais oportunidades. 
        </motion.p>

        {/* FORMULÁRIO PREMIUM */}
        <motion.form
          onSubmit={sendToWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 
            bg-pink/10 backdrop-blur-xl p-10 rounded-3xl 
              border-[var(--purple)] shadow-2xl text-l
          "
        >
          {/* Nome */}
          <div className="flex flex-col text-left">
            <label className="text-[var(--white)] font-semibold mb-2">Nome</label>
            <input
              type="text"
              name="name"
              placeholder="O seu nome"
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-purple-300 outline-none transition"
            />
          </div>

          {/* Telemóvel */}
          <div className="flex flex-col text-left">
            <label className=" text-[var(--white)] font-semibold mb-2">Telemóvel</label>
            <input
              type="text"
              name="phone"
              placeholder="O seu contacto telefónico"
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-purple-300 outline-none transition"
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
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-purple-300 outline-none transition"
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col text-left md:col-span-2">
            <label className="text-[var(--white)] font-semibold mb-2">Descrição do Projeto </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Descreva o tipo de projeto que tem em mente..."
              required
              className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border--300 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Botão Enviar */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="
                px-10 py-4 bg-[var(--blue)] text-white font-bold rounded-full text-lg 
                shadow-xl hover:scale-[1.08] active:scale-95 transition-all
              "
            >
              Enviar
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
