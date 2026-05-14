import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Desenvolvimento de Websites",
    description:
      "Criamos websites modernos, rápidos e responsivos — desde páginas institucionais até plataformas completas, com foco em performance e experiência do utilizador.",
    icon: "💻",
  },
  {
    id: 2,
    title: "Design UI/UX",
    description:
      "Desenhamos interfaces elegantes, intuitivas e alinhadas com a identidade de cada marca, garantindo clareza, estética e funcionalidade.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Lojas Online & E‑commerce",
    description:
      "Desenvolvemos lojas online completas com gestão de produtos, pagamentos, carrinho e checkout, criando experiências de compra fluidas e profissionais.",
    icon: "🛒",
  },
  {
    id: 4,
    title: "Branding & Identidade Visual",
    description:
      "Criamos identidades visuais fortes e consistentes — logotipos, paletas de cores e elementos gráficos que reforçam a presença digital da marca.",
    icon: "✨",
  },
  {
    id: 5,
    title: "Manutenção & Suporte",
    description:
      "Acompanhamos o crescimento do seu projeto com atualizações, otimizações e melhorias contínuas, garantindo segurança e desempenho.",
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
          className="text-4xl font-bold text-white"
        >
          Serviços
        </motion.h2>

       
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
