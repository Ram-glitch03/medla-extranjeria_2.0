import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ShieldCheck, Clock, Users } from "lucide-react";

const benefits = [
  {
    title: "Experiencia Comprobada",
    description: "Años de trayectoria en casos de extranjería complejos.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-text" />,
    colSpan: "col-span-1",
  },
  {
    title: "Atención Personalizada",
    description: "Cada caso es único, recibe el trato que merece.",
    icon: <Users className="w-8 h-8 text-brand-text" />,
    colSpan: "col-span-1",
  },
  {
    title: "Trámites sin Demoras",
    description: "Agilizamos tus procesos con gestión eficiente.",
    icon: <Clock className="w-8 h-8 text-brand-text" />,
    colSpan: "col-span-1",
  },
  {
    title: "Alta Tasa de Éxito",
    description: "Maximizamos tus probabilidades de resolución favorable.",
    icon: <TrendingUp className="w-8 h-8 text-brand-text" />,
    colSpan: "col-span-1",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6">
            ¿Por qué elegir MEDLA?
          </h2>
          <p className="text-xl text-brand-text/60 max-w-2xl mx-auto">
            Garantizamos profesionalidad, transparencia y acompañamiento en cada paso de tu proceso migratorio en España.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div className="flex-1 bg-brand-bg-secondary rounded-3xl p-8 border border-brand-border hover:border-brand-text/30 transition-colors flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {benefits[0].icon}
              <h3 className="text-xl font-bold text-brand-text mt-4 mb-2">{benefits[0].title}</h3>
              <p className="text-brand-text/70 text-sm">{benefits[0].description}</p>
            </div>
            <div className="flex-1 bg-brand-bg-secondary rounded-3xl p-8 border border-brand-border hover:border-brand-text/30 transition-colors flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {benefits[1].icon}
              <h3 className="text-xl font-bold text-brand-text mt-4 mb-2">{benefits[1].title}</h3>
              <p className="text-brand-text/70 text-sm">{benefits[1].description}</p>
            </div>
          </motion.div>

          {/* Center Premium Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 row-span-2 bg-gradient-to-br from-brand-bg-secondary to-brand-bg rounded-3xl p-1 border border-brand-text/20 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-text/5 animate-pulse rounded-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-text/0 via-brand-text/20 to-brand-text/0 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            
            <div className="relative w-full h-full bg-brand-bg rounded-[22px] flex flex-col items-center justify-center p-12 text-center overflow-hidden border border-brand-text/10">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] rounded-full bg-brand-accent/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] rounded-full bg-brand-text/10 blur-3xl" />
              
              <div className="mb-8 p-6 bg-brand-bg-secondary/50 rounded-3xl backdrop-blur-sm border border-brand-border">
                <img src="/MEDLA_logo.png" alt="MEDLA Premium" className="w-48 h-auto" />
              </div>
              
              <h3 className="text-3xl font-display font-bold text-brand-text mb-4 relative z-10">
                Tu éxito es nuestro objetivo
              </h3>
              <p className="text-lg text-brand-text/70 max-w-md relative z-10">
                Convertimos la complejidad de las leyes en soluciones claras y efectivas para que asegures tu futuro en España.
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-brand-text font-semibold relative z-10 bg-brand-text/5 px-6 py-3 rounded-full border border-brand-text/10">
                <CheckCircle2 className="w-5 h-5" />
                <span>Asesoría Jurídica Premium</span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            <div className="flex-1 bg-brand-bg-secondary rounded-3xl p-8 border border-brand-border hover:border-brand-text/30 transition-colors flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {benefits[2].icon}
              <h3 className="text-xl font-bold text-brand-text mt-4 mb-2">{benefits[2].title}</h3>
              <p className="text-brand-text/70 text-sm">{benefits[2].description}</p>
            </div>
            <div className="flex-1 bg-brand-bg-secondary rounded-3xl p-8 border border-brand-border hover:border-brand-text/30 transition-colors flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-text/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {benefits[3].icon}
              <h3 className="text-xl font-bold text-brand-text mt-4 mb-2">{benefits[3].title}</h3>
              <p className="text-brand-text/70 text-sm">{benefits[3].description}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
