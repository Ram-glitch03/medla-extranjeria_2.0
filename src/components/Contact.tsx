import { motion } from "motion/react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-brand-bg-secondary/50 blur-3xl -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-brand-text">Agenda tu Cita</h2>
          <p className="text-xl text-brand-text/60 font-sans max-w-2xl mx-auto">
            Elige el horario que mejor te convenga y un abogado experto en extranjería se pondrá en contacto contigo para analizar tu caso sin compromiso.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-brand-bg-secondary/50 backdrop-blur-md p-4 md:p-8 rounded-3xl shadow-sm border border-brand-border flex flex-col gap-6"
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/EFi4E6KiwLV8sHBysD5x"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
            scrolling="no"
            id="EFi4E6KiwLV8sHBysD5x_1779956187779"
            title="Agenda tu cita con MEDLA"
          />
        </motion.div>
      </div>
    </section>
  );
}
