import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", message: "" });
  const whatsappNumber = "573245189838";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      "Hola DISATME, quiero cotizar un proyecto.",
      "",
      `Nombre: ${form.name || "No indicado"}`,
      `Telefono: ${form.phone || "No indicado"}`,
      `Ciudad: ${form.city || "No indicada"}`,
      "Mensaje:",
      form.message || "Sin mensaje.",
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="bg-background px-6 md:px-12 lg:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <span className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              CONTACTO
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] text-foreground"
            >
              HABLEMOS DE TU
              <br />
              <span className="italic font-light">P</span>ROYECTO
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[13px] leading-relaxed text-muted-foreground font-light max-w-sm"
            >
              Cuentanos que espacio quieres remodelar y te
              ayudamos con diseño, materiales, tiempos y
              fabricacion a la medida en Barranquilla, la costa
              y diferentes ciudades de Colombia.
            </motion.p>

            <div className="mt-8 flex flex-col gap-2 text-[13px] text-muted-foreground">
              <a href="https://www.instagram.com/disatme_/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                Instagram: @disatme_
              </a>
              <a href="https://wa.me/573245189838" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                WhatsApp: +57 324 518 9838
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
              className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors font-light"
              required
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Telefono"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors font-light"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                value={form.city}
                onChange={handleChange}
                className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors font-light"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Describe tu proyecto"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-border bg-transparent p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none font-light"
              required
            />

            <button
              type="submit"
              className="self-start inline-flex items-center gap-3 group mt-2"
            >
              <span className="text-xs tracking-[0.15em] text-foreground group-hover:text-muted-foreground transition-colors">
                ENVIAR A WHATSAPP
              </span>
              <span className="w-8 h-px bg-foreground/40 group-hover:w-12 transition-all duration-300" />
              <ArrowRight size={14} className="text-foreground/60" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
