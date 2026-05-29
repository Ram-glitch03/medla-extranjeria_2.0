import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-brand-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/MEDLA_logo.png" alt="MEDLA Asesores" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-text/80 hover:text-brand-text transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-muted px-4 py-2 rounded-xl text-sm font-medium hover:bg-brand-border transition-colors"
            >
              Agenda tu cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-text"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-bg border-b border-brand-border p-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-semibold text-brand-text"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center bg-brand-muted py-3 rounded-xl text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Agenda tu cita
          </a>
        </motion.div>
      )}
    </nav>
  );
}
