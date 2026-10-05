import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Desenvolvimento de Websites",
    description:
      "Sites modernos, rápidos e responsivos que ajudam a sua marca a transmitir confiança e converter mais visitas em oportunidades.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Design UI/UX",
    description:
      "Interfaces claras, intuitivas e alinhadas à identidade da sua marca, com foco em experiência, usabilidade e resultados.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Lojas Online & E‑commerce",
    description:
      "Plataformas de venda pensadas para oferecer uma experiência de compra fluida, profissional e preparada para crescer com o negócio.",
    icon: "🛒",
  },
  {
    id: 4,
    title: "Branding & Identidade Visual",
    description:
      "Identidades visuais fortes, memoráveis e consistentes, criando uma presença digital que reforça a percepção da marca.",
    icon: "✨",
  },
  {
    id: 5,
    title: "Manutenção & Suporte",
    description:
      "Acompanhamento contínuo para manter o seu projeto seguro, otimizado e sempre pronto para evoluir com o seu negócio.",
    icon: "🛠️",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
        >
          Soluções que ajudam as marcas a crescer online.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="max-w-2xl mx-auto mt-6 text-white/80 text-lg leading-relaxed"
        >
          Criamos experiências digitais estratégicas, com design, funcionalidade e tecnologia para fortalecer a presença da sua marca e gerar resultados reais.
        </motion.p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.9 }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-white/10 backdrop-blur-xl 
              border border-white/20 
              rounded-2xl p-8 shadow-xl 
              text-left cursor-pointer 
              transition-all
            "
          >
            <div className="text-5xl mb-6">{service.icon}</div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              {service.title}
            </h3>

            <p className="text-white/80 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
