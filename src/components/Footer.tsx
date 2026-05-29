import { motion } from "motion/react";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img src="/MEDLA_logo.png" alt="MEDLA Asesores" className="h-12 w-auto" />
            </div>
            <p className="text-brand-text/60 mb-8 leading-relaxed">
              Dedicados. Cercanos. Expertos. Asesoría jurídica de alta calidad con acompañamiento integral y personalizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-secondary flex items-center justify-center hover:bg-brand-border transition-colors">
                <Twitter className="w-5 h-5 text-brand-text" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-secondary flex items-center justify-center hover:bg-brand-border transition-colors">
                <Instagram className="w-5 h-5 text-brand-text" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-bg-secondary flex items-center justify-center hover:bg-brand-border transition-colors">
                <Linkedin className="w-5 h-5 text-brand-text" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-text mb-8">Páginas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-text/60 hover:text-brand-text transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-brand-text/60 hover:text-brand-text transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-brand-text/60 hover:text-brand-text transition-colors">Servicios</a></li>
              <li><a href="#contact" className="text-brand-text/60 hover:text-brand-text transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-text mb-8">Contacto</h4>
            <ul className="space-y-4 text-brand-text/60 text-sm">
              <li><strong>España:</strong> (+34) 914-321-457</li>
              <li>C/ Velázquez Nº. 27, Piso 1º ext izq, Barrio de Salamanca, CP 28001. Madrid.</li>
              <li className="pt-2"><strong>México:</strong> (+52) 55-4627-1661</li>
              <li>Pafnuncio Padilla Nº. 26, Dep 400 Piso 4. Cd Satélite, Naucalpan de Juárez, CP 53100. Edo. De México.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-text mb-8">Información</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-brand-text/60 hover:text-brand-text transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-brand-text/60 hover:text-brand-text transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="text-brand-text/60 hover:text-brand-text transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="text-brand-text/60 hover:text-brand-text transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-brand-text mb-8">Únete a la familia MEDLA</h4>
            <p className="text-brand-text/60 mb-6 text-sm">
              Recibe las últimas actualizaciones legales y novedades en extranjería.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-brand-bg-secondary border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-brand-text"
              />
              <button className="w-full bg-brand-muted text-brand-text font-semibold py-3 rounded-xl hover:bg-brand-border transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-text/40 text-sm">
            © 2025 MEDLA Asesores. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-brand-text/40 text-sm hover:text-brand-text transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
