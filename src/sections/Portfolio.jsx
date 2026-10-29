import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projetosData from "../data/projetosData";

export default function Portfolio() {
  return (
    <section id="projetos" className="scroll-mt-24">
      <div className="text-center mb-12 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Os meus projetos
        </motion.h2>
        <p className="text-white/70 max-w-2xl mx-auto text-center">
          Alguns dos websites que desenvolvi — cada um pensado à medida da identidade de quem o usa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetosData.map((projeto, index) => (
          <ProjectCard key={projeto.titulo} {...projeto} delay={index * 0.12} />
        ))}
      </div>
    </section>
  );
}
